import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App, Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Policy } from '../src/policy';
import { PolicyStore, ValidationSettingsMode } from '../src/policy-store';
import { PolicyTemplate } from '../src/policy-template';

const app = new App();
class PolicyTemplateStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const validationSettingsOff = {
      mode: ValidationSettingsMode.OFF,
    };
    const policyStore = new PolicyStore(this, 'PolicyStore', {
      validationSettings: validationSettingsOff,
    });
    const policyTemplateStatement = `
    permit (
      principal == ?principal,
      action in [TinyTodo::Action::"ReadList", TinyTodo::Action::"ListTasks"],
      resource == ?resource
    );`;
    const template = new PolicyTemplate(this, 'PolicyTemplate', {
      statement: policyTemplateStatement,
      policyStore: policyStore,
    });

    new Policy(this, 'MyTestPolicy', {
      definition: {
        templateLinked: {
          policyTemplate: template,
          principal: {
            entityId: 'exampleId',
            entityType: 'exampleType',
          },
          resource: {
            entityId: 'exampleId',
            entityType: 'exampleType',
          },
        },
      },
      policyStore: policyStore,
    });
  }
}

const stackUnderTest = new PolicyTemplateStack(app, 'PolicyTemplateStack');
new IntegTest(app, 'PolicyTemplateTest', {
  testCases: [stackUnderTest],
  cdkCommandOptions: {
    destroy: {
      enabled: true,
    },
  },
  regions: [stackUnderTest.region],
});
