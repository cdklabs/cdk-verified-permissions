import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CfnPolicyStore } from 'aws-cdk-lib/aws-verifiedpermissions';
import { getResourceLogicalId } from './utils';
import { PolicyStore, ValidationSettingsMode } from '../src/policy-store';
import { PolicyStoreAlias } from '../src/policy-store-alias';

describe('Policy Store Alias creation', () => {
  test('Creating a Policy Store Alias with required properties', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });

    // WHEN
    new PolicyStoreAlias(stack, 'PolicyStoreAlias', {
      aliasName: 'my-alias',
      policyStore: policyStore,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties(
      'AWS::VerifiedPermissions::PolicyStoreAlias',
      {
        AliasName: 'my-alias',
        PolicyStoreId: {
          'Fn::GetAtt': [
            getResourceLogicalId(policyStore, CfnPolicyStore),
            'PolicyStoreId',
          ],
        },
      },
    );
  });

  test('Creating a Policy Store Alias with alphanumeric name', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });

    // WHEN
    new PolicyStoreAlias(stack, 'PolicyStoreAlias', {
      aliasName: 'MyAlias123',
      policyStore: policyStore,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties(
      'AWS::VerifiedPermissions::PolicyStoreAlias',
      {
        AliasName: 'MyAlias123',
      },
    );
  });

  test('Creating a Policy Store Alias exposes aliasName property', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: {
        mode: ValidationSettingsMode.OFF,
      },
    });

    // WHEN
    const alias = new PolicyStoreAlias(stack, 'PolicyStoreAlias', {
      aliasName: 'my-alias',
      policyStore: policyStore,
    });

    // THEN
    expect(alias.aliasName).toBeDefined();
    expect(alias.policyStore).toBe(policyStore);
  });

  test('Creating a Policy Store Alias with an imported policy store', () => {
    // GIVEN
    const stack = new Stack(undefined, 'Stack');
    const policyStoreId = 'ArE4uRLVgxtSX1Bx56NRTY';
    const policyStore = PolicyStore.fromPolicyStoreId(
      stack,
      'ImportedPolicyStore',
      policyStoreId,
    );

    // WHEN
    new PolicyStoreAlias(stack, 'PolicyStoreAlias', {
      aliasName: 'my-alias',
      policyStore: policyStore,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties(
      'AWS::VerifiedPermissions::PolicyStoreAlias',
      {
        AliasName: 'my-alias',
        PolicyStoreId: policyStoreId,
      },
    );
  });
});

describe('Policy Store Alias reference existing alias', () => {
  test('Referencing existing policy store alias by alias name', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    const aliasName = 'my-existing-alias';
    const alias = PolicyStoreAlias.fromAliasName(
      stack,
      'ImportedAlias',
      aliasName,
    );

    // THEN
    expect(alias.aliasName).toBe(aliasName);
  });

  test('Referencing existing policy store alias from attributes', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    const aliasName = 'my-existing-alias';
    const alias = PolicyStoreAlias.fromPolicyStoreAliasAttributes(
      stack,
      'ImportedAlias',
      { aliasName },
    );

    // THEN
    expect(alias.aliasName).toBe(aliasName);
  });
});
