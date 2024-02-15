# Amazon Verified Permissions L2 CDK Construct
This repo contains the implementation of an L2 CDK Construct for Amazon Verified Permissions

# Project Stability
This construct is still versioned with alpha/v0 major version and we could introduce breaking changes even without a major version bump. Our goal is to keep the API stable & backwards compatible as much as possible but we currently cannot guarantee that. Once we'll publish v1.0.0 the breaking changes will be introduced via major version bumps.

# Getting Started

## Policy Store
Define a Policy Store with defaults (No schema & Validation Settings Mode set to OFF)
```ts
const test = new PolicyStore(scope, 'PolicyStore')
```

Define a Policy Store without Schema definition (Validation Settings Mode must be set to OFF)
```ts
const validationSettingsOff = {
  mode: ValidationSettingsMode.OFF,
};
const test = new PolicyStore(scope, 'PolicyStore', {
  validationSettings: validationSettingsOff,
})
```

Define a Policy Store with Schema definition (a STRICT Validation Settings Mode is strongly suggested for Policy Stores with schemas):
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
const policyStore = new PolicyStore(scope, 'PolicyStore', {
  schema: cedarSchema,
  validationSettings: validationSettingsStrict,
});
```

## Identity Source
Define Identity Source with required properties
```ts
const userPool = new UserPool(scope, 'UserPool'); // Creating a new Cognito UserPool
new IdentitySource(scope, 'IdentitySource', {
    configuration: {
      cognitoUserPoolConfiguration: {
          userPool: userPool,
      },
    }
});
```

Define Identity Source with all the properties
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
const policyStore = new PolicyStore(scope, 'PolicyStore', {
  schema: cedarSchema,
  validationSettings: validationSettingsStrict,
});
const userPool = new UserPool(scope, 'UserPool'); // Creating a new Cognito UserPool
new IdentitySource(scope, 'IdentitySource', {
    configuration: {
      cognitoUserPoolConfiguration: {
          clientIds: [
          '&ExampleCogClientId;',
          ],
          userPool: userPool,
      },
    },
    policyStore: policyStore,
    principalEntityType: 'PETEXAMPLEabcdefg111111',
});
```

## Policy
Define a Policy and add it to a specific Policy Store
```ts
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
const policyStore = new PolicyStore(scope, 'PolicyStore', {
    validationSettings: validationSettingsOff,
});

// Create a policy and add it to the policy store
const policy = new Policy(scope, 'MyTestPolicy', {
    definition: {
    static: {
        statement,
        description,
    },
    },
    policyStore: policyStore,
});
```

Define a policy with a template linked definition
```ts
const validationSettingsOff = {
  mode: ValidationSettingsMode.OFF,
};
const policyStore = new PolicyStore(scope, 'PolicyStore', {
  validationSettings: validationSettingsOff,
});
const policyTemplateStatement = `
permit (
  principal == ?principal,
  action in [TinyTodo::Action::"ReadList", TinyTodo::Action::"ListTasks"],
  resource == ?resource
);`;
const template = new PolicyTemplate(scope, 'PolicyTemplate', {
  statement: policyTemplateStatement,
  policyStore: policyStore,
});

const policy = new Policy(scope, 'MyTestPolicy', {
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

```

## Policy Template
Define a Policy Template referring to a Cedar Statement in local file
```ts
const validationSettingsOff = {
  mode: ValidationSettingsMode.OFF,
};
const policyStore = new PolicyStore(scope, 'PolicyStore', {
  validationSettings: validationSettingsOff,
});
new PolicyTemplate(scope, 'PolicyTemplate', {
  description: 'Allows sharing photos in full access mode',
  policyStore: policyStore,
  statement: Statement.fromFile('assets/template-statement.cedar'),
});
```

# Notes
* This project is following the AWS CDK Official Design Guidelines (see https://github.com/aws/aws-cdk/blob/main/docs/DESIGN_GUIDELINES.md) and the AWS CDK New Constructs Creation Guide (see here https://github.com/aws/aws-cdk/blob/main/docs/NEW_CONSTRUCTS_GUIDE.md).

* Feedback is a gift: if you find something wrong or you've ideas to improve please open an issue or a pull request
