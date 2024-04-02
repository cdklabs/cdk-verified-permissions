import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App, Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PolicyStore, ValidationSettingsMode } from '../src/policy-store';

const app = new App();
class PolicyStoreStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const cedarJsonSchemaExample = {
      PhotoApp: {
        entityTypes: {
          Photo: {},
          User: {},
        },
        actions: {
          deletePhoto: {
            appliesTo: {
              resourceTypes: ['Photo'],
            },
          },
          viewPhoto: {
            appliesTo: {
              resourceTypes: ['Photo'],
              principalTypes: ['User'],
            },
          },
        },
      },
    };

    new PolicyStore(this, 'PolicyStore', {
      schema: {
        cedarJson: JSON.stringify(cedarJsonSchemaExample),
      },
      validationSettings: {
        mode: ValidationSettingsMode.STRICT,
      },
      description: 'Policy Store Description',
    });
  }
}

const stackUnderTest = new PolicyStoreStack(app, 'PolicyStoreStack');
new IntegTest(app, 'PolicyStoreTest', {
  testCases: [stackUnderTest],
  cdkCommandOptions: {
    destroy: {
      enabled: true,
    },
  },
  regions: [stackUnderTest.region],
});
