import { CfnPolicyStoreAlias } from 'aws-cdk-lib/aws-verifiedpermissions';
import { IResource, Resource } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { IPolicyStore } from './policy-store';


export interface IPolicyStoreAlias extends IResource {
  /**
   * The name of the policy store alias.
   *
   * @attribute
   */
  readonly aliasName: string;
}

export interface PolicyStoreAliasProps {
  /**
   * The name of the policy store alias.
   */
  readonly aliasName: string;

  /**
   * The policy store to associate with this alias.
   */
  readonly policyStore: IPolicyStore;
}

export interface PolicyStoreAliasAttributes {
  /**
   * The name of the policy store alias.
   */
  readonly aliasName: string;
}

abstract class PolicyStoreAliasBase extends Resource implements IPolicyStoreAlias {
  abstract readonly aliasName: string;
}

export class PolicyStoreAlias extends PolicyStoreAliasBase {
  /**
   * Creates a PolicyStoreAlias construct that represents an external policy store alias.
   *
   * @param scope The parent creating construct (usually `this`).
   * @param id The construct's name.
   * @param aliasName The alias name.
   */
  public static fromAliasName(
    scope: Construct,
    id: string,
    aliasName: string,
  ): IPolicyStoreAlias {
    return PolicyStoreAlias.fromPolicyStoreAliasAttributes(scope, id, {
      aliasName,
    });
  }

  /**
   * Creates a PolicyStoreAlias construct that represents an external policy store alias.
   *
   * @param scope The parent creating construct (usually `this`).
   * @param id The construct's name.
   * @param attrs A `PolicyStoreAliasAttributes` object.
   */
  public static fromPolicyStoreAliasAttributes(
    scope: Construct,
    id: string,
    attrs: PolicyStoreAliasAttributes,
  ): IPolicyStoreAlias {
    class Import extends PolicyStoreAliasBase {
      readonly aliasName: string;

      constructor(aliasName: string) {
        super(scope, id);
        this.aliasName = aliasName;
      }
    }

    return new Import(attrs.aliasName);
  }

  private readonly policyStoreAlias: CfnPolicyStoreAlias;

  /**
   * The name of the policy store alias.
   *
   * @attribute
   */
  readonly aliasName: string;

  /**
   * The policy store associated with this alias.
   */
  readonly policyStore: IPolicyStore;

  constructor(scope: Construct, id: string, props: PolicyStoreAliasProps) {
    super(scope, id);

    this.policyStoreAlias = new CfnPolicyStoreAlias(this, id, {
      aliasName: props.aliasName,
      policyStoreId: props.policyStore.policyStoreId,
    });

    this.aliasName = this.policyStoreAlias.aliasName;
    this.policyStore = props.policyStore;
  }
}
