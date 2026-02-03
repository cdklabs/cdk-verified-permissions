import * as fs from 'fs';
import * as path from 'path';
import { Stack } from 'aws-cdk-lib';
import { PolicyStore, ValidationSettingsMode } from '../src/policy-store';

describe('Policy Dependencies', () => {
  let testDir: string;

  beforeEach(() => {
    testDir = fs.mkdtempSync('/tmp/test-policies-');
  });

  afterEach(() => {
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true });
    }
  });

  test('policies with same resource have sequential dependencies', () => {
    // Create policies with same resource
    fs.writeFileSync(
      path.join(testDir, 'policy1.cedar'),
      'permit(principal, action, resource == Photo::"vacation.jpg");',
    );
    fs.writeFileSync(
      path.join(testDir, 'policy2.cedar'),
      'permit(principal, action, resource == Photo::"vacation.jpg");',
    );

    const stack = new Stack();
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: { mode: ValidationSettingsMode.OFF },
    });

    const policies = policyStore.addPoliciesFromPath(testDir);

    expect(policies.length).toBe(2);
    // Second policy should depend on first
    expect(policies[1].node.dependencies.length).toBeGreaterThan(0);
  });

  test('policies are organized in resource group batches', () => {
    // Create 12 policies with different resources (12 resource groups)
    for (let i = 0; i < 12; i++) {
      fs.writeFileSync(
        path.join(testDir, `policy${i}.cedar`),
        `permit(principal, action, resource == Photo::"photo${i}.jpg");`,
      );
    }

    const stack = new Stack();
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: { mode: ValidationSettingsMode.OFF },
    });

    const policies = policyStore.addPoliciesFromPath(testDir);

    expect(policies.length).toBe(12);

    // First 5 resource groups should have no dependencies (can be created simultaneously)
    for (let i = 0; i < 5; i++) {
      const deps = policies[i].node.dependencies.filter(
        d => d.node.id !== 'PolicyStore',
      );
      expect(deps.length).toBe(0);
    }

    // Each resource group after the first 5 depends on the resource group 5 positions earlier
    // Resource group 5 depends on resource group 0
    expect(policies[5].node.dependencies.some(d => d === policies[0])).toBe(true);

    // Resource group 6 depends on resource group 1
    expect(policies[6].node.dependencies.some(d => d === policies[1])).toBe(true);

    // Resource group 10 depends on resource group 5
    expect(policies[10].node.dependencies.some(d => d === policies[5])).toBe(true);

    // Total number of dependencies should be numPolicies - SIMULTANEOUS_POLICY_CREATION_STREAMS
    const SIMULTANEOUS_POLICY_CREATION_STREAMS = 5;
    const totalDeps = policies.reduce((count, policy) => {
      return count + policy.node.dependencies.filter(d => d.node.id !== 'PolicyStore').length;
    }, 0);
    expect(totalDeps).toBe(policies.length - SIMULTANEOUS_POLICY_CREATION_STREAMS);
  });

  test('policies with annotations use correct cdkId and description', () => {
    fs.writeFileSync(
      path.join(testDir, 'annotated1.cedar'),
      '@cdkId("CustomId1")\n@cdkDescription("Custom description 1")\npermit(principal, action, resource);',
    );
    fs.writeFileSync(
      path.join(testDir, 'annotated2.cedar'),
      '@cdkId("CustomId2")\n@cdkDescription("Custom description 2")\npermit(principal, action, resource);',
    );

    const stack = new Stack();
    const policyStore = new PolicyStore(stack, 'PolicyStore', {
      validationSettings: { mode: ValidationSettingsMode.OFF },
    });

    const policies = policyStore.addPoliciesFromPath(testDir);

    expect(policies.length).toBe(2);
    expect(policies[0].node.id).toBe('CustomId1');
    expect(policies[0].definition.static?.description).toBe('Custom description 1');
    expect(policies[1].node.id).toBe('CustomId2');
    expect(policies[1].definition.static?.description).toBe('Custom description 2');
  });
});
