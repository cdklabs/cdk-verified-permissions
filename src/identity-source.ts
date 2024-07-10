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

export interface OpenIdConnectGroupConfiguration {
  /**
   * The token claim that you want Verified Permissions to interpret as group membership
   *
   */
  readonly groupClaim: string;

  /**
   * The policy store entity type that you want to map your users' group claim to
   *
   */
  readonly groupEntityType: string;
}

export interface OpenIdConnectAccessTokenConfiguration {
  /**
   * The access token aud claim values that you want to accept in your policy store
   *
   * @default - no audiences
   *
   */
  readonly audiences?: string[];

  /**
   * The claim that determines the principal in OIDC access tokens
   *
   * @default - no principal claim
   */
  readonly principalIdClaim?: string;
}

export interface OpenIdConnectIdentityTokenConfiguration {
  /**
   * The ID token audience, or client ID, claim values that you want to accept in your policy store from an OIDC identity provider
   *
   * @default - no client IDs
   *
   */
  readonly clientIds?: string[];

  /**
   * The claim that determines the principal in OIDC access tokens
   *
   * @default - no principal claim
   */
  readonly principalIdClaim?: string;
}

export interface OpenIdConnectTokenSelection {
  /**
   * The OIDC configuration for processing access tokens
   *
   * @default - no Access Token Config
   */
  readonly accessTokenOnly?: OpenIdConnectAccessTokenConfiguration;

  /**
   * The OIDC configuration for processing identity (ID) tokens
   *
   * @default - no ID Token Config
   */
  readonly identityTokenOnly?: OpenIdConnectIdentityTokenConfiguration;
}

export interface OpenIdConnectConfiguration {
  /**
   * A descriptive string that you want to prefix to user entities from your OIDC identity provider
   *
   * @default - no Entity ID Prefix
   */
  readonly entityIdPrefix?: string;

  /**
   * The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to
   *
   * @default - no Group Config
   */
  readonly groupConfiguration?: OpenIdConnectGroupConfiguration;

  /**
   * The issuer URL of an OIDC identity provider. This URL must have an OIDC discovery endpoint at the path .well-known/openid-configuration
   *
   */
  readonly issuer: string;

  /**
   * The token type that you want to process from your OIDC identity provider
   */
  readonly tokenSelection: OpenIdConnectTokenSelection;
}

export interface IdentitySourceConfiguration {
  /**
   * Cognito User Pool Configuration.
   *
   * @default - no Cognito User Pool Config
   *
   */
  readonly cognitoUserPoolConfiguration?: CognitoUserPoolConfiguration;

  /**
   * OpenID Connect Idp configuration
   *
   * @default - no OpenID Provider config
   *
   */
  readonly openIdConnectConfiguration?: OpenIdConnectConfiguration;
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
  readonly identitySourceId: string;
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

  readonly identitySource: CfnIdentitySource;
  readonly clientIds: string[];
  readonly identitySourceId: string;
  readonly issuer: string;
  readonly userPoolArn?: string;
  readonly cognitoGroupEntityType?: string;
  readonly policyStore: IPolicyStore;

  constructor(scope: Construct, id: string, props: IdentitySourceProps) {
    super(scope, id);

    if (props.configuration.cognitoUserPoolConfiguration && props.configuration.openIdConnectConfiguration) { throw new Error('Only one between cognitoUserPoolConfiguration or openIdConnectConfiguration must be defined'); }

    let cfnConfiguration: CfnIdentitySource.IdentitySourceConfigurationProperty;
    let issuer: string;

    if (props.configuration.cognitoUserPoolConfiguration) {

      this.clientIds = props.configuration.cognitoUserPoolConfiguration.clientIds ?? [];
      const cognitoGroupConfiguration = props.configuration.cognitoUserPoolConfiguration.groupConfiguration?.groupEntityType
        ? {
          groupEntityType: props.configuration.cognitoUserPoolConfiguration.groupConfiguration.groupEntityType,
        }
        : undefined;
      cfnConfiguration = {
        cognitoUserPoolConfiguration: {
          clientIds: Lazy.list({ produce: () => this.clientIds }),
          userPoolArn: props.configuration.cognitoUserPoolConfiguration.userPool.userPoolArn,
          groupConfiguration: cognitoGroupConfiguration,
        },
      };
      this.cognitoGroupEntityType = cognitoGroupConfiguration?.groupEntityType;
      issuer = 'COGNITO';
    } else if (props.configuration.openIdConnectConfiguration) {

      if (props.configuration.openIdConnectConfiguration.tokenSelection.accessTokenOnly && props.configuration.openIdConnectConfiguration.tokenSelection.identityTokenOnly) { throw new Error('Only one token selection method between accessTokenOnly and identityTokenOnly must be defined'); }

      let tokenSelection: CfnIdentitySource.OpenIdConnectTokenSelectionProperty;
      if (props.configuration.openIdConnectConfiguration.tokenSelection.accessTokenOnly) {
        this.clientIds = [];
        tokenSelection = {
          accessTokenOnly: {
            audiences: props.configuration.openIdConnectConfiguration.tokenSelection.accessTokenOnly.audiences,
            principalIdClaim: props.configuration.openIdConnectConfiguration.tokenSelection.accessTokenOnly.principalIdClaim,
          },
        };
      } else if (props.configuration.openIdConnectConfiguration.tokenSelection.identityTokenOnly) {
        this.clientIds = props.configuration.openIdConnectConfiguration.tokenSelection.identityTokenOnly.clientIds || [];
        tokenSelection = {
          identityTokenOnly: {
            clientIds: Lazy.list({ produce: () => this.clientIds }),
            principalIdClaim: props.configuration.openIdConnectConfiguration.tokenSelection.identityTokenOnly.principalIdClaim,
          },
        };
      } else {
        throw new Error('One token selection method between accessTokenOnly and identityTokenOnly must be defined');
      }
      cfnConfiguration = {
        openIdConnectConfiguration: {
          issuer: props.configuration.openIdConnectConfiguration.issuer,
          entityIdPrefix: props.configuration.openIdConnectConfiguration.entityIdPrefix,
          groupConfiguration: props.configuration.openIdConnectConfiguration.groupConfiguration ? {
            groupClaim: props.configuration.openIdConnectConfiguration.groupConfiguration.groupClaim,
            groupEntityType: props.configuration.openIdConnectConfiguration.groupConfiguration.groupEntityType,
          } : undefined,
          tokenSelection: tokenSelection,
        },
      };
      issuer = props.configuration.openIdConnectConfiguration.issuer;
    } else {
      throw new Error('One Identity provider configuration between cognitoUserPoolConfiguration and openIdConnectConfiguration must be defined');
    }
    this.identitySource = new CfnIdentitySource(this, id, {
      configuration: cfnConfiguration,
      policyStoreId: props.policyStore.policyStoreId,
      principalEntityType: props.principalEntityType,
    });

    this.userPoolArn = props.configuration.cognitoUserPoolConfiguration?.userPool.userPoolArn || undefined;
    this.identitySourceId = this.identitySource.attrIdentitySourceId;
    this.issuer = issuer;
    this.policyStore = props.policyStore;

  }

  /**
   * Add a User Pool Client
   *
   * @param userPoolClient The User Pool Client Construct.
   */
  public addUserPoolClient(userPoolClient: IUserPoolClient): void {
    // TODO: to be fixed, only possible if in cognito mode
    this.addClientId(userPoolClient.userPoolClientId);
  }

  /**
   * Add a clientId to the list
   *
   * @param clientId The clientId
   */
  public addClientId(clientId: string) {
    // TODO: to be fixed, only possible if in cognito mode or idtoken mode
    this.clientIds.push(clientId);
  }

}
