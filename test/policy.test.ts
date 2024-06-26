import path from 'path';
import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {
  CfnPolicyStore,
  CfnPolicyTemplate,
} from 'aws-cdk-lib/aws-verifiedpermissions';
import { getResourceLogicalId } from './utils';
import { Policy, PolicyDefinitionProperty, PolicyType } from '../src/policy';
import { PolicyStore, ValidationSettingsMode } from '../src/policy-store';
import { PolicyTemplate } from '../src/policy-template';

describe('Policy creation', () => {
  // Example static statement to reuse
  const statementString = `permit (
    principal,
    action in [MyFirstApp::Action::"Read"],
    resource
)
when { true };`;

  const policyTemplateStatement = `permit (
      principal == ?principal,
      action in [TinyTodo::Action::"ReadList", TinyTodo::Action::"ListTasks"],
      resource == ?resource
    );`;

  // Example description to reuse
  const description = 'Test policy assigned to the test store';

  test('Creating a policy with a static definition should have the defined properties', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });

    // Create a policy and add it to the policy store
    const policy = new Policy(stack, 'MyTestPolicy', {
      definition: {
        static: {
          statement: statementString,
          description,
        },
      },
      policyStore: policyStore,
    });

    // THEN
    // Validate Cfn properties
    Template.fromStack(stack).hasResourceProperties(
      'AWS::VerifiedPermissions::Policy',
      {
        Definition: {
          Static: {
            Description: description,
            Statement: statementString,
          },
        },
        PolicyStoreId: {
          'Fn::GetAtt': [
            getResourceLogicalId(policyStore, CfnPolicyStore),
            'PolicyStoreId',
          ],
        },
      },
    );

    // Validate construct properties
    expect(policy.policyId).toBeDefined();
    expect(policy.policyType).toEqual(PolicyType.STATIC);
    expect(policy.definition).toEqual({
      static: {
        statement: statementString,
        description,
      },
    });
  });

  test('Creating a policy with an invalid static definition should throw', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });

    expect(() => {
      new Policy(stack, 'MyTestPolicy', {
        definition: {
          static: {
            statement: 'invalid policy',
            description,
          },
        },
        policyStore: policyStore,
      });
    }).toThrow();
  });

  test('Creating a policy with a static definition from path', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });

    // Create a policy and add it to the policy store
    const policy = Policy.fromFile(stack, 'MyTestPolicy', {
      policyStore,
      description,
      path: 'test/test-policies/statement.cedar',
    });

    // THEN
    // Validate Cfn properties
    Template.fromStack(stack).hasResourceProperties(
      'AWS::VerifiedPermissions::Policy',
      {
        Definition: {
          Static: {
            Description: description,
            Statement: statementString,
          },
        },
        PolicyStoreId: {
          'Fn::GetAtt': [
            getResourceLogicalId(policyStore, CfnPolicyStore),
            'PolicyStoreId',
          ],
        },
      },
    );

    // Validate construct properties
    expect(policy.policyId).toBeDefined();
    expect(policy.policyType).toEqual(PolicyType.STATIC);
  });

  test('Creating a policy with a template linked definition should have the defined properties', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const template = new PolicyTemplate(stack, 'PolicyTemplate', {
      statement: policyTemplateStatement,
      policyStore: policyStore,
    });

    // Create a policy and add it to the policy store
    const policy = new Policy(stack, 'MyTestPolicy', {
      definition: {
        templateLinked: {
          policyTemplate: template,
          principal: {
            entityId: 'id',
            entityType: 'type',
          },
          resource: {
            entityId: 'id',
            entityType: 'type',
          },
        },
      },
      policyStore: policyStore,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties(
      'AWS::VerifiedPermissions::Policy',
      {
        Definition: {
          TemplateLinked: {
            PolicyTemplateId: {
              'Fn::GetAtt': [
                getResourceLogicalId(template, CfnPolicyTemplate),
                'PolicyTemplateId',
              ],
            },
            Principal: {
              EntityId: 'id',
              EntityType: 'type',
            },
            Resource: {
              EntityId: 'id',
              EntityType: 'type',
            },
          },
        },
        PolicyStoreId: {
          'Fn::GetAtt': [
            getResourceLogicalId(policyStore, CfnPolicyStore),
            'PolicyStoreId',
          ],
        },
      },
    );

    // Validate construct properties
    expect(policy.policyId).toBeDefined();
    expect(policy.policyType).toEqual(PolicyType.TEMPLATELINKED);
    expect(policy.definition).toEqual({
      templateLinked: {
        policyTemplate: template,
        principal: {
          entityId: 'id',
          entityType: 'type',
        },
        resource: {
          entityId: 'id',
          entityType: 'type',
        },
      },
    });
  });

  test('Creating a policy with a static and template linked definition should throw an error', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const template = new PolicyTemplate(stack, 'PolicyTemplate', {
      statement: policyTemplateStatement,
      policyStore: policyStore,
    });

    // THEN
    expect(() => {
      new Policy(stack, 'MyTestPolicy', {
        definition: {
          static: {
            statement: statementString,
          },
          templateLinked: {
            policyTemplate: template,
          },
        },
        policyStore: policyStore,
      });
    }).toThrow('Policy can either be static or templateLinked');
  });

  test('Creating a policy without a definition should throw an error', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });

    // THEN
    expect(() => {
      new Policy(stack, 'MyTestPolicy', {
        definition: {},
        policyStore: policyStore,
      });
    }).toThrow('Policy must either be static or templateLinked');
  });

  test('Creating a policy with an unknown definition type should throw an error', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });

    // THEN
    expect(() => {
      const policyDefinitionProperty: PolicyDefinitionProperty = {
        blah: {},
      } as unknown as PolicyDefinitionProperty;
      new Policy(stack, 'MyTestPolicy', {
        definition: policyDefinitionProperty,
        policyStore: policyStore,
      });
    }).toThrow('Policy must either be static or templateLinked');
  });

  describe('Import existing policy', () => {
    test('Referencing existing policy providing the policy id and type', () => {
      // GIVEN
      const stack = new Stack();

      // WHEN
      const policyId = 'myid';
      const policyType = PolicyType.STATIC;
      const policy = Policy.fromPolicyAttributes(stack, 'ImportedPolicy', {
        policyId: policyId,
        policyType: policyType,
      });

      // THEN
      expect(policy.policyId).toBe(policyId);
      expect(policy.policyType).toBe(policyType);
    });

    test('Referencing existing policy providing the policy id', () => {
      // GIVEN
      const stack = new Stack();

      // WHEN
      const policyId = 'myid';
      const policy = Policy.fromPolicyId(stack, 'ImportedPolicy', policyId);

      // THEN
      expect(policy.policyId).toBe(policyId);
    });
  });

  describe('Import policy from file', () => {
    test('Importing a syntactically valid policy from a file should succeed', () => {
      // GIVEN
      const stack = new Stack();
      const policyStore = new PolicyStore(stack, 'PolicyStore', {
        validationSettings: {
          mode: ValidationSettingsMode.OFF,
        },
      });

      // WHEN
      const policy = Policy.fromFile(
        stack,
        'ImportedPolicy',
        {
          path: path.join(__dirname, 'test-policies', 'all-valid', 'policy1.cedar'),
          policyStore,
        },
      );

      // THEN
      expect(policy.policyId).toBeDefined();
      expect(policy.policyType).toEqual(PolicyType.STATIC);
      const policyStatement = policy.definition.static?.statement;
      expect(policyStatement).toEqual('permit(principal, action, resource);');
    });

    test('Importing a syntactically invalid policy from a file should fail', () => {
      // GIVEN
      const stack = new Stack();
      const policyStore = new PolicyStore(stack, 'PolicyStore', {
        validationSettings: {
          mode: ValidationSettingsMode.OFF,
        },
      });

      // THEN
      expect(() => {
        Policy.fromFile(
          stack,
          'ImportedPolicy',
          {
            path: path.join(__dirname, 'test-policies', 'invalidPolicy1.cedar'),
            policyStore,
          },
        );
      }).toThrow('Invalid policy statement');
    });
  });
});
