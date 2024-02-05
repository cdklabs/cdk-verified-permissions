import { readFileSync } from 'fs';
import { Statement } from '../src/statement';

describe('Statement creation', () => {
  // Example static statement to reuse
  const statementString = `permit (
    principal,
    action in [MyFirstApp::Action::"Read"],
    resource
)
when { true };`;

  test('Creating a statement from inline', () => {
    // WHEN
    const statement = Statement.fromInline(statementString);
    // THEN
    expect(statement).toEqual(statementString);
  });

  test('Creating a statement from file path', () => {
    // WHEN
    const statement = Statement.fromFile('test/statement.cedar');
    // THEN
    expect(statement).toEqual(readFileSync('test/statement.cedar', 'utf-8'));
  });
});

describe('Statement creation errors', () => {
  test('Creating a statement from an empty string', () => {
    // THEN
    expect(() => {
      Statement.fromInline('');
    }).toThrow('Policies inline statement cannot be empty');
  });

  test('Creating a statement from and empty file path', () => {
    expect(() => {
      Statement.fromFile('');
    }).toThrow('Policy path cannot be empty');
  });
});
