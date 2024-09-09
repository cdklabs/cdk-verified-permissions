import { CdklabsConstructLibrary, JsiiLanguage } from 'cdklabs-projen-project-types';
const project = new CdklabsConstructLibrary({
  author: 'Amazon Web Services',
  authorAddress: 'aws-avp-cdk-dev@amazon.com',
  description: 'L2 AWS CDK Constructs for Amazon Verified Permissions',
  keywords: ['cdk', 'aws-cdk', 'awscdk', 'aws', 'verified-permissions', 'authorization', 'verifiedpermissions'],
  cdkVersion: '2.156.0',
  defaultReleaseBranch: 'main',
  devDeps: ['cdklabs-projen-project-types'],
  bundledDeps: ['@cedar-policy/cedar-wasm@3.2.3'],
  name: '@cdklabs/cdk-verified-permissions',
  projenrcTs: true,
  majorVersion: 0,
  stability: 'experimental',
  releaseToNpm: true,
  jsiiVersion: '5.5',
  jsiiTargetLanguages: [JsiiLanguage.PYTHON, JsiiLanguage.JAVA, JsiiLanguage.DOTNET],
  private: false,
  enablePRAutoMerge: true,
  repositoryUrl: 'https://github.com/cdklabs/cdk-verified-permissions.git',
  gitignore: [
    '/.vscode/**',
  ],
});
project.synth();