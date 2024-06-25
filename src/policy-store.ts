import * as fs from 'fs';
import * as path from 'path';
import * as iam from 'aws-cdk-lib/aws-iam';
import { CfnPolicyStore } from 'aws-cdk-lib/aws-verifiedpermissions';
import { ArnFormat, IResource, Resource, Stack } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { checkParseSchema, validatePolicy } from './cedar-helpers';
import { Policy, PolicyDefinitionProperty } from './policy';
import {
  AUTH_ACTIONS,
  READ_ACTIONS,
  WRITE_ACTIONS,
} from './private/permissions';

export interface ISchema {
  cedarJson: string;
}

export interface IValidationSettings {
  mode: ValidationSettingsMode;
}

/**
 * Validation Settings mode, according to the Cloudformation PolicyStore resource
 */
export enum ValidationSettingsMode {
  OFF = 'OFF',
  STRICT = 'STRICT',
}

export interface IPolicyStore extends IResource {
  /**
   * ARN of the Policy Store.
   *
   * @attribute
   */
  readonly policyStoreArn: string;

  /**
   * ID of the Policy Store.
   *
   * @attribute
   */
  readonly policyStoreId: string;

  /**
   *
   * Adds an IAM policy statement associated with this policy store to an IAM
   * principal's policy.
   *
   * @param grantee The principal (no-op if undefined)
   * @param actions The set of actions to allow (i.e. "verifiedpermissions:IsAuthorized", "verifiedpermissions:ListPolicies", ...)
   */
  grant(grantee: iam.IGrantable, ...actions: string[]): iam.Grant;

  /**
   * Permits an IAM principal all read operations on the policy store: GetIdentitySource,
   * GetPolicy, GetPolicyStore, GetPolicyTemplate,
   * GetSchema, ListIdentitySources, ListPolicies, ListPolicyTemplates.
   *
   * @param grantee
   */
  grantRead(grantee: iam.IGrantable): iam.Grant;

  /**
   * Permits an IAM principal all write & read operations on the policy store: CreateIdentitySource,
   * CreatePolicy,CreatePolicyTemplate, DeleteIdentitySource, DeletePolicy,
   * DeletePolicyTemplate, PutSchema, UpdateIdentitySource, UpdatePolicy, UpdatePolicyTemplate.
   *
   * @param grantee
   */
  grantWrite(grantee: iam.IGrantable): iam.Grant;

  /**
   * Permits an IAM principal all auth operations on the policy store:
   * IsAuthorized, IsAuthorizedWithToken
   * @param grantee
   */
  grantAuth(grantee: iam.IGrantable): iam.Grant;
}

export interface PolicyStoreProps {
  /**
   * This attribute is not required from an API point of view.
   * It represents the schema (in Cedar) to be applied to the PolicyStore.
   *
   * @default - No schema.
   */
  readonly schema?: ISchema;

  /**
   * The policy store's validation settings.
   *
   * @default - If not provided, the Policy store will be created with ValidationSettingsMode = "OFF"
   */
  readonly validationSettings: IValidationSettings;

  /**
   * The policy store's description
   *
   * @default - No description.
   */
  readonly description?: string;
}

export interface AddPolicyOptions {
  /**
   * The id of the Policy.
   */
  readonly policyId: string;

  /**
   * The configuration of the Policy.
   */
  readonly policyConfiguration: PolicyDefinitionProperty;
}

export interface PolicyStoreAttributes {
  /**
   * The ARN of the Amazon Verified Permissions Policy Store.
   * One of this, or `policyStoreId`, is required.
   *
   * @default - no PolicyStore arn
   */
  readonly policyStoreArn?: string;

  /**
   * The id of the Amazon Verified Permissions PolicyStore.
   * One of this, or `policyStoreArn`, is required.
   *
   * @default - no PolicyStore id
   */
  readonly policyStoreId?: string;
}

abstract class PolicyStoreBase extends Resource implements IPolicyStore {
  abstract readonly policyStoreArn: string;
  abstract readonly policyStoreId: string;

  public grant(grantee: iam.IGrantable, ...actions: string[]): iam.Grant {
    return iam.Grant.addToPrincipal({
      grantee,
      actions,
      resourceArns: [this.policyStoreArn],
      scope: this,
    });
  }

  public grantAuth(grantee: iam.IGrantable): iam.Grant {
    return this.grant(grantee, ...AUTH_ACTIONS);
  }

  public grantRead(grantee: iam.IGrantable): iam.Grant {
    return this.grant(grantee, ...READ_ACTIONS);
  }

  public grantWrite(grantee: iam.IGrantable): iam.Grant {
    return this.grant(grantee, ...WRITE_ACTIONS.concat(READ_ACTIONS));
  }
}

export class PolicyStore extends PolicyStoreBase {
  /**
   * Create a PolicyStore construct that represents an external policy store via policy store id.
   *
   * @param scope The parent creating construct (usually `this`).
   * @param id The construct's name.
   * @param policyStoreId The PolicyStore's id.
   */
  public static fromPolicyStoreId(
    scope: Construct,
    id: string,
    policyStoreId: string,
  ): IPolicyStore {
    return PolicyStore.fromPolicyStoreAttributes(scope, id, { policyStoreId });
  }

  /**
   * Create a PolicyStore construct that represents an external PolicyStore via policy store arn.
   *
   * @param scope The parent creating construct (usually `this`).
   * @param id The construct's name.
   * @param policyStoreArn The PolicyStore's ARN.
   */
  public static fromPolicyStoreArn(
    scope: Construct,
    id: string,
    policyStoreArn: string,
  ): IPolicyStore {
    return PolicyStore.fromPolicyStoreAttributes(scope, id, { policyStoreArn });
  }

  /**
   * Creates a PolicyStore construct that represents an external Policy Store.
   *
   * @param scope The parent creating construct (usually `this`).
   * @param id The construct's name.
   * @param attrs A `PolicyStoreAttributes` object.
   */
  public static fromPolicyStoreAttributes(
    scope: Construct,
    id: string,
    attrs: PolicyStoreAttributes,
  ): IPolicyStore {
    class Import extends PolicyStoreBase {
      readonly policyStoreArn: string;
      readonly policyStoreId: string;

      constructor(policyStoreArn: string, policyStoreId: string) {
        super(scope, id);

        this.policyStoreArn = policyStoreArn;
        this.policyStoreId = policyStoreId;
      }
    }

    let policyStoreId: string;
    let policyStoreArn: string;
    const stack = Stack.of(scope);

    if (!attrs.policyStoreId) {
      if (!attrs.policyStoreArn) {
        throw new Error('One of policyStoreId or policyStoreArn is required!');
      }

      policyStoreArn = attrs.policyStoreArn;
      const maybeId = stack.splitArn(
        attrs.policyStoreArn,
        ArnFormat.SLASH_RESOURCE_NAME,
      ).resourceName;

      if (!maybeId) {
        throw new Error(
          `ARN for PolicyStore must be in the form: ${ArnFormat.SLASH_RESOURCE_NAME}`,
        );
      }

      policyStoreId = maybeId;
    } else {
      if (attrs.policyStoreArn) {
        throw new Error(
          'Only one of policyStoreArn or policyStoreId can be provided',
        );
      }

      policyStoreId = attrs.policyStoreId;
      policyStoreArn = stack.formatArn({
        resource: 'policy-store',
        resourceName: attrs.policyStoreId,
        service: 'verifiedpermissions',
      });
    }

    return new Import(policyStoreArn, policyStoreId);
  }

  private readonly policyStore: CfnPolicyStore;
  /**
   * ARN of the Policy Store.
   *
   * @attribute
   */
  readonly policyStoreArn: string;
  /**
   * ID of the Policy Store.
   *
   * @attribute
   */
  readonly policyStoreId: string;

  /**
   * Name of the Policy Store.
   */
  readonly policyStoreName: string;

  /**
   * Schema definition of the Policy Store.
   */
  readonly schema?: ISchema;

  /**
   * Validation Settings of the Policy Store.
   */
  readonly validationSettings: IValidationSettings;

  /**
   * Description of the Policy Store
   */
  readonly description?: string;

  constructor(
    scope: Construct,
    id: string,
    props: PolicyStoreProps = {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    },
  ) {
    super(scope, id);
    if (props.schema) {
      checkParseSchema(props.schema.cedarJson);
    }
    this.policyStore = new CfnPolicyStore(this, id, {
      schema: props.schema
        ? {
          cedarJson: props.schema.cedarJson,
        }
        : undefined,
      validationSettings: props.validationSettings,
      description: props.description,
    });
    this.policyStoreArn = this.getResourceArnAttribute(
      this.policyStore.attrArn,
      {
        resource: 'policy-store',
        resourceName: this.physicalName,
        service: 'verifiedpermissions',
      },
    );
    this.policyStoreName = this.getResourceNameAttribute(this.policyStore.ref);
    this.policyStoreId = this.policyStore.attrPolicyStoreId;
    this.schema = props.schema;
    this.validationSettings = props.validationSettings;
    this.description = props.description;
  }

  /**
   * Add multiple policies to the policy store
   *
   * @param policyDefinitions An array of policy options for the policy stores policies.
   * @returns An array of created policy constructs.
   */
  public addPolicies(policyDefinitions: AddPolicyOptions[]): Policy[] {
    let policies = policyDefinitions.map((policyOption) => {
      return new Policy(this, policyOption.policyId, {
        policyStore: this,
        definition: policyOption.policyConfiguration,
      });
    });
    return policies;
  }

  /**
   * Takes in an absolute path to a directory containing .cedar files and adds the contents of each
   * .cedar file as policies to this policy store. Parses the policies with cedar-wasm and, if the policy store has a schema,
   * performs semantic validation of the policies as well.
   * @param absolutePath a string representing an absolute path to the directory containing your policies
   * @returns An array of created Policy constructs.
   */
  public addPoliciesFromPath(absolutePath: string): Policy[] {
    if (!fs.statSync(absolutePath).isDirectory()) {
      throw new Error(
        `The path ${absolutePath} does not appear to be a directory`,
      );
    }
    const policyFileNames = fs
      .readdirSync(absolutePath)
      .map((f) => path.join(absolutePath, f))
      .filter((f) => !fs.statSync(f).isDirectory() && f.endsWith('.cedar'));

    if (this.validationSettings.mode === ValidationSettingsMode.STRICT) {
      if (!this.schema) {
        throw new Error(
          'A schema must exist when adding policies to a policy store with strict validation mode.',
        );
      }
      for (const policyFile of policyFileNames) {
        const policyStatement = fs.readFileSync(policyFile, 'utf-8');
        validatePolicy(policyStatement, this.schema.cedarJson);
      }
    }

    const policies = policyFileNames.map((cedarFile) =>
      Policy.fromFile(this, cedarFile, {
        path: cedarFile,
        policyStore: this,
      }),
    );

    return policies;
  }
}
