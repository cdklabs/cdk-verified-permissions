
import * as cedar from '@cedar-policy/cedar-wasm/nodejs';

export const POLICY_DESCRIPTION_ANNOTATION = '@cdkDescription';
export const POLICY_ID_ANNOTATION = '@cdkId';

export function checkParseSchema(schemaStr: string) {
  const schemaParseResult = cedar.checkParseSchema(schemaStr);
  if (schemaParseResult.type === 'error') {
    throw new Error(`Schema is invalid: ${schemaParseResult.errors}`);
  }
}

export function checkParsePolicy(policyStatement: string) {
  const parsePolicyResult = cedar.checkParsePolicySet(policyStatement);
  if (parsePolicyResult.type == 'error') {
    throw new Error(`Invalid policy statement: ${policyStatement}. Errors: ${parsePolicyResult.errors.join(', ')}`);
  }
}

/**
 * Extracts the Description of the Policy searching for the @see POLICY_DESCRIPTION_ANNOTATION annotation on top of policy contents (before effect)
 * @param policyStatement The policy statement in string format
 * @returns Returns the description if found or null
 */
export function getPolicyDescription(policyStatement: string): string | null {
  const regex = new RegExp(String.raw`${POLICY_DESCRIPTION_ANNOTATION}\(["']([^"']*)["']\)`);
  let matches = policyStatement.match(regex);
  return (matches) ? matches[1] : null;
}

/**
 * Extracts the Description of the Policy searching for the @see POLICY_ID_ANNOTATION annotation on top of policy contents (before effect)
 * @param policyStatement The policy statement in string format
 * @returns Returns the id if found or null
 */
export function getPolicyId(policyStatement: string): string | null {
  const regex = new RegExp(String.raw`${POLICY_ID_ANNOTATION}\(["']([^"']*)["']\)`);
  let matches = policyStatement.match(regex);
  return (matches) ? matches[1] : null;
}

/**
 * Split the Policies in case of multiple Cedar Policies in a string.
 * Please Note: this method doesn't provide a validation of every policy, it just splits
 * them and returns an array. Policies not providing the final (and required) semicolon will
 * be skipped
 * @param policyStatements The policy statements in string format
 * @returns an array where each element represents a Cedar Policy statement
 */
export function splitPolicies(policyStatements: string): string[] {
  // This regex matches policy statements that start with permit or forbid
  // and may have annotations before them, and end with a semicolon
  // It handles multi-line policies and policies with conditions
  const policyRegex = /((?:@[^(]+\([^)]+\)\s*)*(?:permit|forbid)[^;]*;)/gs;
  const policies: string[] = [];
  let match;

  while ((match = policyRegex.exec(policyStatements)) !== null) {
    policies.push(match[0].trim());
  }

  return policies;
}


export function checkParseTemplate(templateStatement: string) {
  const templateParseResult = cedar.checkParseTemplate(templateStatement);
  if (templateParseResult.type === 'error') {
    throw new Error(`Error parsing template: ${templateStatement}. Errors: ${templateParseResult.errors.join(', ')}`);
  }
}
/**
 * Method which validates multple Cedar policies in a single string against a Cedar Schema
 *
 * @param policiesStatements a string containing multiple Cedar policies
 * @param schemaStr a Cedar Schema
 */
export function validateMultiplePolicies(policiesStatements: string, schemaStr: string) {
  const policyStatements = splitPolicies(policiesStatements);
  policyStatements.map((policyStatement) => {
    validatePolicy(policyStatement, schemaStr);
  });
}

export function validatePolicy(policyStatement: string, schemaStr: string) {
  const validationResult = cedar.validate({
    validationSettings: { enabled: 'on' },
    schema: {
      json: JSON.parse(schemaStr),
    },
    policySet: policyStatement,
  });
  if (validationResult.type === 'failure') {
    throw new Error(`Policy (contents: ${policyStatement}) could not be parsed: ${validationResult.errors.map((error) => error.message).join('; ')}`);
  }
  if (validationResult.type === 'success' && validationResult.validationErrors.length > 0) {
    throw new Error(
      `Policy (contents: ${policyStatement}) could not be validated against the schema:
      ${validationResult.validationErrors.join('; ')}`,
    );
  }
}

export function cleanUpApiNameForNamespace(apiName: string): string {
  const validCedarName = apiName.replace(/[^a-zA-Z0-9_]/g, '').trim();
  if (validCedarName.length === 0) {
    return 'ImportedApi';
  }
  if (/[0-9_]/.exec(validCedarName[0])) {
    return `Api${validCedarName}`;
  }
  return validCedarName;
}

export function buildSchema(
  namespace: string,
  actionNames: string[],
  principalGroupType?: string,
): Record<string, Record<string, any>> {
  const additionalEntities: Record<string, any> = {};
  if (principalGroupType) {
    additionalEntities[principalGroupType] = {
      shape: {
        type: 'Record',
        attributes: {},
      },
    };
  }
  const actions = actionNames.reduce((acc, actionName) => {
    return {
      ...acc,
      [actionName]: {
        appliesTo: {
          context: { type: 'Record', attributes: {} },
          principalTypes: ['User'],
          resourceTypes: ['Application'],
        },
      },
    };
  }, {});
  return {
    [namespace]: {
      entityTypes: {
        ...additionalEntities,
        User: {
          shape: {
            type: 'Record',
            attributes: {},
          },
          memberOfTypes: principalGroupType ? [principalGroupType] : [],
        },
        Application: {
          shape: {
            type: 'Record',
            attributes: {},
          },
        },
      },
      actions,
    },
  };
}