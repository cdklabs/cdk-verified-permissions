import { cleanUpApiNameForNamespace, getPolicyDescription, POLICY_DESCRIPTION_ANNOTATION } from '../src/cedar-helpers';

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
    let policy = `${POLICY_DESCRIPTION_ANNOTATION}("${description}")permit`;
    expect(getPolicyDescription(policy)).toBe(description);
  });

  test('get description of policy with compliant string and space between permit effect', () => {
    let description = '4124 .,%|/! ^ I am? a description @@@ 1233421';
    let policy = `${POLICY_DESCRIPTION_ANNOTATION}("${description}") permit`;
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
    let policy = `${POLICY_DESCRIPTION_ANNOTATION}("${description}")forbid`;
    expect(getPolicyDescription(policy)).toBe(description);
  });

  test('get description of policy with compliant string and space between forbid effect', () => {
    let description = '4124 .,%|/! ^ I am? a description @@@ 1233421';
    let policy = `${POLICY_DESCRIPTION_ANNOTATION}("${description}") forbid`;
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

  test('get description of policy with compliant string and no effect', () => {
    let description = '4124 .,%|/! ^ I am? a description @@@ 1233421';
    let policy = `${POLICY_DESCRIPTION_ANNOTATION}("${description}")`;
    expect(getPolicyDescription(policy)).toBe(null);
  });
});