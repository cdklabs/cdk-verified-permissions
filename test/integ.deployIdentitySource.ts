import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App, Stack } from 'aws-cdk-lib';
import { UserPool, UserPoolClient } from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';
import { IdentitySource } from '../src/identity-source';
import { PolicyStore, ValidationSettingsMode } from '../src/policy-store';

const app = new App();
class IdentitySourceStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const validationSettingsStrict = {
      mode: ValidationSettingsMode.STRICT,
    };
    const cedarJsonSchema = {
      PhotoApp: {
        entityTypes: {
          User: {},
          Photo: {},
        },
        actions: {
          viewPhoto: {
            appliesTo: {
              principalTypes: ['User'],
              resourceTypes: ['Photo'],
            },
          },
        },
      },
    };
    const cedarSchema = {
      cedarJson: JSON.stringify(cedarJsonSchema),
    };
    const policyStore = new PolicyStore(this, 'PolicyStore', {
      schema: cedarSchema,
      validationSettings: validationSettingsStrict,
    });
    const userPool = new UserPool(this, 'UserPool');
    const userPoolClient = new UserPoolClient(this, 'UserPoolClient', {
      userPool: userPool,
    });
    const cognitoGroupEntityType = 'test';
    new IdentitySource(this, 'IdentitySource', {
      configuration: {
        cognitoUserPoolConfiguration: {
          clientIds: [userPoolClient.userPoolClientId],
          userPool: userPool,
          groupConfiguration: {
            groupEntityType: cognitoGroupEntityType,
          },
        },
      },
      policyStore: policyStore,
      principalEntityType: 'User',
    });
  }
}

const stackUnderTest = new IdentitySourceStack(app, 'IdentitySourceStack');
new IntegTest(app, 'IdentitySourceTest', {
  testCases: [stackUnderTest],
  cdkCommandOptions: {
    destroy: {
      enabled: true,
    },
  },
  regions: [stackUnderTest.region],
});
