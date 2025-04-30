import { cleanUpApiNameForNamespace, getPolicyDescription, getPolicyId, splitPolicies, POLICY_ID_ANNOTATION, POLICY_DESCRIPTION_ANNOTATION } from '../src/cedar-helpers';

describe('testing edge cases in cedar helpers', () => {
  test('cleanUpApiNameForNamespace tests', () => {
    expect(cleanUpApiNameForNamespace('test')).toBe('test');
    expect(cleanUpApiNameForNamespace('bad-name')).toBe('badname');
    expect(cleanUpApiNameForNamespace('---')).toBe('ImportedApi');
    expect(cleanUpApiNameForNamespace('1234backend')).toBe('Api1234backend');
  });
});

describe('testing get description of policy', () => {
  test('get description of policy with non-compliant string', () => {
    let policy = 'test test';
    expect(getPolicyDescription(policy)).toBeNull();
  });

  test('get description of policy with compliant string and permit effect', () => {
    let description = '4124 .,%|/! ^ I am? a description @@@ 1233421';
    let policy = `${POLICY_DESCRIPTION_ANNOTATION}("${description}")permit;`;
    expect(getPolicyDescription(policy)).toBe(description);
  });

  test('get description of policy with compliant string and space between permit effect', () => {
    let description = '4124 .,%|/! ^ I am? a description @@@ 1233421';
    let policy = `${POLICY_DESCRIPTION_ANNOTATION}("${description}") permit;`;
    expect(getPolicyDescription(policy)).toBe(description);
  });

  test('get description of policy with compliant multiline string and permit effect', () => {
    let description = '4124 .,%|/! ^ I am? a description @@@ 1233421';
    let policy = `${POLICY_DESCRIPTION_ANNOTATION}("${description}")
    permit (
      principal,
      action in [MyFirstApp::Action::"Read"],
      resource
    )
    when { true };
    `;
    expect(getPolicyDescription(policy)).toBe(description);
  });

  test('get description of policy with compliant string and forbid effect', () => {
    let description = '4124 .,%|/! ^ I am? a description @@@ 1233421';
    let policy = `${POLICY_DESCRIPTION_ANNOTATION}("${description}")forbid;`;
    expect(getPolicyDescription(policy)).toBe(description);
  });

  test('get description of policy with compliant string and space between forbid effect', () => {
    let description = '4124 .,%|/! ^ I am? a description @@@ 1233421';
    let policy = `${POLICY_DESCRIPTION_ANNOTATION}("${description}") forbid;`;
    expect(getPolicyDescription(policy)).toBe(description);
  });

  test('get description of policy with compliant multiline string and forbid effect', () => {
    let description = '4124 .,%|/! ^ I am? a description @@@ 1233421';
    let policy = `${POLICY_DESCRIPTION_ANNOTATION}("${description}")


    forbid (
      principal,
      action in [MyFirstApp::Action::"Read"],
      resource
    )
    when { true };
    `;
    expect(getPolicyDescription(policy)).toBe(description);
  });
});

describe('testing get id of policy', () => {
  test('get id of policy with non-compliant string', () => {
    let policy = 'test test';
    expect((getPolicyId(policy))).toBeNull();
  });

  test('get id of policy with compliant string and permit effect', () => {
    let id = '4124 .,%|/! ^ I am? an id @@@ 1233421';
    let policy = `${POLICY_ID_ANNOTATION}("${id}")permit;`;
    expect(getPolicyId(policy)).toBe(id);
  });

  test('get id of policy with compliant string and space between permit effect', () => {
    let id = '4124 .,%|/! ^ I am? an id @@@ 1233421';
    let policy = `${POLICY_ID_ANNOTATION}("${id}") permit;`;
    expect(getPolicyId(policy)).toBe(id);
  });

  test('get id of policy with compliant multiline string and permit effect', () => {
    let id = '4124 .,%|/! ^ I am? an id @@@ 1233421';
    let policy = `${POLICY_ID_ANNOTATION}("${id}")
    permit (
      principal,
      action in [MyFirstApp::Action::"Read"],
      resource
    )
    when { true };
    `;
    expect(getPolicyId(policy)).toBe(id);
  });

  test('get id of policy with compliant string and forbid effect', () => {
    let id = '4124 .,%|/! ^ I am? an id @@@ 1233421';
    let policy = `${POLICY_ID_ANNOTATION}("${id}")forbid;`;
    expect(getPolicyId(policy)).toBe(id);
  });

  test('get id of policy with compliant string and space between forbid effect', () => {
    let id = '4124 .,%|/! ^ I am? an id @@@ 1233421';
    let policy = `${POLICY_ID_ANNOTATION}("${id}") forbid;`;
    expect(getPolicyId(policy)).toBe(id);
  });

  test('get id of policy with compliant multiline string and forbid effect', () => {
    let id = '4124 .,%|/! ^ I am? an id @@@ 1233421';
    let policy = `${POLICY_ID_ANNOTATION}("${id}")


    forbid (
      principal,
      action in [MyFirstApp::Action::"Read"],
      resource
    )
    when { true };
    `;
    expect(getPolicyId(policy)).toBe(id);
  });
});

describe('testing get description and id combined in a policy', () => {
  test('combined id and description in a compliant policy', () => {
    let id = 'testId';
    let description = 'testDescription';
    let policy = `${POLICY_ID_ANNOTATION}("${id}")
    ${POLICY_DESCRIPTION_ANNOTATION}("${description}")

    forbid (
      principal,
      action in [MyFirstApp::Action::"Read"],
      resource
    )
    when { true };
    `;
    expect(getPolicyId(policy)).toBe(id);
    expect(getPolicyDescription(policy)).toBe(description);
  });
});

describe('testing splitting multiple policies contained in a single string', () => {
  test('combined id and description in compliant policies', () => {
    let firstPolicy = `${POLICY_ID_ANNOTATION}("testId")
    ${POLICY_DESCRIPTION_ANNOTATION}("testDescription")

    forbid (
      principal,
      action in [MyFirstApp::Action::"Read"],
      resource
    )
    when { true };`;
    let secondPolicy = `

    ${POLICY_ID_ANNOTATION}("testId2")
    ${POLICY_DESCRIPTION_ANNOTATION}("testDescription2")

    permit (
      principal,
      action in [MyFirstApp::Action::"Read"],
      resource
    )
    when { true };
    `;
    let multiplePolicies = firstPolicy + secondPolicy;
    let policies = splitPolicies(multiplePolicies);
    expect(policies.length).toBe(2);
    expect(policies[0]).toBe(firstPolicy.trim());
    expect(policies[1]).toBe(secondPolicy.trim());
  });

  test('combined with one compliant policy with id and description and another without them', () => {
    let firstPolicy = `
    forbid (
      principal,
      action in [MyFirstApp::Action::"Read"],
      resource
    )
    when { true };`;
    let secondPolicy = `

    ${POLICY_ID_ANNOTATION}("testId2")
    ${POLICY_DESCRIPTION_ANNOTATION}("testDescription2")

    permit (
      principal,
      action in [MyFirstApp::Action::"Read"],
      resource
    )
    when { true };
    `;
    let multiplePolicies = firstPolicy + secondPolicy;
    let policies = splitPolicies(multiplePolicies);
    expect(policies.length).toBe(2);
    expect(policies[0]).toBe(firstPolicy.trim());
    expect(policies[1]).toBe(secondPolicy.trim());
  });
  test('two compliant policies without annotations', () => {
    let firstPolicy = `
    forbid (
      principal,
      action in [MyFirstApp::Action::"Read"],
      resource
    )
    when { true };`;
    let secondPolicy = `
    permit (
      principal,
      action in [MyFirstApp::Action::"Read"],
      resource
    )
    when { true }
    `; // Missing last semicolon
    let multiplePolicies = firstPolicy + secondPolicy;
    let policies = splitPolicies(multiplePolicies);
    expect(policies.length).toBe(1);
    expect(policies[0]).toBe(firstPolicy.trim());
  });
  test('combined with one compliant policy with id and description and another malformed-missing last semicolon', () => {
    let firstPolicy = `
    forbid (
      principal,
      action in [MyFirstApp::Action::"Read"],
      resource
    )
    when { true };`;
    let secondPolicy = `

    ${POLICY_ID_ANNOTATION}("testId2")
    ${POLICY_DESCRIPTION_ANNOTATION}("testDescription2")

    permit (
      principal,
      action in [MyFirstApp::Action::"Read"],
      resource
    )
    when { true }
    `; // Missing last semicolon
    let multiplePolicies = firstPolicy + secondPolicy;
    let policies = splitPolicies(multiplePolicies);
    expect(policies.length).toBe(1);
    expect(policies[0]).toBe(firstPolicy.trim());
  });
  test('combined with one compliant policy with id and description and another malformed in permit clause', () => {
    let firstPolicy = `
    forbid (
      principal,
      action in [MyFirstApp::Action::"Read"],
      resource
    )
    when { true };`;
    let secondPolicy = `

    ${POLICY_ID_ANNOTATION}("testId2")
    ${POLICY_DESCRIPTION_ANNOTATION}("testDescription2")

    permit (
      testmalformed
    )
    when { true };
    `; // Missing last semicolon
    let multiplePolicies = firstPolicy + secondPolicy;
    let policies = splitPolicies(multiplePolicies);
    expect(policies.length).toBe(2);
    expect(policies[0]).toBe(firstPolicy.trim());
    expect(policies[1]).toBe(secondPolicy.trim());
  });
});