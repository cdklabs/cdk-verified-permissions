import { CdklabsConstructLibrary } from 'cdklabs-projen-project-types';
const project = new CdklabsConstructLibrary({
  author: 'Amazon Web Services',
  authorAddress: 'aws-avp-cdk-dev@amazon.com',
  description: 'L2 AWS CDK Constructs for Amazon Verified Permissions',
  keywords: ['cdk', 'aws-cdk', 'awscdk', 'aws', 'verified-permissions', 'authorization'],
  cdkVersion: '2.92.0',
  defaultReleaseBranch: 'main',
  devDeps: ['cdklabs-projen-project-types'],
  name: '@cdklabs/cdk-verified-permissions',
  projenrcTs: true,
  prerelease: 'alpha',
  stability: 'experimental',
  releaseToNpm: true,
  private: false,
  repositoryUrl: 'https://github.com/cdklabs/cdk-verified-permissions.git',
});
project.synth();