import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App, Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Policy } from '../src/policy';
import { PolicyStore, ValidationSettingsMode } from '../src/policy-store';

const app = new App();
class PolicyTestStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const statement = `permit(
        principal,
        action in [MyFirstApp::Action::"Read"],
        resource
    ) when {
        true
    };`;

    const description = 'Test policy assigned to the test store';
    const validationSettingsOff = {
      mode: ValidationSettingsMode.OFF,
    };
    const policyStore = new PolicyStore(this, 'PolicyStore', {
      validationSettings: validationSettingsOff,
    });

    new Policy(this, 'MyTestPolicy', {
      definition: {
        static: {
          statement,
          description,
        },
      },
      policyStore: policyStore,
    });
  }
}

const stackUnderTest = new PolicyTestStack(app, 'PolicyTestStack');
new IntegTest(app, 'PolicyTest', {
  testCases: [stackUnderTest],
  cdkCommandOptions: {
    destroy: {
      enabled: true,
    },
  },
  regions: [stackUnderTest.region],
});
