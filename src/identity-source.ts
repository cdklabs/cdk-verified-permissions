import { IUserPool, IUserPoolClient } from 'aws-cdk-lib/aws-cognito';
import { CfnIdentitySource } from 'aws-cdk-lib/aws-verifiedpermissions';
import { IResource, Lazy, Resource } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { IPolicyStore } from './policy-store';

export interface CognitoGroupConfiguration {

  /**
   * The name of the schema entity type that's mapped to the user pool group
   */
  readonly groupEntityType: string;
}

export interface CognitoUserPoolConfiguration {
  /**
   * Client identifiers.
   *
   * @default - empty list.
   */
  readonly clientIds?: string[];

  /**
   * Cognito Group Configuration
   *
   * @default - no Cognito Group configuration provided
   */
  readonly groupConfiguration?: CognitoGroupConfiguration;

  /**
   * Cognito User Pool.
   *
   * @default - no Cognito User Pool
   */
  readonly userPool: IUserPool;
}

export interface IdentitySourceConfiguration {
  /**
   * Cognito User Pool Configuration.
   *
   * @attribute
   */
  readonly cognitoUserPoolConfiguration: CognitoUserPoolConfiguration;
}

export interface IIdentitySource extends IResource {
  /**
   * Identity Source identifier.
   *
   * @attribute
   */
  readonly identitySourceId: string;
}

abstract class IdentitySourceBase extends Resource implements IIdentitySource {
  abstract readonly identitySourceId: string;
}

export interface IdentitySourceAttributes {

  /**
   * The identity Source identifier
   *
   * @attribute
   */
  readonly identitySourceId: string;
}

export interface IdentitySourceProps {
  /**
   *  Identity Source configuration.
   */
  readonly configuration: IdentitySourceConfiguration;

  /**
   * Policy Store in which you want to store this identity source
   *
   */
  readonly policyStore: IPolicyStore;

  /**
   * Principal entity type
   *
   * @default - No principal entity type for the identity source.
   */
  readonly principalEntityType?: string;
}

export class IdentitySource extends IdentitySourceBase {
  /**
   * Creates Identity Source from its attributes
   *
   * @param scope The parent creating construct (usually `this`).
   * @param id The construct's name.
   * @param attrs An `IdentitySourceAttributes` object.
   */
  public static fromIdentitySourceAttributes(
    scope: Construct,
    id: string,
    attrs: IdentitySourceAttributes,
  ): IIdentitySource {
    class Import extends IdentitySourceBase {
      readonly identitySourceId: string;

      constructor(identitySourceId: string) {
        super(scope, id);

        this.identitySourceId = identitySourceId;
      }
    }

    let identitySourceId: string;
    identitySourceId = attrs.identitySourceId;

    return new Import(identitySourceId);
  }

  /**
   * Create an Identity Source from its identifier
   *
   * @param scope The parent creating construct (usually `this`).
   * @param id The construct's name.
   * @param identitySourceId The Identity Source identifier.
   */
  public static fromIdentitySourceId(
    scope: Construct,
    id: string,
    identitySourceId: string,
  ): IIdentitySource {
    return IdentitySource.fromIdentitySourceAttributes(scope, id, {
      identitySourceId,
    });
  }

  private readonly identitySource: CfnIdentitySource;
  readonly clientIds: string[];
  readonly discoveryUrl: string;
  readonly identitySourceId: string;
  readonly openIdIssuer: string;
  readonly userPoolArn: string;
  readonly cognitoGroupEntityType?: string;
  readonly policyStore: IPolicyStore;

  constructor(scope: Construct, id: string, props: IdentitySourceProps) {
    super(scope, id);

    this.clientIds =
      props.configuration.cognitoUserPoolConfiguration.clientIds ?? [];
    this.userPoolArn =
      props.configuration.cognitoUserPoolConfiguration.userPool.userPoolArn;
    const cognitoGroupConfiguration = props.configuration.cognitoUserPoolConfiguration.groupConfiguration?.groupEntityType
      ? {
        groupEntityType: props.configuration.cognitoUserPoolConfiguration.groupConfiguration.groupEntityType,
      }
      : undefined;
    this.identitySource = new CfnIdentitySource(this, id, {
      configuration: {
        cognitoUserPoolConfiguration: {
          clientIds: Lazy.list({ produce: () => this.clientIds }),
          userPoolArn: this.userPoolArn,
          groupConfiguration: cognitoGroupConfiguration,
        },
      },
      policyStoreId: props.policyStore.policyStoreId,
      principalEntityType: props.principalEntityType,
    });
    this.discoveryUrl = this.identitySource.attrDetailsDiscoveryUrl;
    this.identitySourceId = this.identitySource.attrIdentitySourceId;
    this.openIdIssuer = this.identitySource.attrDetailsOpenIdIssuer;
    this.policyStore = props.policyStore;
    this.cognitoGroupEntityType = cognitoGroupConfiguration?.groupEntityType;
  }

  /**
   * Add a User Pool Client
   *
   * @param userPoolClient The User Pool Client Construct.
   */
  public addUserPoolClient(userPoolClient: IUserPoolClient): void {
    this.clientIds.push(userPoolClient.userPoolClientId);
  }
}
