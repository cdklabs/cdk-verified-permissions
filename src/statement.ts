import { readFileSync } from 'fs';
/*
 * Represents the Policy Statement.
 */
export class Statement {
  /**
   * Inline statement for policy
   * @returns `InlineStatement` with inline statement.
   * @param statement The actual statement
   */
  public static fromInline(statement: string): string {
    if (statement.length === 0) {
      throw new Error('Policies inline statement cannot be empty');
    }
    return statement;
  }

  /**
   * Loads the statement from a local disk path.
   * @returns `DirectoryStatement` with statement from file path.
   * @param path A path with the policy statement
   */
  public static fromFile(path: string): string {
    if (path.length === 0) {
      throw new Error('Policy path cannot be empty');
    }
    return readFileSync(path, 'utf-8');
  }
}
