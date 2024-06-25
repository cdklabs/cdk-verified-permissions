import * as fs from 'fs';
import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CfnPolicyStore } from 'aws-cdk-lib/aws-verifiedpermissions';
import { getResourceLogicalId } from './utils';
import { PolicyStore, ValidationSettingsMode } from '../src/policy-store';
import { PolicyTemplate } from '../src/policy-template';

const policyTemplateStatement = `
permit (
  principal == ?principal,
  action in [TinyTodo::Action::"ReadList", TinyTodo::Action::"ListTasks"],
  resource == ?resource
);`;

describe('Policy Template creation', () => {
  test('Policy Template creation with Statement and PolicyStore', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });

    // WHEN
    new PolicyTemplate(stack, 'PolicyTemplate', {
      statement: policyTemplateStatement,
      policyStore: policyStore,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties(
      'AWS::VerifiedPermissions::PolicyTemplate',
      {
        Statement: policyTemplateStatement,
      },
    );
  });

  test('Policy Template with invalid statement throws', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });

    expect(()=> {
      new PolicyTemplate(stack, 'PolicyTemplate', {
        statement: 'invalid statement',
        policyStore: policyStore,
      });
    }).toThrow();
  });

  test('Policy Template creation with Statement and Description and PolicyStore', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });

    // WHEN
    new PolicyTemplate(stack, 'PolicyTemplate', {
      statement: policyTemplateStatement,
      description: 'Test Description for Policy Template',
      policyStore: policyStore,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties(
      'AWS::VerifiedPermissions::PolicyTemplate',
      {
        Statement: policyTemplateStatement,
        Description: 'Test Description for Policy Template',
        PolicyStoreId: {
          'Fn::GetAtt': [
            getResourceLogicalId(policyStore, CfnPolicyStore),
            'PolicyStoreId',
          ],
        },
      },
    );
  });
});

describe('Policy template reference existing policy template', () => {
  test('Referencing existing policy template providing policy template id', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    const policyTemplateId = 'testId';
    const policyTemplate = PolicyTemplate.fromPolicyTemplateId(
      stack,
      'ImportedPolicyTemplate',
      policyTemplateId,
    );

    // THEN
    expect(policyTemplate.policyTemplateId).toBe(policyTemplateId);
  });

  test('Policy Template from file', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });

    // WHEN
    PolicyTemplate.fromFile(stack, 'PolicyTemplate', {
      policyStore,
      path: 'test/test-policies/template.cedar',
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties(
      'AWS::VerifiedPermissions::PolicyTemplate',
      {
        Statement: fs.readFileSync('test/test-policies/template.cedar', 'utf-8'),
      },
    );
  });

  test('Policy Template from file, with invalid file (no slots)', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });

    expect(() => {
      PolicyTemplate.fromFile(stack, 'PolicyTemplate', {
        policyStore,
        path: 'test/test-policies/statement.cedar',
      });
    }).toThrow();
  });
});
