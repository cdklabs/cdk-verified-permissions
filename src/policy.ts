import * as fs from 'fs';
import * as path from 'path';
import { CfnPolicy } from 'aws-cdk-lib/aws-verifiedpermissions';
import { IResource, Resource } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { checkParsePolicy } from './cedar-helpers';
import { IPolicyStore } from './policy-store';
import { IPolicyTemplate } from './policy-template';

export const POLICY_DESC_SUFFIX_FROM_FILE = ' - Created by CDK';
export interface EntityIdentifierProperty {
  /**
   * The identifier of an entity.
   */
  readonly entityId: string;

  /**
   * The type of an entity.
   */
  readonly entityType: string;
}

export interface TemplateLinkedPolicyDefinitionProperty {
  /**
   * The unique identifier of the policy template used to create this policy.
   */
  readonly policyTemplate: IPolicyTemplate;

  /**
   * The principal associated with this template-linked policy.
   *
   * @default - No Principal. It is set to unspecified.
   */
  readonly principal?: EntityIdentifierProperty;

  /**
   * The resource associated with this template-linked policy.
   *
   * @default - No Resource. It is set to unspecified.
   */
  readonly resource?: EntityIdentifierProperty;
}

export interface StaticPolicyDefinitionProperty {
  /**
   * The policy content of the static policy, written in the Cedar policy language.
   */
  readonly statement: string;

  /**
   * The description of the static policy.
   *
   * @default - Empty description.
   */
  readonly description?: string;
}

export interface PolicyDefinitionProperty {
  /**
   * A structure that describes a static policy.
   *
   * @default - Static must be set for policies created from a static definition. Otherwise, use template linked definitions.
   */
  readonly static?: StaticPolicyDefinitionProperty;

  /**
   * A structure that describes a policy that was instantiated from a template.
   *
   * @default - Template linked must be set for policies created from a static definition. Otherwise, use static definitions.
   */
  readonly templateLinked?: TemplateLinkedPolicyDefinitionProperty;
}

export interface IPolicy extends IResource {
  /**
   * The unique ID of the new or updated policy.
   *
   * @attribute
   */
  readonly policyId: string;

  /**
   * The type of the policy. This is one of the following values: Static or TemplateLinked.
   *
   * @attribute
   */
  readonly policyType: PolicyType;
}

export interface PolicyAttributes {
  /**
   * The unique ID of the new or updated policy.
   */
  readonly policyId: string;

  /**
   * The type of the policy. This is one of the following values: Static or TemplateLinked
   *
   * @default - Static
   */
  readonly policyType?: PolicyType;
}

export interface PolicyProps {
  /**
   * Specifies the policy type and content to use for the new or updated policy.
   * The definition structure must include either a Static or a TemplateLinked element.
   */
  readonly definition: PolicyDefinitionProperty;

  /**
   * The policy store that contains the policy.
   */
  readonly policyStore: IPolicyStore;
}

abstract class PolicyBase extends Resource implements IPolicy {
  abstract readonly policyId: string;
  abstract readonly policyType: PolicyType;
}

export interface StaticPolicyFromFileProps {
  /**
   * The path to the file to be read which contains a single cedar statement representing a policy
   */
  readonly path: string;
  /**
   * The policy store that the policy will be created under.
   */
  readonly policyStore: IPolicyStore;

  /**
   * The description of the static policy
   */
  readonly description?: string;
}

export class Policy extends PolicyBase {
  /**
   *  Import a policy into the CDK using its id.
   *
   * @param scope The parent creating construct (usually `this`).
   * @param id The construct id.
   * @param policyId The policy id.
   */
  public static fromPolicyId(
    scope: Construct,
    id: string,
    policyId: string,
  ): IPolicy {
    return Policy.fromPolicyAttributes(scope, id, { policyId });
  }

  /**
   * Import a Policy construct from attributes.
   *
   * @param scope The parent creating construct (usually `this`).
   * @param id The construct id.
   * @param attrs A `PolicyAttributes` object.
   * @returns
   */
  public static fromPolicyAttributes(
    scope: Construct,
    id: string,
    attrs: PolicyAttributes,
  ): IPolicy {
    class Import extends PolicyBase {
      public readonly policyId: string;
      public readonly policyType: PolicyType;

      constructor(policyType: PolicyType, policyId: string) {
        super(scope, id);
        this.policyType = policyType;
        this.policyId = policyId;
      }
    }
    const policyType = attrs.policyType ?? PolicyType.STATIC;

    return new Import(policyType, attrs.policyId);
  }

  /**
   * Create a policy based on a file containing a cedar policy. Best practice would be
   * for the file name to end in `.cedar` but this is not required. Policy is parsed for valid
   * syntax but not validated against schema. In order to validate against schema, use
   * `PolicyStore.addPoliciesFromPath()`
   *
   * @param scope The parent creating construct (usually `this`).
   * @param id The construct id.
   * @param props A `StaticPolicyFromFileProps` object.
   */
  public static fromFile(
    scope: Construct,
    id: string,
    props: StaticPolicyFromFileProps,
  ): Policy {
    const policyFileContents = fs.readFileSync(props.path).toString();
    checkParsePolicy(policyFileContents);
    let relativePath = path.basename(props.path);
    return new Policy(scope, id, {
      definition: {
        static: {
          statement: policyFileContents,
          description: props.description || `${relativePath}${POLICY_DESC_SUFFIX_FROM_FILE}`,
        },
      },
      policyStore: props.policyStore,
    });
  }

  readonly policyId: string;
  readonly policyType: PolicyType;
  readonly definition: PolicyDefinitionProperty;
  readonly policyStoreId: string;
  private readonly policy: CfnPolicy;

  constructor(scope: Construct, id: string, props: PolicyProps) {
    super(scope, id);

    // validations
    if (props.definition.static && props.definition.templateLinked) {
      throw new Error('Policy can either be static or templateLinked');
    }

    let definition;
    if (props.definition.static) {
      checkParsePolicy(props.definition.static.statement);
      definition = {
        static: {
          ...props.definition.static,
          statement: props.definition.static.statement,
        },
      };
    } else if (props.definition.templateLinked) {
      definition = {
        templateLinked: {
          policyTemplateId:
            props.definition.templateLinked.policyTemplate.policyTemplateId,
          principal: props.definition.templateLinked.principal,
          resource: props.definition.templateLinked.resource,
        },
      };
    } else {
      throw new Error('Policy must either be static or templateLinked');
    }

    // resource
    this.policy = new CfnPolicy(this, id, {
      definition: definition,
      policyStoreId: props.policyStore.policyStoreId,
    });

    // assign construct props
    this.policyId = this.policy.attrPolicyId;
    this.policyType = props.definition.static
      ? PolicyType.STATIC
      : PolicyType.TEMPLATELINKED;
    this.definition = props.definition;
    this.policyStoreId = props.policyStore.policyStoreId;
  }
}

/**
 * PolicyType options
 */
export enum PolicyType {
  STATIC = 'Static',
  TEMPLATELINKED = 'TemplateLinked',
}
