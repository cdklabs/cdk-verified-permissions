import { assert } from 'console';
import fs from 'fs';
import path from 'path';
import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {
  CfnPolicy,
  CfnPolicyStore,
  CfnPolicyTemplate,
} from 'aws-cdk-lib/aws-verifiedpermissions';
import { getResourceLogicalId } from './utils';
import { getPolicyDescription, getPolicyId, POLICY_DESCRIPTION_ANNOTATION } from '../src/cedar-helpers';
import { Policy, PolicyDefinitionProperty, PolicyType, POLICY_DESC_SUFFIX_FROM_FILE } from '../src/policy';
import { PolicyStore, ValidationSettingsMode } from '../src/policy-store';
import { PolicyTemplate } from '../src/policy-template';

describe('Policy creation', () => {
  // Example static statement to reuse
  const policyStatement = `permit (
    principal,
    action in [MyFirstApp::Action::"Read"],
    resource
  )
  when { true };`;

  // Example static statement to reuse with the addition of providing the description of the policy through Cedar annotation
  const descriptionForAnnotation = 'I am a description';
  const policyStatementWithAnnotationDescription = `${POLICY_DESCRIPTION_ANNOTATION}("${descriptionForAnnotation}")
permit (
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
          statement: policyStatement,
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
            Statement: policyStatement,
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
        statement: policyStatement,
        description,
      },
    });
  });

  test('Creating a policy with static definition provided including description should have the defined properties and \
    description should be the one passed as property, not the one present inside the policy statement via annotation', () => {
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
          statement: policyStatementWithAnnotationDescription,
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
            Statement: policyStatementWithAnnotationDescription,
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
        statement: policyStatementWithAnnotationDescription,
        description,
      },
    });
  });

  test('Creating a policy with static definition provided excluding description should have the defined properties and\
    description should be the one present inside the policy statement provided via annotation', () => {
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
          statement: policyStatementWithAnnotationDescription,
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
            Description: descriptionForAnnotation,
            Statement: policyStatementWithAnnotationDescription,
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
        statement: policyStatementWithAnnotationDescription,
        description: descriptionForAnnotation,
      },
    });
  });

  test('Creating a policy with static definition provided excluding description both via property and via annotation\
    should have the defined properties and description should be undefined', () => {
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
          statement: policyStatement,
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
            Statement: policyStatement,
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
        statement: policyStatement,
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

  test('Creating a policy with an invalid static definition should succeed if policy validation is disabled', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });

    const invalidPolicyStatement = 'invalid policy';

    const policy = new Policy(stack, 'MyTestPolicy', {
      definition: {
        static: {
          statement: invalidPolicyStatement,
          enablePolicyValidation: false,
        },
      },
      policyStore: policyStore,
    });

    // Validate Cfn properties
    Template.fromStack(stack).hasResourceProperties(
      'AWS::VerifiedPermissions::Policy',
      {
        Definition: {
          Static: {
            Statement: invalidPolicyStatement,
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
        statement: invalidPolicyStatement,
        enablePolicyValidation: false,
      },
    });


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

    let policyStatementInFile = fs.readFileSync('test/test-policies/statement.cedar').toString();

    // Create a policy and add it to the policy store
    const policies = Policy.fromFile(stack, 'MyTestPolicy', {
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
            Statement: policyStatementInFile,
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
    expect(policies.length).toBe(1);
    expect(policies[0].policyId).toBeDefined();
    expect(policies[0].policyType).toEqual(PolicyType.STATIC);
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
            statement: policyStatement,
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
    test('Importing a syntactically valid policy from a file should succeed and policy description should contains base path of file', () => {
      // GIVEN
      const stack = new Stack();
      const policyStore = new PolicyStore(stack, 'PolicyStore', {
        validationSettings: {
          mode: ValidationSettingsMode.OFF,
        },
      });
      let basePath = 'policy1.cedar';
      let fullPath = path.join(__dirname, 'test-policies', 'all-valid', basePath);
      let fileContents = fs.readFileSync(fullPath, 'utf8');
      // WHEN
      const policies = Policy.fromFile(
        stack,
        'ImportedPolicy',
        {
          path: fullPath,
          policyStore,
        },
      );

      // THEN
      expect(policies.length).toBe(1);
      expect(policies[0].policyId).toBeDefined();
      expect(policies[0].policyType).toEqual(PolicyType.STATIC);
      expect(policies[0].definition.static?.description).toContain(basePath);
      expect(policies[0].definition.static?.statement).toEqual(fileContents);
      // Validate Cfn properties
      Template.fromStack(stack).hasResourceProperties(
        'AWS::VerifiedPermissions::Policy',
        {
          Definition: {
            Static: {
              Description: basePath + POLICY_DESC_SUFFIX_FROM_FILE,
              Statement: fileContents,
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
    });

    test('Importing a syntactically valid policy from a file should succeed and policy description should be the one in the Cedar annotation', () => {
      // GIVEN
      const stack = new Stack();
      const policyStore = new PolicyStore(stack, 'PolicyStore', {
        validationSettings: {
          mode: ValidationSettingsMode.OFF,
        },
      });
      let basePath = 'policy1_with_desc_annotation.cedar';
      let policyPath = path.join(__dirname, 'test-policies', 'all-valid', basePath);
      let statementInFile = fs.readFileSync(policyPath).toString();
      let descriptionInFile = getPolicyDescription(statementInFile);

      // WHEN
      const policies = Policy.fromFile(
        stack,
        'ImportedPolicy',
        {
          path: policyPath,
          policyStore,
        },
      );

      // THEN
      expect(policies.length).toBe(1);
      expect(policies[0].policyId).toBeDefined();
      expect(policies[0].policyType).toEqual(PolicyType.STATIC);
      expect(policies[0].definition.static?.description).toBe(descriptionInFile);
      expect(policies[0].definition.static?.statement).toEqual(statementInFile);
    });

    test('Importing a syntactically valid policy from a file should succeed. If policy description is explicited it should not take precedence over the one in the Cedar annotation', () => {
      // GIVEN
      const stack = new Stack();
      const policyStore = new PolicyStore(stack, 'PolicyStore', {
        validationSettings: {
          mode: ValidationSettingsMode.OFF,
        },
      });
      let basePath = 'policy1_with_desc_annotation.cedar';
      let policyPath = path.join(__dirname, 'test-policies', 'all-valid', basePath);
      let testDesc = 'testDescription';
      let statementInFile = fs.readFileSync(policyPath).toString();
      let descInFile = getPolicyDescription(statementInFile);

      // WHEN
      const policies = Policy.fromFile(
        stack,
        'ImportedPolicy',
        {
          path: policyPath,
          policyStore,
          description: testDesc,
        },
      );

      // THEN
      expect(policies.length).toBe(1);
      expect(policies[0].policyId).toBeDefined();
      expect(policies[0].policyType).toEqual(PolicyType.STATIC);
      expect(policies[0].definition.static?.description).toBe(descInFile);
      expect(policies[0].definition.static?.statement).toEqual(statementInFile);
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
      }).toThrow();
    });

    test('Importing a syntactically valid policy from a file should succeed if policy validation is not enabled', () => {
      // GIVEN
      const stack = new Stack();
      const policyStore = new PolicyStore(stack, 'PolicyStore', {
        validationSettings: {
          mode: ValidationSettingsMode.OFF,
        },
      });
      let basePath = 'policy1.cedar';
      let policyPath = path.join(__dirname, 'test-policies', 'all-valid', basePath);
      let testDesc = 'testDescription';

      let statementInFile = fs.readFileSync(policyPath).toString();
      // THEN
      const policy = Policy.fromFile(
        stack,
        'ImportedPolicy',
        {
          path: policyPath,
          policyStore,
          description: testDesc,
          enablePolicyValidation: false,
        },
      );
      expect(policy[0].policyId).toBeDefined();
      expect(policy[0].policyType).toEqual(PolicyType.STATIC);
      expect(policy[0].definition.static?.description).toBe(testDesc);
      expect(policy[0].definition.static?.statement).toEqual(statementInFile);
    });
  });
  test('Importing a syntactically valid policy from a file should succeed. If policy id is explicited it should not take precedence over the one in the Cedar annotation', () => {
    // GIVEN
    const stack = new Stack();
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    let basePath = 'policy1_with_desc_id_annotation.cedar';
    let policyPath = path.join(__dirname, 'test-policies', 'all-valid', basePath);
    let testDesc = 'testDescription';
    let statementInFile = fs.readFileSync(policyPath).toString();
    let idInFile = getPolicyId(statementInFile);
    let defaultId = 'ImportedPolicy';

    // WHEN
    const policies = Policy.fromFile(
      stack,
      defaultId,
      {
        path: policyPath,
        policyStore,
        description: testDesc,
      },
    );

    // THEN
    expect(policies.length).toBe(1);
    expect(policies[0].policyId).toBeDefined();
    expect(policies[0].policyType).toEqual(PolicyType.STATIC);
    assert((policies[0].node.children[0] as CfnPolicy).logicalId.includes(idInFile!!));
    assert(!(policies[0].node.children[0] as CfnPolicy).logicalId.includes(defaultId));
    expect(policies[0].definition.static?.statement).toEqual(statementInFile);
  });

  test('Importing a syntactically valid policy from a file should succeed. If policy id is not specified in the file the explicited one should be the id', () => {
    // GIVEN
    const stack = new Stack();
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    let basePath = 'policy1.cedar';
    let policyPath = path.join(__dirname, 'test-policies', 'all-valid', basePath);
    let testDesc = 'testDescription';
    let statementInFile = fs.readFileSync(policyPath).toString();
    let defaultId = 'ImportedPolicy';

    // WHEN
    const policies = Policy.fromFile(
      stack,
      defaultId,
      {
        path: policyPath,
        policyStore,
        description: testDesc,
      },
    );

    // THEN
    expect(policies.length).toBe(1);
    expect(policies[0].policyId).toBeDefined();
    expect(policies[0].policyType).toEqual(PolicyType.STATIC);
    assert((policies[0].node.children[0] as CfnPolicy).logicalId.includes(defaultId));
    expect(policies[0].definition.static?.statement).toEqual(statementInFile);
  });

  test('Importing multiple policies from a file with same id should not succeed. Two policies with annotations in file', () => {
    const stack = new Stack();
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    let basePath = 'invalid_policies_same_ids.cedar';
    let policyPath = path.join(__dirname, 'test-policies', basePath);

    // WHEN
    expect(() => {
      Policy.fromFile(
        stack,
        'ImportedPolicy',
        {
          path: policyPath,
          policyStore,
          description: 'test',
        },
      );
    }).toThrow();
  });
  test('Importing multiple policies from a file with same id should not succeed. Several policies in file, one of them without id annotation - using same default id as one alreaady present in file', () => {
    const stack = new Stack();
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    let basePath = 'multiple_policies_with_annotations.cedar';
    let policyPath = path.join(__dirname, 'test-policies', 'all-valid', basePath);
    let policyDefaultId = 'IamAnotherBeautifulID';

    // WHEN
    expect(() => {
      Policy.fromFile(
        stack,
        policyDefaultId,
        {
          path: policyPath,
          policyStore,
          description: 'test',
        },
      );
    }).toThrow(`There is already a Construct with name '${policyDefaultId}' in Stack`);
  });
});
