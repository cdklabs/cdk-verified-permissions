import { CdklabsConstructLibrary } from 'cdklabs-projen-project-types';
const project = new CdklabsConstructLibrary({
  author: 'Amazon Web Services',
  authorAddress: 'aws-avp-cdk-dev@amazon.com',
  description: 'L2 AWS CDK Constructs for Amazon Verified Permissions',
  keywords: ['cdk', 'aws-cdk', 'awscdk', 'aws', 'verified-permissions', 'authorization'],
  cdkVersion: '2.92.0',
  defaultReleaseBranch: 'main',
  devDeps: ['cdklabs-projen-project-types'],
  jsiiVersion: '~5.0.0',
  workflowNodeVersion: '20.x',
  minNodeVersion: '20.0.0',
  name: 'cdk-verified-permissions',
  projenrcTs: true,
  prerelease: 'alpha',
  stability: 'experimental',
  releaseToNpm: true,
  publishToPypi: {
    distName: 'cdk-verified-permissions',
    module: 'cdk_verified_permissions',
  },
  publishToMaven: {
    javaPackage: 'io.github.cdklabs.verifiedpermissions',
    mavenGroupId: 'io.github.cdklabs',
    mavenArtifactId: 'cdk-verified-permissions',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },
  publishToNuget: {
    dotNetNamespace: 'Cdklabs.VerifiedPermissions',
    packageId: 'Cdklabs.VerifiedPermissions',
  },
  publishToGo: {
    moduleName: 'github.com/cdklabs/cdk-verified-permissions-go',
    packageName: 'cdk-verified-permissions-go',
  },
  repositoryUrl: 'https://github.com/cdklabs/cdk-verified-permissions.git',
});
project.synth();