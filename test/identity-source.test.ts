import { Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { CfnUserPool, UserPool, UserPoolClient } from 'aws-cdk-lib/aws-cognito';
import { CfnPolicyStore } from 'aws-cdk-lib/aws-verifiedpermissions';
import { getResourceLogicalId } from './utils';
import { IdentitySource } from '../src/identity-source';
import { PolicyStore, ValidationSettingsMode } from '../src/policy-store';


describe('Identity Source creation with Cognito config', () => {

  test('Creating Identity Source with Cognito config', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const userPool = new UserPool(stack, 'UserPool');
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const policyStoreLogicalId = getResourceLogicalId(policyStore, CfnPolicyStore);
    new IdentitySource(stack, 'IdentitySource', {
      configuration: {
        cognitoUserPoolConfiguration: {
          userPool: userPool,
        },
      },
      policyStore: policyStore,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VerifiedPermissions::IdentitySource', {
      Configuration: {
        CognitoUserPoolConfiguration: {
          UserPoolArn: {
            'Fn::GetAtt': [
              getResourceLogicalId(userPool, CfnUserPool),
              'Arn',
            ],
          },
        },
      },
      PolicyStoreId: {
        'Fn::GetAtt': [policyStoreLogicalId, 'PolicyStoreId'],
      },
    });
  });

  test('Creating Identity Source with Cognito config and all the properties', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const userPool = new UserPool(stack, 'UserPool');
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const cognitoGroupEntityType = 'test';
    const policyStoreLogicalId = getResourceLogicalId(policyStore, CfnPolicyStore);
    new IdentitySource(stack, 'IdentitySource', {
      configuration: {
        cognitoUserPoolConfiguration: {
          clientIds: [
            '&ExampleCogClientId;',
          ],
          userPool: userPool,
          groupConfiguration: {
            groupEntityType: cognitoGroupEntityType,
          },
        },
      },
      policyStore: policyStore,
      principalEntityType: 'PETEXAMPLEabcdefg111111',
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VerifiedPermissions::IdentitySource', {
      Configuration: {
        CognitoUserPoolConfiguration: {
          ClientIds: [
            '&ExampleCogClientId;',
          ],
          GroupConfiguration: {
            GroupEntityType: cognitoGroupEntityType,
          },
          UserPoolArn: {
            'Fn::GetAtt': [
              getResourceLogicalId(userPool, CfnUserPool),
              'Arn',
            ],
          },
        },
      },
      PolicyStoreId: {
        'Fn::GetAtt': [policyStoreLogicalId, 'PolicyStoreId'],
      },
      PrincipalEntityType: 'PETEXAMPLEabcdefg111111',
    });
  });
});

describe('Identity Source reference existing Identity Source', () => {

  test('Referencing existing Identity Source providing Identity Source identifier', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    const identitySourceId = 'ArE4uRLVgxtSX1Bx56NRTY';
    const identitySource = IdentitySource.fromIdentitySourceId(stack, 'ImportedIdentitySource', identitySourceId);

    // THEN
    expect(identitySource.identitySourceId).toBe(identitySourceId);
  });

});

describe('User Pool Client addition', () => {
  test('Adding a User Pool Client to Identity Source configured with Cognito', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const userPool = new UserPool(stack, 'UserPool');
    const userPoolClient = new UserPoolClient(stack, 'UserPoolClient', { userPool: userPool });
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const policyStoreLogicalId = getResourceLogicalId(policyStore, CfnPolicyStore);
    const identitySource = new IdentitySource(stack, 'IdentitySource', {
      configuration: {
        cognitoUserPoolConfiguration: {
          userPool: userPool,
        },
      },
      policyStore: policyStore,
    });

    identitySource.addUserPoolClient(userPoolClient);

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VerifiedPermissions::IdentitySource', {
      Configuration: {
        CognitoUserPoolConfiguration: {
          ClientIds: [
            Match.objectEquals({
              Ref: Match.stringLikeRegexp('UserPoolClient*'),
            }),
          ],
          UserPoolArn: {
            'Fn::GetAtt': [
              getResourceLogicalId(userPool, CfnUserPool),
              'Arn',
            ],
          },
        },
      },
      PolicyStoreId: {
        'Fn::GetAtt': [policyStoreLogicalId, 'PolicyStoreId'],
      },
    });
  });

  test('Adding a User Pool Client to Identity Source configured with OIDC, should throw', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const userPool = new UserPool(stack, 'UserPool');
    const userPoolClient = new UserPoolClient(stack, 'UserPoolClient', { userPool: userPool });
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const identitySource = new IdentitySource(stack, 'IdentitySource', {
      configuration: {
        openIdConnectConfiguration: {
          issuer: 'https://iamanidp.com',
          tokenSelection: {
            accessTokenOnly: {
              audiences: ['aud1'],
              principalIdClaim: 'sub',
            },
          },
        },
      },
      policyStore: policyStore,
      principalEntityType: 'TestType',
    });

    // THEN
    expect(() => {
      identitySource.addUserPoolClient(userPoolClient);
    }).toThrow('Cannot add User Pool Client when IdentitySource auth provider is not Cognito');

  });
});

describe('Client addition to OIDC configured Identity Source', () => {
  test('Adding a Client to Identity Source configured with OIDC and token selection = access token - should throw', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const identitySource = new IdentitySource(stack, 'IdentitySource', {
      configuration: {
        openIdConnectConfiguration: {
          issuer: 'https://iamanidp.com',
          tokenSelection: {
            accessTokenOnly: {
              audiences: ['aud1'],
              principalIdClaim: 'sub',
            },
          },
        },
      },
      policyStore: policyStore,
      principalEntityType: 'TestType',
    });

    // THEN
    expect(() => {
      identitySource.addClientId('testClientId');
    }).toThrow('Cannot add client id when IdentitySource auth provider is not Cognito or OIDC with ID Token');
  });

  test('Adding a Client to Identity Source configured with OIDC and token selection = identity token', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const policyStoreLogicalId = getResourceLogicalId(policyStore, CfnPolicyStore);
    const issuer = 'https://iamanidp.com';
    const entityIdPrefix = 'prefix';
    const groupClaim = 'group';
    const groupEntityType = 'UserGroup';
    const principalIdClaim = 'sub';
    const identitySource = new IdentitySource(stack, 'IdentitySource', {
      configuration: {
        openIdConnectConfiguration: {
          issuer: issuer,
          entityIdPrefix: entityIdPrefix,
          groupConfiguration: {
            groupClaim: groupClaim,
            groupEntityType: groupEntityType,
          },
          tokenSelection: {
            identityTokenOnly: {
              clientIds: [],
              principalIdClaim: principalIdClaim,
            },
          },
        },
      },
      policyStore: policyStore,
    });

    const clientToBeAdded = 'client1';
    identitySource.addClientId(clientToBeAdded);

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VerifiedPermissions::IdentitySource', {
      Configuration: {
        OpenIdConnectConfiguration: {
          Issuer: issuer,
          EntityIdPrefix: entityIdPrefix,
          GroupConfiguration: {
            GroupClaim: groupClaim,
            GroupEntityType: groupEntityType,
          },
          TokenSelection: {
            IdentityTokenOnly: {
              ClientIds: [clientToBeAdded],
              PrincipalIdClaim: principalIdClaim,
            },
          },
        },
      },
      PolicyStoreId: {
        'Fn::GetAtt': [policyStoreLogicalId, 'PolicyStoreId'],
      },
    });

  });

  test('Adding a Client to Identity Source configured with Cognito', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const userPool = new UserPool(stack, 'UserPool');
    const userPoolClient = new UserPoolClient(stack, 'UserPoolClient', { userPool: userPool });
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const policyStoreLogicalId = getResourceLogicalId(policyStore, CfnPolicyStore);
    const identitySource = new IdentitySource(stack, 'IdentitySource', {
      configuration: {
        cognitoUserPoolConfiguration: {
          userPool: userPool,
        },
      },
      policyStore: policyStore,
    });

    identitySource.addClientId(userPoolClient.userPoolClientId);

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VerifiedPermissions::IdentitySource', {
      Configuration: {
        CognitoUserPoolConfiguration: {
          ClientIds: [
            Match.objectEquals({
              Ref: Match.stringLikeRegexp('UserPoolClient*'),
            }),
          ],
          UserPoolArn: {
            'Fn::GetAtt': [
              getResourceLogicalId(userPool, CfnUserPool),
              'Arn',
            ],
          },
        },
      },
      PolicyStoreId: {
        'Fn::GetAtt': [policyStoreLogicalId, 'PolicyStoreId'],
      },
    });
  });

});

describe('Audience addition to OIDC configured Identity Source', () => {
  test('Adding an Audience to Identity Source configured with OIDC and token selection = id token - should throw', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const identitySource = new IdentitySource(stack, 'IdentitySource', {
      configuration: {
        openIdConnectConfiguration: {
          issuer: 'https://iamanidp.com',
          tokenSelection: {
            identityTokenOnly: {
              clientIds: ['client1'],
              principalIdClaim: 'sub',
            },
          },
        },
      },
      policyStore: policyStore,
      principalEntityType: 'TestType',
    });

    // THEN
    expect(() => {
      identitySource.addAudience('TestAudience');
    }).toThrow('Cannot add audience when IdentitySource auth provider is not OIDC with Access Token');
  });
  test('Adding a Client to Identity Source configured with Cognito - should throw', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const userPool = new UserPool(stack, 'UserPool');
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const identitySource = new IdentitySource(stack, 'IdentitySource', {
      configuration: {
        cognitoUserPoolConfiguration: {
          userPool: userPool,
        },
      },
      policyStore: policyStore,
    });

    // THEN
    expect(() => {
      identitySource.addAudience('TestAudience');
    }).toThrow('Cannot add audience when IdentitySource auth provider is not OIDC with Access Token');

  });
  test('Adding an Audience to Identity Source configured with OIDC and token selection = access token', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const policyStoreLogicalId = getResourceLogicalId(policyStore, CfnPolicyStore);
    const issuer = 'https://iamanidp.com';
    const principalIdClaim = 'sub';
    const entityIdPrefix = 'prefix';
    const groupClaim = 'group';
    const groupEntityType = 'GroupType';
    const existingAudience = 'audience';
    const identitySource = new IdentitySource(stack, 'IdentitySource', {
      configuration: {
        openIdConnectConfiguration: {
          issuer: issuer,
          entityIdPrefix: entityIdPrefix,
          groupConfiguration: {
            groupClaim: groupClaim,
            groupEntityType: groupEntityType,
          },
          tokenSelection: {
            accessTokenOnly: {
              audiences: [existingAudience],
              principalIdClaim: principalIdClaim,
            },
          },
        },
      },
      policyStore: policyStore,
      principalEntityType: 'TestType',
    });

    const audienceToBeAdded = 'TestAudience';
    identitySource.addAudience(audienceToBeAdded);

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VerifiedPermissions::IdentitySource', {
      Configuration: {
        OpenIdConnectConfiguration: {
          Issuer: issuer,
          EntityIdPrefix: entityIdPrefix,
          GroupConfiguration: {
            GroupClaim: groupClaim,
            GroupEntityType: groupEntityType,
          },
          TokenSelection: {
            AccessTokenOnly: {
              Audiences: [existingAudience, audienceToBeAdded],
              PrincipalIdClaim: principalIdClaim,
            },
          },
        },
      },
      PolicyStoreId: {
        'Fn::GetAtt': [policyStoreLogicalId, 'PolicyStoreId'],
      },
    });
  });
});

describe('Identity Source creation with OIDC config', () => {
  test('Creating Identity Source with OIDC and token selection = access token', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const policyStoreLogicalId = getResourceLogicalId(policyStore, CfnPolicyStore);
    const issuer = 'https://iamanidp.com';
    const principalIdClaim = 'sub';
    const entityIdPrefix = 'prefix';
    const groupClaim = 'group';
    const groupEntityType = 'GroupType';
    const audience = 'testAudience';
    new IdentitySource(stack, 'IdentitySource', {
      configuration: {
        openIdConnectConfiguration: {
          issuer: issuer,
          entityIdPrefix: entityIdPrefix,
          groupConfiguration: {
            groupClaim: groupClaim,
            groupEntityType: groupEntityType,
          },
          tokenSelection: {
            accessTokenOnly: {
              audiences: [audience],
              principalIdClaim: principalIdClaim,
            },
          },
        },
      },
      policyStore: policyStore,
      principalEntityType: 'TestType',
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VerifiedPermissions::IdentitySource', {
      Configuration: {
        OpenIdConnectConfiguration: {
          Issuer: issuer,
          EntityIdPrefix: entityIdPrefix,
          GroupConfiguration: {
            GroupClaim: groupClaim,
            GroupEntityType: groupEntityType,
          },
          TokenSelection: {
            AccessTokenOnly: {
              Audiences: [audience],
              PrincipalIdClaim: principalIdClaim,
            },
          },
        },
      },
      PolicyStoreId: {
        'Fn::GetAtt': [policyStoreLogicalId, 'PolicyStoreId'],
      },
    });
  });

  test('Creating Identity Source with OIDC and token selection = access token and audiences not set - should throw', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const issuer = 'https://iamanidp.com';
    const principalIdClaim = 'sub';
    const entityIdPrefix = 'prefix';
    const groupClaim = 'group';
    const groupEntityType = 'GroupType';

    // THEN
    expect(() => {
      new IdentitySource(stack, 'IdentitySource', {
        configuration: {
          openIdConnectConfiguration: {
            issuer: issuer,
            entityIdPrefix: entityIdPrefix,
            groupConfiguration: {
              groupClaim: groupClaim,
              groupEntityType: groupEntityType,
            },
            tokenSelection: {
              accessTokenOnly: {
                principalIdClaim: principalIdClaim,
              },
            },
          },
        },
        policyStore: policyStore,
        principalEntityType: 'TestType',
      });
    }).toThrow('At least one audience is expected in OIDC Access token selection mode');
  });


  test('Creating Identity Source with OIDC and token selection = access token and audiences empty - should throw', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const issuer = 'https://iamanidp.com';
    const principalIdClaim = 'sub';
    const entityIdPrefix = 'prefix';
    const groupClaim = 'group';
    const groupEntityType = 'GroupType';

    // THEN
    expect(() => {
      new IdentitySource(stack, 'IdentitySource', {
        configuration: {
          openIdConnectConfiguration: {
            issuer: issuer,
            entityIdPrefix: entityIdPrefix,
            groupConfiguration: {
              groupClaim: groupClaim,
              groupEntityType: groupEntityType,
            },
            tokenSelection: {
              accessTokenOnly: {
                principalIdClaim: principalIdClaim,
                audiences: [],
              },
            },
          },
        },
        policyStore: policyStore,
        principalEntityType: 'TestType',
      });
    }).toThrow('At least one audience is expected in OIDC Access token selection mode');
  });

  test('Creating Identity Source with OIDC and token selection = identity token', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const policyStoreLogicalId = getResourceLogicalId(policyStore, CfnPolicyStore);
    const issuer = 'https://iamanidp.com';
    const entityIdPrefix = 'prefix';
    const groupClaim = 'group';
    const groupEntityType = 'UserGroup';
    const principalIdClaim = 'sub';
    new IdentitySource(stack, 'IdentitySource', {
      configuration: {
        openIdConnectConfiguration: {
          issuer: issuer,
          entityIdPrefix: entityIdPrefix,
          groupConfiguration: {
            groupClaim: groupClaim,
            groupEntityType: groupEntityType,
          },
          tokenSelection: {
            identityTokenOnly: {
              clientIds: [],
              principalIdClaim: principalIdClaim,
            },
          },
        },
      },
      policyStore: policyStore,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VerifiedPermissions::IdentitySource', {
      Configuration: {
        OpenIdConnectConfiguration: {
          Issuer: issuer,
          EntityIdPrefix: entityIdPrefix,
          GroupConfiguration: {
            GroupClaim: groupClaim,
            GroupEntityType: groupEntityType,
          },
          TokenSelection: {
            IdentityTokenOnly: {
              ClientIds: [],
              PrincipalIdClaim: principalIdClaim,
            },
          },
        },
      },
      PolicyStoreId: {
        'Fn::GetAtt': [policyStoreLogicalId, 'PolicyStoreId'],
      },
    });
  });

  test('Creating Identity Source with OIDC and token selection = identity token and client ids not set', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    const policyStoreLogicalId = getResourceLogicalId(policyStore, CfnPolicyStore);
    const issuer = 'https://iamanidp.com';
    const entityIdPrefix = 'prefix';
    const groupClaim = 'group';
    const groupEntityType = 'UserGroup';
    const principalIdClaim = 'sub';
    new IdentitySource(stack, 'IdentitySource', {
      configuration: {
        openIdConnectConfiguration: {
          issuer: issuer,
          entityIdPrefix: entityIdPrefix,
          groupConfiguration: {
            groupClaim: groupClaim,
            groupEntityType: groupEntityType,
          },
          tokenSelection: {
            identityTokenOnly: {
              principalIdClaim: principalIdClaim,
            },
          },
        },
      },
      policyStore: policyStore,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VerifiedPermissions::IdentitySource', {
      Configuration: {
        OpenIdConnectConfiguration: {
          Issuer: issuer,
          EntityIdPrefix: entityIdPrefix,
          GroupConfiguration: {
            GroupClaim: groupClaim,
            GroupEntityType: groupEntityType,
          },
          TokenSelection: {
            IdentityTokenOnly: {
              ClientIds: [],
              PrincipalIdClaim: principalIdClaim,
            },
          },
        },
      },
      PolicyStoreId: {
        'Fn::GetAtt': [policyStoreLogicalId, 'PolicyStoreId'],
      },
    });
  });

  test('Creating Identity Source with OIDC and token selection = access token and identity token - should throw', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    expect(() => {
      new IdentitySource(stack, 'IdentitySource', {
        configuration: {
          openIdConnectConfiguration: {
            issuer: 'https://test.com',
            entityIdPrefix: 'prefix',
            groupConfiguration: {
              groupClaim: 'group',
              groupEntityType: 'GroupType',
            },
            tokenSelection: {
              accessTokenOnly: {
                audiences: ['testAudience'],
                principalIdClaim: 'sub',
              },
              identityTokenOnly: {
                clientIds: [],
                principalIdClaim: 'sub',
              },
            },
          },
        },
        policyStore: policyStore,
        principalEntityType: 'TestType',
      });
    }).toThrow('Only one token selection method between accessTokenOnly and identityTokenOnly must be defined');
  });

  test('Creating Identity Source with OIDC and without token selection - should throw', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    expect(() => {
      new IdentitySource(stack, 'IdentitySource', {
        configuration: {
          openIdConnectConfiguration: {
            issuer: 'https://test.com',
            entityIdPrefix: 'prefix',
            groupConfiguration: {
              groupClaim: 'group',
              groupEntityType: 'GroupType',
            },
            tokenSelection: {
            },
          },
        },
        policyStore: policyStore,
        principalEntityType: 'TestType',
      });
    }).toThrow('One token selection method between accessTokenOnly and identityTokenOnly must be defined');
  });
});


describe('Limit cases tests', () => {
  test('Creating Identity Source without Cognito and OIDC configurations - should throw', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    expect(() => {
      new IdentitySource(stack, 'IdentitySource', {
        configuration: {
        },
        policyStore: policyStore,
        principalEntityType: 'TestType',
      });
    }).toThrow('One Identity provider configuration between cognitoUserPoolConfiguration and openIdConnectConfiguration must be defined');
  });
  test('Creating Identity Source with both Cognito and OIDC configurations - should throw', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');

    // WHEN
    const userPool = new UserPool(stack, 'UserPool');
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });
    expect(() => {
      new IdentitySource(stack, 'IdentitySource', {
        configuration: {
          cognitoUserPoolConfiguration: {
            userPool: userPool,
          },
          openIdConnectConfiguration: {
            issuer: 'https://test.com',
            entityIdPrefix: 'prefix',
            groupConfiguration: {
              groupClaim: 'group',
              groupEntityType: 'GroupType',
            },
            tokenSelection: {
              accessTokenOnly: {
                audiences: ['testAudience'],
                principalIdClaim: 'sub',
              },
            },
          },
        },
        policyStore: policyStore,
        principalEntityType: 'TestType',
      });
    }).toThrow('Only one between cognitoUserPoolConfiguration or openIdConnectConfiguration must be defined');
  });
});