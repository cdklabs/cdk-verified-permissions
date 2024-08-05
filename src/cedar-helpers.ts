
import * as cedar from '@cedar-policy/cedar-wasm/nodejs';

export const POLICY_DESCRIPTION_ANNOTATION = '@AvpPolicyDescription';

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
 * Extracts the Description of the Policy searching for the 'AVPPolicyDescription' annotation on top of policy contents (before effect)
 * @param policyStatement The policy statement in string format
 * @returns Returns the description if found or null
 */
export function getPolicyDescription(policyStatement: string): string | null {
  const regex = new RegExp(String.raw`^${POLICY_DESCRIPTION_ANNOTATION}\(("|')(.*)("|')(\))([\r\n|\r|\n| ]*)(permit|forbid)`);
  let matches = policyStatement.match(regex);
  return (matches) ? matches[2] : null;
}

export function checkParseTemplate(templateStatement: string) {
  const templateParseResult = cedar.checkParseTemplate(templateStatement);
  if (templateParseResult.type === 'error') {
    throw new Error(`Error parsing template: ${templateStatement}. Errors: ${templateParseResult.errors.join(', ')}`);
  }
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
    throw new Error(`Policy (contents: ${policyStatement}) could not be parsed: ${validationResult.errors.join('; ')}`);
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