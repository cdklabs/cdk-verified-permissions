
import * as cedar from '@cedar-policy/cedar-wasm/nodejs';

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