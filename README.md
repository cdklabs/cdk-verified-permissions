# Amazon Verified Permissions L2 CDK Construct

This repo contains the implementation of an L2 CDK Construct for Amazon Verified Permissions

# Project Stability

This construct is still versioned with alpha/v0 major version and we could introduce breaking changes even without a major version bump. Our goal is to keep the API stable & backwards compatible as much as possible but we currently cannot guarantee that. Once we'll publish v1.0.0 the breaking changes will be introduced via major version bumps.

# Getting Started

## Policy Store

Define a Policy Store with defaults (No description, No schema & Validation Settings Mode set to OFF):

```ts
const test = new PolicyStore(scope, "PolicyStore");
```

Define a Policy Store without Schema definition (Validation Settings Mode must be set to OFF):

```ts
const validationSettingsOff = {
  mode: ValidationSettingsMode.OFF,
};
const test = new PolicyStore(scope, "PolicyStore", {
  validationSettings: validationSettingsOff,
});
```

Define a Policy Store with Description and Schema definition (a STRICT Validation Settings Mode is strongly suggested for Policy Stores with schemas):

```ts
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
          principalTypes: ["User"],
          resourceTypes: ["Photo"],
        },
      },
    },
  },
};
const cedarSchema = {
  cedarJson: JSON.stringify(cedarJsonSchema),
};
const policyStore = new PolicyStore(scope, "PolicyStore", {
  schema: cedarSchema,
  validationSettings: validationSettingsStrict,
  description: "PolicyStore description"
});
```

## Schemas

If you want to have type safety when defining a schema, you can accomplish this **<ins>only</ins>** in typescript. Simply use the `Schema` type exported by the `@cedar-policy/cedar-wasm`.

You can also generate simple schemas using the static functions `schemaFromOpenApiSpec` or `schemaFromRestApi` in the PolicyStore construct. This functionality replicates what you can find in the AWS Verified Permissions console.

Generate a schema from an OpenAPI spec:

```ts
const validationSettingsStrict = {
  mode: ValidationSettingsMode.STRICT,
};
const cedarJsonSchema = PolicyStore.schemaFromOpenApiSpec(
  'path/to/swaggerfile.json',
  'UserGroup',
);
const cedarSchema = {
  cedarJson: JSON.stringify(cedarJsonSchema),
};
const policyStore = new PolicyStore(scope, "PolicyStore", {
  schema: cedarSchema,
  validationSettings: validationSettingsStrict,
  description: "Policy store with schema generated from API Gateway",
});
```

Generate a schema from a RestApi construct:

```ts
const validationSettingsStrict = {
  mode: ValidationSettingsMode.STRICT,
};
const cedarJsonSchema = PolicyStore.schemaFromRestApi(
  new RestApi(scope, "RestApi"),
  "UserGroup",
);
const cedarSchema = {
  cedarJson: JSON.stringify(cedarJsonSchema),
};
const policyStore = new PolicyStore(scope, "PolicyStore", {
  schema: cedarSchema,
  validationSettings: validationSettingsStrict,
  description: "Policy store with schema generated from RestApi construct",
});
```

## Identity Source

Define Identity Source with Cognito Configuration and required properties:

```ts
const userPool = new UserPool(scope, "UserPool"); // Creating a new Cognito UserPool
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
          principalTypes: ["User"],
          resourceTypes: ["Photo"],
        },
      },
    },
  },
};
const cedarSchema = {
  cedarJson: JSON.stringify(cedarJsonSchema),
};
const policyStore = new PolicyStore(scope, "PolicyStore", {
  schema: cedarSchema,
  validationSettings: validationSettingsStrict,
});
new IdentitySource(scope, "IdentitySource", {
  configuration: {
    cognitoUserPoolConfiguration: {
      userPool: userPool,
    },
  },
  policyStore: policyStore
});
```

Define Identity Source with Cognito Configuration and all properties:

```ts
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
          principalTypes: ["User"],
          resourceTypes: ["Photo"],
        },
      },
    },
  },
};
const cedarSchema = {
  cedarJson: JSON.stringify(cedarJsonSchema),
};
const policyStore = new PolicyStore(scope, "PolicyStore", {
  schema: cedarSchema,
  validationSettings: validationSettingsStrict,
});
const cognitoGroupEntityType = 'test';
const userPool = new UserPool(scope, "UserPool"); // Creating a new Cognito UserPool
new IdentitySource(scope, "IdentitySource", {
  configuration: {
    cognitoUserPoolConfiguration: {
      clientIds: ["&ExampleCogClientId;"],
      userPool: userPool,
      groupConfiguration: {
        groupEntityType: cognitoGroupEntityType,
      },
    },
  },
  policyStore: policyStore,
  principalEntityType: "PETEXAMPLEabcdefg111111",
});
```

Define Identity Source with OIDC Configuration and Access Token selection config:
```ts
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
          principalTypes: ["User"],
          resourceTypes: ["Photo"],
        },
      },
    },
  },
};
const cedarSchema = {
  cedarJson: JSON.stringify(cedarJsonSchema),
};
const policyStore = new PolicyStore(scope, "PolicyStore", {
  schema: cedarSchema,
  validationSettings: validationSettingsStrict,
});
const issuer = 'https://iamanidp.com';
const principalIdClaim = 'sub';
const entityIdPrefix = 'prefix';
const groupClaim = 'group';
const groupEntityType = 'GroupType';
new IdentitySource(scope, 'IdentitySource', {
  configuration: {
    openIdConnectConfiguration: {
      issuer: issuer,
      entityIdPrefix: entityIdPrefix,
      groupConfiguration: {
        groupClaim: groupClaim,
        groupEntityType: groupEntityType,
      },
      accessTokenOnly: {
        audiences: ['testAudience'],
        principalIdClaim: principalIdClaim,
      },
    },
  },
  policyStore: policyStore,
  principalEntityType: 'TestType',
});
```

Define Identity Source with OIDC Configuration and Identity Token selection config:
```ts
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
          principalTypes: ["User"],
          resourceTypes: ["Photo"],
        },
      },
    },
  },
};
const cedarSchema = {
  cedarJson: JSON.stringify(cedarJsonSchema),
};
const policyStore = new PolicyStore(scope, "PolicyStore", {
  schema: cedarSchema,
  validationSettings: validationSettingsStrict,
});
const issuer = 'https://iamanidp.com';
const entityIdPrefix = 'prefix';
const groupClaim = 'group';
const groupEntityType = 'UserGroup';
const principalIdClaim = 'sub';
new IdentitySource(scope, 'IdentitySource', {
  configuration: {
    openIdConnectConfiguration: {
      issuer: issuer,
      entityIdPrefix: entityIdPrefix,
      groupConfiguration: {
        groupClaim: groupClaim,
        groupEntityType: groupEntityType,
      },
      identityTokenOnly: {
        clientIds: [],
        principalIdClaim: principalIdClaim,
      },
    },
  },
  policyStore: policyStore,
});
```

## Policy

Load all the `.cedar` files in a given folder and define Policy objects for each of them. All policies will be associated with the same policy store.

```ts
const validationSettingsStrict = {
  mode: ValidationSettingsMode.STRICT,
};
const policyStore = new PolicyStore(scope, "PolicyStore", {
  validationSettings: validationSettingsStrict,
});
policyStore.addPoliciesFromPath('/path/to/my-policies');
```

Define a Policy and add it to a specific Policy Store:

```ts
const statement = `permit(
    principal,
    action in [MyFirstApp::Action::"Read"],
    resource
) when {
    true
};`;

const description = "Test policy assigned to the test store";
const validationSettingsOff = {
  mode: ValidationSettingsMode.OFF,
};
const policyStore = new PolicyStore(scope, "PolicyStore", {
  validationSettings: validationSettingsOff,
});

// Create a policy and add it to the policy store
const policy = new Policy(scope, "MyTestPolicy", {
  definition: {
    static: {
      statement,
      description,
    },
  },
  policyStore: policyStore,
});
```

Define a policy with a template linked definition:

```ts
const validationSettingsOff = {
  mode: ValidationSettingsMode.OFF,
};
const policyStore = new PolicyStore(scope, "PolicyStore", {
  validationSettings: validationSettingsOff,
});
const policyTemplateStatement = `
permit (
  principal == ?principal,
  action in [TinyTodo::Action::"ReadList", TinyTodo::Action::"ListTasks"],
  resource == ?resource
);`;
const template = new PolicyTemplate(scope, "PolicyTemplate", {
  statement: policyTemplateStatement,
  policyStore: policyStore,
});

const policy = new Policy(scope, "MyTestPolicy", {
  definition: {
    templateLinked: {
      policyTemplate: template,
      principal: {
        entityId: "exampleId",
        entityType: "exampleType",
      },
      resource: {
        entityId: "exampleId",
        entityType: "exampleType",
      },
    },
  },
  policyStore: policyStore,
});
```

Define a Policy with a statement from file:
**PLEASE NOTE:** You can specify the description of the policy directly inside the Policy file, using the annotation `@cdkDescription`

```ts
const description = "Test policy assigned to the test store";
const validationSettingsOff = {
  mode: ValidationSettingsMode.OFF,
};
const policyStore = new PolicyStore(scope, "PolicyStore", {
  validationSettings: validationSettingsOff,
});

// Create a policy and add it to the policy store
const policyFromFileProps = {
  policyStore,
  path: '/path/to/policy-statement.cedar',
  description: 'the policy description',
};
const policy = Policy.fromFile(scope, "MyTestPolicy", policyFromFileProps);
```


## Policy Template

Define a Policy Template referring to a Cedar Statement in local file:

```ts
const validationSettingsOff = {
  mode: ValidationSettingsMode.OFF,
};
const policyStore = new PolicyStore(scope, "PolicyStore", {
  validationSettings: validationSettingsOff,
});
const templateFromFileProps = {
  policyStore,
  path: '/path/to/template-statement.cedar',
  description: "Allows sharing photos in full access mode",
};
const template = PolicyTemplate.fromFile(scope, "PolicyTemplate", templateFromFileProps);
```

# Notes

- This project is following the AWS CDK Official Design Guidelines (see https://github.com/aws/aws-cdk/blob/main/docs/DESIGN_GUIDELINES.md) and the AWS CDK New Constructs Creation Guide (see here https://github.com/aws/aws-cdk/blob/main/docs/NEW_CONSTRUCTS_GUIDE.md).

- Feedback is a gift: if you find something wrong or you've ideas to improve please open an issue or a pull request
