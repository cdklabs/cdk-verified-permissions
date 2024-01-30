import { CfnPolicyTemplate } from 'aws-cdk-lib/aws-verifiedpermissions';
import { IResource, Resource } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { IPolicyStore } from './policy-store';

export interface IPolicyTemplate extends IResource {
  /**
   * The ID of the policy template.
   *
   * @attribute
   */
  readonly policyTemplateId: string;
}

export interface PolicyTemplateProps {
  /**
   * Specifies the content that you want to use for the new policy template, written in the Cedar policy language.
   *
   * @default - The statement to attach to the new or updated policy template.
   */
  readonly statement: string;

  /**
   * The description to attach to the new or updated policy template.
   *
   * @default - No description.
   */
  readonly description?: string;

  /**
   * The policy store that contains the template.
   *
   * @default - No policy store.
   */
  readonly policyStore?: IPolicyStore;
}

export interface PolicyTemplateAttributes {
  /**
   * The id of the Amazon Verified Permissions PolicyTemplate.
   */
  readonly policyTemplateId: string;
}

abstract class PolicyTemplateBase extends Resource implements IPolicyTemplate {
  abstract readonly policyTemplateId: string;
}

export class PolicyTemplate extends PolicyTemplateBase {
  /**
   * Create a PolicyTemplate construct that represents an external policy template via policy template id.
   *
   * @param scope The parent creating construct (usually `this`).
   * @param id The construct's name.
   * @param policyTemplateId The PolicyTemplate's id.
   */
  public static fromPolicyTemplateId(
    scope: Construct,
    id: string,
    policyTemplateId: string,
  ): IPolicyTemplate {
    return PolicyTemplate.fromPolicyTemplateAttributes(scope, id, {
      policyTemplateId,
    });
  }

  /**
   * Creates a PolicyStore construct that represents an external Policy Store.
   *
   * @param scope The parent creating construct (usually `this`).
   * @param id The construct's name.
   * @param attrs A `PolicyStoreAttributes` object.
   */
  public static fromPolicyTemplateAttributes(
    scope: Construct,
    id: string,
    attrs: PolicyTemplateAttributes,
  ): IPolicyTemplate {
    class Import extends PolicyTemplateBase {
      readonly policyTemplateId: string;

      constructor(policyTemplateId: string) {
        super(scope, id);

        this.policyTemplateId = policyTemplateId;
      }
    }

    let policyTemplateId: string;
    policyTemplateId = attrs.policyTemplateId;

    return new Import(policyTemplateId);
  }

  private readonly policyTemplate: CfnPolicyTemplate;
  /**
   * The ID of the policy template.
   *
   * @attribute
   */
  readonly policyTemplateId: string;

  /**
   * The statement of the policy template.
   */
  readonly statement: string;

  /**
   * Description of the policy template.
   */
  readonly description?: string;

  /**
   * The Policy store that contains the template.
   */
  readonly policyStore?: IPolicyStore;

  constructor(scope: Construct, id: string, props: PolicyTemplateProps) {
    super(scope, id);

    this.policyTemplate = new CfnPolicyTemplate(this, id, {
      statement: props.statement,
      description: props.description,
      policyStoreId: props.policyStore?.policyStoreId,
    });
    this.policyTemplateId = this.policyTemplate.attrPolicyTemplateId;
    this.statement = this.policyTemplate.statement;
    this.description = props.description;
    this.policyStore = props.policyStore;
  }
}
