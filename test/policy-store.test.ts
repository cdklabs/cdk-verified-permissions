import * as path from 'path';
import * as cedar from '@cedar-policy/cedar-wasm/nodejs';
import { ArnFormat, Aws, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { RestApi } from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import { CfnPolicy, CfnPolicyStore } from 'aws-cdk-lib/aws-verifiedpermissions';
import { getResourceLogicalId } from './utils';
import { PolicyDefinitionProperty } from '../src/policy';
import {
  AddPolicyOptions,
  PolicyStore,
  ValidationSettingsMode,
  DeletionProtectionMode,
} from '../src/policy-store';
import {
  AUTH_ACTIONS,
  READ_ACTIONS,
  WRITE_ACTIONS,
} from '../src/private/permissions';

const exampleSchema: cedar.Schema = {
  json: {
    PhotoApp: {
      commonTypes: {
        ContextInfo: {
          type: 'Record',
          attributes: {
            pathParameters: {
              type: 'Set',
              element: { type: 'String' },
            },
            userAgent: {
              type: 'String',
            },
          },
        },
      },
      entityTypes: {
        User: {
          shape: {
            type: 'Record',
            attributes: {
              userId: {
                type: 'String',
              },
              favoriteFootballers: {
                type: 'Set',
                element: { type: 'String' },
              },
              dependents: {
                type: 'Set',
                element: {
                  type: 'Entity',
                  name: 'User',
                },
              },
            },
          },
        },
        Photo: {
          shape: {
            type: 'Record',
            attributes: {
              photoId: {
                type: 'String',
              },
              caption: {
                type: 'String',
              },
              owner: {
                type: 'Entity',
                name: 'User',
              },
            },
          },
        },
      },
      actions: {
        viewPhoto: {
          appliesTo: {
            principalTypes: ['User'],
            resourceTypes: ['Photo'],
            context: { type: 'ContextInfo' },
          },
        },
      },
    },
  },
};

describe('Policy Store creation', () => {
  test('Creating Policy Store only with validation settings (mode = OFF), active deletion protection and tags', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
      deletionProtection: DeletionProtectionMode.ENABLED,
      tags: [
        {
          key: 'tag1',
          value: 'value1',
        },
      ],
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties(
      'AWS::VerifiedPermissions::PolicyStore',
      {
        ValidationSettings: {
          Mode: ValidationSettingsMode.OFF,
        },
        DeletionProtection: {
          Mode: DeletionProtectionMode.ENABLED,
        },
        Tags: [
          {
            Key: 'tag1',
            Value: 'value1',
          },
        ],
      },
    );
  });

  test('Creating Policy Store with defaults', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    new PolicyStore(stack, 'PolicyStore');

    // THEN
    Template.fromStack(stack).hasResourceProperties(
      'AWS::VerifiedPermissions::PolicyStore',
      {
        ValidationSettings: {
          Mode: ValidationSettingsMode.OFF,
        },
        DeletionProtection: {
          Mode: DeletionProtectionMode.DISABLED,
        },
      },
    );
  });

  test('Creating Policy Store with validation settings, description and schema (mode = STRICT)', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const description = 'Policy Store Description';
    new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.STRICT,
      },
      schema: {
        cedarJson: JSON.stringify(exampleSchema.json),
      },
      description: description,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties(
      'AWS::VerifiedPermissions::PolicyStore',
      {
        ValidationSettings: {
          Mode: ValidationSettingsMode.STRICT,
        },
        Schema: {
          CedarJson: JSON.stringify(exampleSchema.json),
        },
        Description: description,
        DeletionProtection: {
          Mode: DeletionProtectionMode.DISABLED,
        },
      },
    );
  });

  test('Creating Policy Store with unparseable schema', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    expect(() => {
      new PolicyStore(stack, 'PolicyStore', {
        schema: {
          cedarJson: 'unparseable',
        },
        validationSettings: {
          mode: ValidationSettingsMode.STRICT,
        },
      });
    }).toThrow('Schema is invalid');
  });
});

describe('Policy Store grant to IGrantable', () => {
  test('Creating Policy Store with validation settings (mode = OFF), granting read to a role', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const role = new iam.Role(stack, 'myCustomIAMRole', {
      assumedBy: new iam.ServicePrincipal('sns.amazonaws.com'),
      roleName: 'myCustomRole',
    });
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const policyStoreLogicalId = getResourceLogicalId(
      policyStore,
      CfnPolicyStore,
    );

    policyStore.grantRead(role);

    // THEN
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::VerifiedPermissions::PolicyStore', {
      ValidationSettings: {
        Mode: ValidationSettingsMode.OFF,
      },
      DeletionProtection: {
        Mode: DeletionProtectionMode.DISABLED,
      },
    });
    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Action: READ_ACTIONS,
            Effect: 'Allow',
            Resource: {
              'Fn::GetAtt': [policyStoreLogicalId, 'Arn'],
            },
          },
        ],
      },
    });
  });

  test('Creating Policy Store with validation settings (mode = OFF), granting write to a role', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const role = new iam.Role(stack, 'myCustomIAMRole', {
      assumedBy: new iam.ServicePrincipal('sns.amazonaws.com'),
      roleName: 'myCustomRole',
    });
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const policyStoreLogicalId = getResourceLogicalId(
      policyStore,
      CfnPolicyStore,
    );

    policyStore.grantWrite(role);

    // THEN
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::VerifiedPermissions::PolicyStore', {
      ValidationSettings: {
        Mode: ValidationSettingsMode.OFF,
      },
      DeletionProtection: {
        Mode: DeletionProtectionMode.DISABLED,
      },
    });
    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Action: WRITE_ACTIONS.concat(READ_ACTIONS),
            Effect: 'Allow',
            Resource: {
              'Fn::GetAtt': [policyStoreLogicalId, 'Arn'],
            },
          },
        ],
      },
    });
  });

  test('Creating Policy Store with validation settings (mode = OFF), granting auth to a role', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const role = new iam.Role(stack, 'myCustomIAMRole', {
      assumedBy: new iam.ServicePrincipal('sns.amazonaws.com'),
      roleName: 'myCustomRole',
    });
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const policyStoreLogicalId = getResourceLogicalId(
      policyStore,
      CfnPolicyStore,
    );

    policyStore.grantAuth(role);

    // THEN
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::VerifiedPermissions::PolicyStore', {
      ValidationSettings: {
        Mode: ValidationSettingsMode.OFF,
      },
      DeletionProtection: {
        Mode: DeletionProtectionMode.DISABLED,
      },
    });
    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Action: AUTH_ACTIONS,
            Effect: 'Allow',
            Resource: {
              'Fn::GetAtt': [policyStoreLogicalId, 'Arn'],
            },
          },
        ],
      },
    });
  });

  test('Creating Policy Store with validation settings (mode = OFF), using generic grant() method on PolicyStore', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const role = new iam.Role(stack, 'myCustomIAMRole', {
      assumedBy: new iam.ServicePrincipal('sns.amazonaws.com'),
      roleName: 'myCustomRole',
    });
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const policyStoreLogicalId = getResourceLogicalId(
      policyStore,
      CfnPolicyStore,
    );

    policyStore.grant(
      role,
      ...AUTH_ACTIONS.concat(READ_ACTIONS).concat(WRITE_ACTIONS),
    );

    // THEN
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::VerifiedPermissions::PolicyStore', {
      ValidationSettings: {
        Mode: ValidationSettingsMode.OFF,
      },
      DeletionProtection: {
        Mode: DeletionProtectionMode.DISABLED,
      },
    });
    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Action: AUTH_ACTIONS.concat(READ_ACTIONS).concat(WRITE_ACTIONS),
            Effect: 'Allow',
            Resource: {
              'Fn::GetAtt': [policyStoreLogicalId, 'Arn'],
            },
          },
        ],
      },
    });
  });
});

describe('Policy Store add Policies', () => {
  test('Creating Policy Store and adding Policies', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');
    const statement = `permit(
        principal,
        action in [MyFirstApp::Action::"Read"],
        resource
      ) when {
        true
      };`;
    const description = 'Test policy assigned to the test store';

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const policyId = 'MyBeautifulPolicy';
    const staticDefinition = {
      description,
      statement,
    };
    const policiesToBeAdded: AddPolicyOptions[] = [
      {
        policyId: policyId,
        policyConfiguration: {
          static: staticDefinition,
        },
      },
    ];
    const addedPolicies = policyStore.addPolicies(policiesToBeAdded);

    // THEN
    const template = Template.fromStack(stack);
    expect(addedPolicies.length).toBe(1);
    addedPolicies.map((policy) => {
      const policyDefinition = policy.definition as PolicyDefinitionProperty;
      expect(JSON.stringify(policyDefinition.static)).toBe(JSON.stringify(staticDefinition));
    });

    template.hasResourceProperties('AWS::VerifiedPermissions::PolicyStore', {
      ValidationSettings: {
        Mode: ValidationSettingsMode.OFF,
      },
      DeletionProtection: {
        Mode: DeletionProtectionMode.DISABLED,
      },
    });
    const policyStoreLogicalId = getResourceLogicalId(
      policyStore,
      CfnPolicyStore,
    );
    template.hasResourceProperties('AWS::VerifiedPermissions::Policy', {
      Definition: {
        Static: {
          Description: description,
          Statement: statement,
        },
      },
      PolicyStoreId: {
        'Fn::GetAtt': [policyStoreLogicalId, 'PolicyStoreId'],
      },
    });
    const policyLogicalId = getResourceLogicalId(addedPolicies[0], CfnPolicy);
    expect(policyLogicalId).toContain(policyId);
  });
});

describe('Policy Store reference existing policy store', () => {
  test('Referencing existing policy store providing policy store id', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    const policyStoreId = 'ArE4uRLVgxtSX1Bx56NRTY';
    const policyStore = PolicyStore.fromPolicyStoreId(
      stack,
      'ImportedPolicyStore',
      policyStoreId,
    );

    // THEN
    expect(policyStore.policyStoreId).toBe(policyStoreId);
    expect(policyStore.policyStoreArn).toBe(
      `arn:${Aws.PARTITION}:verifiedpermissions:${Aws.REGION}:${Aws.ACCOUNT_ID}:policy-store/${policyStoreId}`,
    );
  });

  test('Referencing existing policy store providing policy store ARN', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    const policyStoreArn =
      'arn:aws:verifiedpermissions:us-east-1::policy-store/ArE4uRLVgxtSX1Bx56NRTY';
    const policyStore = PolicyStore.fromPolicyStoreArn(
      stack,
      'ImportedPolicyStore',
      policyStoreArn,
    );

    // THEN
    expect(policyStore.policyStoreArn).toBe(policyStoreArn);
    const extractedPolicyStoreIdFromArn = stack.splitArn(
      policyStore.policyStoreArn,
      ArnFormat.SLASH_RESOURCE_NAME,
    ).resourceName;
    expect(policyStore.policyStoreId).toBe(extractedPolicyStoreIdFromArn);
  });

  test('Referencing existing policy store providing policy store malformed ARN', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    const policyStoreArn =
      'arn:aws:verifiedpermissions:us-east-1::policy-store/';
    const error = `ARN for PolicyStore must be in the form: ${ArnFormat.SLASH_RESOURCE_NAME}`;
    // THEN
    expect(() =>
      PolicyStore.fromPolicyStoreArn(
        stack,
        'ImportedPolicyStore',
        policyStoreArn,
      ),
    ).toThrow(error);
  });

  test('Referencing existing policy store providing policy store ARN and policy store id', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    const policyStoreId = 'ArE4uRLVgxtSX1Bx56NRTY';
    const policyStoreArn = `arn:aws:verifiedpermissions:us-east-1::policy-store/${policyStoreId}`;

    // THEN
    expect(() =>
      PolicyStore.fromPolicyStoreAttributes(stack, 'ImportedPolicyStore', {
        policyStoreArn: policyStoreArn,
        policyStoreId: policyStoreId,
      }),
    ).toThrow(/Only one of policyStoreArn or policyStoreId can be provided/);
  });

  test('Referencing existing policy store without providing policy store ARN nor policy store id', () => {
    // GIVEN
    const stack = new Stack();

    // THEN
    expect(() =>
      PolicyStore.fromPolicyStoreAttributes(stack, 'ImportedPolicyStore', {}),
    ).toThrow(/One of policyStoreId or policyStoreArn is required!/);
  });
});


describe('Policy store with policies from a path', () => {
  test('Creating Policy Store and adding policies to it from a path', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.STRICT,
      },
      schema: {
        cedarJson: JSON.stringify(exampleSchema.json),
      },
      description: 'PhotoApp',
    });

    policyStore.addPoliciesFromPath(path.join(__dirname, 'test-policies', 'all-valid'));

    // THEN
    Template.fromStack(stack).hasResourceProperties(
      'AWS::VerifiedPermissions::PolicyStore',
      {
        ValidationSettings: {
          Mode: ValidationSettingsMode.STRICT,
        },
        DeletionProtection: {
          Mode: DeletionProtectionMode.DISABLED,
        },
        Schema: {
          CedarJson: JSON.stringify(exampleSchema.json),
        },
      },
    );

    const policyDefns = Template.fromStack(stack).findResources('AWS::VerifiedPermissions::Policy');
    expect(Object.keys(policyDefns)).toHaveLength(8);
  });

  test('fails if the path is not a directory', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');
    const filePath = 'test/policy-store.test.ts';
    const pStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.STRICT,
      },
    });

    expect(() => {
      pStore.addPoliciesFromPath(filePath);
    }).toThrow(`The path ${filePath} does not appear to be a directory`);
  });

  test('importing policies by path should fail if there is no schema', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    expect(() => {
      const pStore = new PolicyStore(stack, 'PolicyStore', {
        validationSettings: {
          mode: ValidationSettingsMode.STRICT,
        },
      });
      pStore.addPoliciesFromPath(path.join(__dirname, 'test-policies', 'all-valid'));
    }).toThrow('A schema must exist');
  });

  test('importing policies by path should fail if one of the policies is invalid', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    expect(() => {
      const pStore = new PolicyStore(stack, 'PolicyStore', {
        validationSettings: {
          mode: ValidationSettingsMode.STRICT,
        },
        schema: {
          cedarJson: JSON.stringify(exampleSchema.json),
        },
      });
      pStore.addPoliciesFromPath(path.join(__dirname, 'test-policies'));
    }).toThrow('could not be parsed');
  });

  test('importing a semantically invalid policy should fail', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    expect(() => {
      const pStore = new PolicyStore(stack, 'PolicyStore', {
        validationSettings: {
          mode: ValidationSettingsMode.STRICT,
        },
        schema: {
          cedarJson: JSON.stringify({
            X: {
              entityTypes: {},
              actions: {},
            },
          }),
        },
      });
      pStore.addPoliciesFromPath(path.join(__dirname, 'test-policies', 'all-valid'));
    }).toThrow('could not be validated against the schema');
  });
});

describe('Policy Store schema generation', () => {
  const expectedActions = [
    'get /artists',
    'post /artists',
    'delete /artists',
    'patch /artists/{artistId}',
    'delete /artists/{artistId}',
    'get /podcasts',
    'post /podcasts',
    'delete /podcasts',
    'get /podcasts/{podcastId}',
    'post /podcasts/{podcastId}',
    'put /podcasts/{podcastId}',
    'patch /podcasts/{podcastId}',
    'delete /podcasts/{podcastId}',
    'head /podcasts/{podcastId}',
  ];

  describe('generating schemas from OpenApi specs', () => {
    test('generate schema from openApi spec fails if swagger file has no paths', () => {
      expect(() => {
        PolicyStore.schemaFromOpenApiSpec(
          path.join(__dirname, 'schema.json'),
          'UserGroup',
        );
      }).toThrow('Invalid OpenAPI spec - missing paths object');
    });

    test('generate schema from openApi spec with userGroups', () => {
      // GIVEN
      const stack = new Stack(undefined, 'Stack');

      // WHEN
      const schema = PolicyStore.schemaFromOpenApiSpec(
        path.join(__dirname, 'podcastappswagger.json'),
        'UserGroup',
      );
      const pStore = new PolicyStore(stack, 'PolicyStore', {
        validationSettings: {
          mode: ValidationSettingsMode.STRICT,
        },
        schema: {
          cedarJson: JSON.stringify(schema),
        },
      });

      // THEN
      expect(pStore.schema?.cedarJson).toBeDefined();
      expect(Object.keys(schema.PodcastApp.entityTypes)).toStrictEqual([
        'UserGroup',
        'User',
        'Application',
      ]);
      // it should have the eight explicitly defined actions plus the 6 derived from the 'any' definition
      expect(Object.keys(schema.PodcastApp.actions).length).toEqual(8 + 6);
      expect(Object.keys(schema.PodcastApp.actions).sort()).toEqual(expectedActions.sort());
    });

    test('generate schema from openApi spec without userGroups', () => {
      // GIVEN
      const stack = new Stack(undefined, 'Stack');

      // WHEN
      const schema = PolicyStore.schemaFromOpenApiSpec(
        path.join(__dirname, 'podcastappswagger.json'),

      );
      const pStore = new PolicyStore(stack, 'PolicyStore', {
        validationSettings: {
          mode: ValidationSettingsMode.STRICT,
        },
        schema: {
          cedarJson: JSON.stringify(schema),
        },
      });

      // THEN
      expect(pStore.schema?.cedarJson).toBeDefined();
      expect(Object.keys(schema.PodcastApp.entityTypes)).toStrictEqual([
        'User',
        'Application',
      ]);
      // it should have the eight explicitly defined actions plus the 6 derived from the 'any' definition
      expect(Object.keys(schema.PodcastApp.actions).length).toEqual(8 + 6);
      expect(Object.keys(schema.PodcastApp.actions).sort()).toEqual(expectedActions.sort());
    });
  });

  describe('generating schemas from RestApi constructs', () => {
    function buildRestApi() {
      const stack = new Stack(undefined, 'Stack');
      const api = new RestApi(stack, 'PodcastApp');

      const artists = api.root.addResource('artists');
      artists.addMethod('GET');
      artists.addMethod('POST');
      artists.addMethod('DELETE');
      const artist = artists.addResource('{artistId}');
      artist.addMethod('PATCH');
      artist.addMethod('DELETE');
      const podcasts = api.root.addResource('podcasts');
      podcasts.addMethod('GET');
      podcasts.addMethod('POST');
      podcasts.addMethod('DELETE');
      const podcast = podcasts.addResource('{podcastId}');
      podcast.addMethod('ANY');

      return { stack, api };
    }

    test('generate schema from RestApi with userGroups', () => {
      // GIVEN
      const { stack, api } = buildRestApi();

      // WHEN
      const schema = PolicyStore.schemaFromRestApi(api, 'UserGroup');
      const pStore = new PolicyStore(stack, 'PolicyStore', {
        validationSettings: {
          mode: ValidationSettingsMode.STRICT,
        },
        schema: {
          cedarJson: JSON.stringify(schema),
        },
      });

      // THEN
      expect(pStore.schema?.cedarJson).toBeDefined();
      expect(Object.keys(schema.PodcastApp.entityTypes)).toStrictEqual([
        'UserGroup',
        'User',
        'Application',
      ]);
      // it should have the eight explicitly defined actions plus the 6 derived from the 'any' definition
      expect(Object.keys(schema.PodcastApp.actions).length).toEqual(8 + 6);
      expect(Object.keys(schema.PodcastApp.actions).sort()).toEqual(expectedActions.sort());
    });

    test('generate schema from RestApi without userGroups', () => {
      // GIVEN
      const { stack, api } = buildRestApi();

      // WHEN
      const schema = PolicyStore.schemaFromRestApi(api);
      const pStore = new PolicyStore(stack, 'PolicyStore', {
        validationSettings: {
          mode: ValidationSettingsMode.STRICT,
        },
        schema: {
          cedarJson: JSON.stringify(schema),
        },
      });

      // THEN
      expect(pStore.schema?.cedarJson).toBeDefined();
      expect(Object.keys(schema.PodcastApp.entityTypes)).toStrictEqual(['User', 'Application']);
      // it should have the eight explicitly defined actions plus the 6 derived from the 'any' definition
      expect(Object.keys(schema.PodcastApp.actions).length).toEqual(8 + 6);
      expect(Object.keys(schema.PodcastApp.actions).sort()).toEqual(expectedActions.sort());
    });
  });
});