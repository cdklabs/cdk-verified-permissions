import { IUserPool, IUserPoolClient } from 'aws-cdk-lib/aws-cognito';
import { CfnIdentitySource } from 'aws-cdk-lib/aws-verifiedpermissions';
import { ArnFormat, IResource, Lazy, Resource, Stack } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { IPolicyStore } from './policy-store';

export interface CognitoUserPoolConfiguration {
  /**
   * Client identifiers.
   *
   * @default - empty list.
   */
  readonly clientIds?: string[];

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
   * Identity Source ARN.
   *
   * @attribute
   */
  readonly identitySourceArn: string;

  /**
   * Identity Source identifier.
   *
   * @attribute
   */
  readonly identitySourceId: string;
}

abstract class IdentitySourceBase extends Resource implements IIdentitySource {
  abstract readonly identitySourceArn: string;
  abstract readonly identitySourceId: string;
}

export interface IdentitySourceAttributes {
  /**
   * The identity Source ARN.
   *
   * @attribute
   */
  readonly identitySourceArn?: string;

  /**
   * The identity Source identifier
   *
   * @attribute
   */
  readonly identitySourceId?: string;
}

export interface IdentitySourceProps {
  /**
   *  Identity Source configuration.
   */
  readonly configuration: IdentitySourceConfiguration;

  /**
   * Policy Store in which you want to store this identity source
   *
   * @default - No policy store is set for the identity source.
   */
  readonly policyStore?: IPolicyStore;

  /**
   * Principal entity type
   *
   * @default - No principal entity type for the identity source.
   */
  readonly principalEntityType?: string;
}

export class IdentitySource extends IdentitySourceBase {
  /**
   * Create an Identity Source from its ARN
   *
   * @param scope The parent creating construct (usually `this`).
   * @param id The construct's name.
   * @param identitySourceArn The Identity Source ARN.
   */
  public static fromIdentitySourceArn(
    scope: Construct,
    id: string,
    identitySourceArn: string,
  ): IIdentitySource {
    return IdentitySource.fromIdentitySourceAttributes(scope, id, {
      identitySourceArn,
    });
  }

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
      readonly identitySourceArn: string;
      readonly identitySourceId: string;

      constructor(identitySourceArn: string, identitySourceId: string) {
        super(scope, id);

        this.identitySourceArn = identitySourceArn;
        this.identitySourceId = identitySourceId;
      }
    }

    let identitySourceArn: string;
    let identitySourceId: string;
    const stack = Stack.of(scope);

    if (!attrs.identitySourceId) {
      if (!attrs.identitySourceArn) {
        throw new Error(
          'One of identitySourceId or identitySourceArn is required!',
        );
      }

      identitySourceArn = attrs.identitySourceArn;
      const maybeId = stack.splitArn(
        attrs.identitySourceArn,
        ArnFormat.SLASH_RESOURCE_NAME,
      ).resourceName;

      if (!maybeId) {
        throw new Error(
          `ARN for IdentitySource must be in the form: ${ArnFormat.SLASH_RESOURCE_NAME}`,
        );
      }

      identitySourceId = maybeId;
    } else {
      if (attrs.identitySourceArn) {
        throw new Error(
          'Only one of identitySourceArn or identitySourceId can be provided',
        );
      }

      identitySourceId = attrs.identitySourceId;
      identitySourceArn = stack.formatArn({
        resource: 'identity-source',
        resourceName: attrs.identitySourceId,
        service: 'verifiedpermissions',
      });
    }

    return new Import(identitySourceArn, identitySourceId);
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
  readonly identitySourceArn: string;
  readonly identitySourceId: string;
  readonly openIdIssuer: string;
  readonly userPoolArn: string;
  readonly policyStore?: IPolicyStore;

  constructor(scope: Construct, id: string, props: IdentitySourceProps) {
    super(scope, id);

    this.clientIds =
      props.configuration.cognitoUserPoolConfiguration.clientIds ?? [];
    this.userPoolArn =
      props.configuration.cognitoUserPoolConfiguration.userPool.userPoolArn;
    this.identitySource = new CfnIdentitySource(this, id, {
      configuration: {
        cognitoUserPoolConfiguration: {
          clientIds: Lazy.list({ produce: () => this.clientIds }),
          userPoolArn: this.userPoolArn,
        },
      },
      policyStoreId: props.policyStore?.policyStoreId,
      principalEntityType: props.principalEntityType,
    });
    this.discoveryUrl = this.identitySource.attrDetailsDiscoveryUrl;
    this.identitySourceId = this.identitySource.attrIdentitySourceId;
    this.identitySourceArn = this.stack.formatArn({
      resource: 'identity-source',
      resourceName: this.identitySourceId,
      service: 'verifiedpermissions',
    });
    this.openIdIssuer = this.identitySource.attrDetailsOpenIdIssuer;
    this.policyStore = props.policyStore;
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
