import { cleanUpApiNameForNamespace } from '../src/cedar-helpers';

describe('testing edge cases in cedar helpers', () => {
  test('cleanUpApiNameForNamespace tests', () => {
    expect(cleanUpApiNameForNamespace('test')).toBe('test');
    expect(cleanUpApiNameForNamespace('bad-name')).toBe('badname');
    expect(cleanUpApiNameForNamespace('---')).toBe('ImportedApi');
    expect(cleanUpApiNameForNamespace('1234backend')).toBe('Api1234backend');
  });
});