import { CfnResource, Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * Function to get the logicalId of a resource
 * @param resource - The input resource for which the logicalId should be found
 * @param cfnResource - The Cfn resource type to look for
 * @returns - logicalId of the Cfn resource
 */
export function getResourceLogicalId(resource: Construct, cfnResource: any) {
  let resourceNode = resource.node.children.find((e) => {
    return (e as CfnResource) instanceof cfnResource;
  });
  const resourceLogicalId = Stack.of(resource).resolve(
    (resourceNode!! as CfnResource).logicalId,
  );

  return resourceLogicalId;
}
