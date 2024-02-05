export const AUTH_ACTIONS = [
  'verifiedpermissions:IsAuthorized',
  'verifiedpermissions:IsAuthorizedWithToken',
];

export const READ_ACTIONS = [
  'verifiedpermissions:GetIdentitySource',
  'verifiedpermissions:GetPolicy',
  'verifiedpermissions:GetPolicyStore',
  'verifiedpermissions:GetPolicyTemplate',
  'verifiedpermissions:GetSchema',
  'verifiedpermissions:ListIdentitySources',
  'verifiedpermissions:ListPolicies',
  'verifiedpermissions:ListPolicyTemplates',
];

export const WRITE_ACTIONS = [
  'verifiedpermissions:CreateIdentitySource',
  'verifiedpermissions:CreatePolicy',
  'verifiedpermissions:CreatePolicyTemplate',
  'verifiedpermissions:DeleteIdentitySource',
  'verifiedpermissions:DeletePolicy',
  'verifiedpermissions:DeletePolicyTemplate',
  'verifiedpermissions:PutSchema',
  'verifiedpermissions:UpdateIdentitySource',
  'verifiedpermissions:UpdatePolicy',
  'verifiedpermissions:UpdatePolicyTemplate',
];