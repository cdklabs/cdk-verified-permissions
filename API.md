# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentitySource <a name="IdentitySource" id="@cdklabs/cdk-verified-permissions.IdentitySource"></a>

- *Implements:* <a href="#@cdklabs/cdk-verified-permissions.IIdentitySource">IIdentitySource</a>

#### Initializers <a name="Initializers" id="@cdklabs/cdk-verified-permissions.IdentitySource.Initializer"></a>

```typescript
import { IdentitySource } from '@cdklabs/cdk-verified-permissions'

new IdentitySource(scope: Construct, id: string, props: IdentitySourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySourceProps">IdentitySourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-verified-permissions.IdentitySource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-verified-permissions.IdentitySource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-verified-permissions.IdentitySource.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.IdentitySourceProps">IdentitySourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.addAudience">addAudience</a></code> | Add an audience to the list. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.addClientId">addClientId</a></code> | Add a clientId to the list The method can be called only when the Identity Source is configured with one of these configs:  - Cognito auth provider  - OIDC auth provider and ID Token Selection mode. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.addUserPoolClient">addUserPoolClient</a></code> | Add a User Pool Client The method can be called only when the Identity Source is configured with Cognito auth provider. |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-verified-permissions.IdentitySource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-verified-permissions.IdentitySource.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-verified-permissions.IdentitySource.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addAudience` <a name="addAudience" id="@cdklabs/cdk-verified-permissions.IdentitySource.addAudience"></a>

```typescript
public addAudience(audience: string): void
```

Add an audience to the list.

The method can be called only when the Identity Source is configured with OIDC auth provider and Access Token Selection mode

###### `audience`<sup>Required</sup> <a name="audience" id="@cdklabs/cdk-verified-permissions.IdentitySource.addAudience.parameter.audience"></a>

- *Type:* string

the audience to be added.

---

##### `addClientId` <a name="addClientId" id="@cdklabs/cdk-verified-permissions.IdentitySource.addClientId"></a>

```typescript
public addClientId(clientId: string): void
```

Add a clientId to the list The method can be called only when the Identity Source is configured with one of these configs:  - Cognito auth provider  - OIDC auth provider and ID Token Selection mode.

###### `clientId`<sup>Required</sup> <a name="clientId" id="@cdklabs/cdk-verified-permissions.IdentitySource.addClientId.parameter.clientId"></a>

- *Type:* string

The clientId to be added.

---

##### `addUserPoolClient` <a name="addUserPoolClient" id="@cdklabs/cdk-verified-permissions.IdentitySource.addUserPoolClient"></a>

```typescript
public addUserPoolClient(userPoolClient: IUserPoolClient): void
```

Add a User Pool Client The method can be called only when the Identity Source is configured with Cognito auth provider.

###### `userPoolClient`<sup>Required</sup> <a name="userPoolClient" id="@cdklabs/cdk-verified-permissions.IdentitySource.addUserPoolClient.parameter.userPoolClient"></a>

- *Type:* aws-cdk-lib.aws_cognito.IUserPoolClient

The User Pool Client Construct.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.fromIdentitySourceAttributes">fromIdentitySourceAttributes</a></code> | Creates Identity Source from its attributes. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.fromIdentitySourceId">fromIdentitySourceId</a></code> | Create an Identity Source from its identifier. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-verified-permissions.IdentitySource.isConstruct"></a>

```typescript
import { IdentitySource } from '@cdklabs/cdk-verified-permissions'

IdentitySource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-verified-permissions.IdentitySource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-verified-permissions.IdentitySource.isOwnedResource"></a>

```typescript
import { IdentitySource } from '@cdklabs/cdk-verified-permissions'

IdentitySource.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-verified-permissions.IdentitySource.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-verified-permissions.IdentitySource.isResource"></a>

```typescript
import { IdentitySource } from '@cdklabs/cdk-verified-permissions'

IdentitySource.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-verified-permissions.IdentitySource.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromIdentitySourceAttributes` <a name="fromIdentitySourceAttributes" id="@cdklabs/cdk-verified-permissions.IdentitySource.fromIdentitySourceAttributes"></a>

```typescript
import { IdentitySource } from '@cdklabs/cdk-verified-permissions'

IdentitySource.fromIdentitySourceAttributes(scope: Construct, id: string, attrs: IdentitySourceAttributes)
```

Creates Identity Source from its attributes.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-verified-permissions.IdentitySource.fromIdentitySourceAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-verified-permissions.IdentitySource.fromIdentitySourceAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cdklabs/cdk-verified-permissions.IdentitySource.fromIdentitySourceAttributes.parameter.attrs"></a>

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.IdentitySourceAttributes">IdentitySourceAttributes</a>

An `IdentitySourceAttributes` object.

---

##### `fromIdentitySourceId` <a name="fromIdentitySourceId" id="@cdklabs/cdk-verified-permissions.IdentitySource.fromIdentitySourceId"></a>

```typescript
import { IdentitySource } from '@cdklabs/cdk-verified-permissions'

IdentitySource.fromIdentitySourceId(scope: Construct, id: string, identitySourceId: string)
```

Create an Identity Source from its identifier.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-verified-permissions.IdentitySource.fromIdentitySourceId.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-verified-permissions.IdentitySource.fromIdentitySourceId.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `identitySourceId`<sup>Required</sup> <a name="identitySourceId" id="@cdklabs/cdk-verified-permissions.IdentitySource.fromIdentitySourceId.parameter.identitySourceId"></a>

- *Type:* string

The Identity Source identifier.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.property.audiencesOIDC">audiencesOIDC</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.property.clientIds">clientIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.property.identitySourceId">identitySourceId</a></code> | <code>string</code> | Identity Source identifier. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.property.policyStore">policyStore</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyStore">IPolicyStore</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.property.cognitoGroupEntityType">cognitoGroupEntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.property.groupConfigGroupClaimOIDC">groupConfigGroupClaimOIDC</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.property.groupConfigGroupEntityTypeOIDC">groupConfigGroupEntityTypeOIDC</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.property.principalIdClaimOIDC">principalIdClaimOIDC</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySource.property.userPoolArn">userPoolArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-verified-permissions.IdentitySource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-verified-permissions.IdentitySource.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-verified-permissions.IdentitySource.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `audiencesOIDC`<sup>Required</sup> <a name="audiencesOIDC" id="@cdklabs/cdk-verified-permissions.IdentitySource.property.audiencesOIDC"></a>

```typescript
public readonly audiencesOIDC: string[];
```

- *Type:* string[]

---

##### `clientIds`<sup>Required</sup> <a name="clientIds" id="@cdklabs/cdk-verified-permissions.IdentitySource.property.clientIds"></a>

```typescript
public readonly clientIds: string[];
```

- *Type:* string[]

---

##### `identitySourceId`<sup>Required</sup> <a name="identitySourceId" id="@cdklabs/cdk-verified-permissions.IdentitySource.property.identitySourceId"></a>

```typescript
public readonly identitySourceId: string;
```

- *Type:* string

Identity Source identifier.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdklabs/cdk-verified-permissions.IdentitySource.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `policyStore`<sup>Required</sup> <a name="policyStore" id="@cdklabs/cdk-verified-permissions.IdentitySource.property.policyStore"></a>

```typescript
public readonly policyStore: IPolicyStore;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.IPolicyStore">IPolicyStore</a>

---

##### `cognitoGroupEntityType`<sup>Optional</sup> <a name="cognitoGroupEntityType" id="@cdklabs/cdk-verified-permissions.IdentitySource.property.cognitoGroupEntityType"></a>

```typescript
public readonly cognitoGroupEntityType: string;
```

- *Type:* string

---

##### `groupConfigGroupClaimOIDC`<sup>Optional</sup> <a name="groupConfigGroupClaimOIDC" id="@cdklabs/cdk-verified-permissions.IdentitySource.property.groupConfigGroupClaimOIDC"></a>

```typescript
public readonly groupConfigGroupClaimOIDC: string;
```

- *Type:* string

---

##### `groupConfigGroupEntityTypeOIDC`<sup>Optional</sup> <a name="groupConfigGroupEntityTypeOIDC" id="@cdklabs/cdk-verified-permissions.IdentitySource.property.groupConfigGroupEntityTypeOIDC"></a>

```typescript
public readonly groupConfigGroupEntityTypeOIDC: string;
```

- *Type:* string

---

##### `principalIdClaimOIDC`<sup>Optional</sup> <a name="principalIdClaimOIDC" id="@cdklabs/cdk-verified-permissions.IdentitySource.property.principalIdClaimOIDC"></a>

```typescript
public readonly principalIdClaimOIDC: string;
```

- *Type:* string

---

##### `userPoolArn`<sup>Optional</sup> <a name="userPoolArn" id="@cdklabs/cdk-verified-permissions.IdentitySource.property.userPoolArn"></a>

```typescript
public readonly userPoolArn: string;
```

- *Type:* string

---


### Policy <a name="Policy" id="@cdklabs/cdk-verified-permissions.Policy"></a>

- *Implements:* <a href="#@cdklabs/cdk-verified-permissions.IPolicy">IPolicy</a>

#### Initializers <a name="Initializers" id="@cdklabs/cdk-verified-permissions.Policy.Initializer"></a>

```typescript
import { Policy } from '@cdklabs/cdk-verified-permissions'

new Policy(scope: Construct, id: string, props: PolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.PolicyProps">PolicyProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-verified-permissions.Policy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-verified-permissions.Policy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-verified-permissions.Policy.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.PolicyProps">PolicyProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-verified-permissions.Policy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-verified-permissions.Policy.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-verified-permissions.Policy.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.fromFile">fromFile</a></code> | Create a policy based on a file containing a cedar policy. |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.fromPolicyAttributes">fromPolicyAttributes</a></code> | Import a Policy construct from attributes. |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.fromPolicyId">fromPolicyId</a></code> | Import a policy into the CDK using its id. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-verified-permissions.Policy.isConstruct"></a>

```typescript
import { Policy } from '@cdklabs/cdk-verified-permissions'

Policy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-verified-permissions.Policy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-verified-permissions.Policy.isOwnedResource"></a>

```typescript
import { Policy } from '@cdklabs/cdk-verified-permissions'

Policy.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-verified-permissions.Policy.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-verified-permissions.Policy.isResource"></a>

```typescript
import { Policy } from '@cdklabs/cdk-verified-permissions'

Policy.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-verified-permissions.Policy.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromFile` <a name="fromFile" id="@cdklabs/cdk-verified-permissions.Policy.fromFile"></a>

```typescript
import { Policy } from '@cdklabs/cdk-verified-permissions'

Policy.fromFile(scope: Construct, id: string, props: StaticPolicyFromFileProps)
```

Create a policy based on a file containing a cedar policy.

Best practice would be
for the file name to end in `.cedar` but this is not required. Policy is parsed for valid
syntax but not validated against schema. In order to validate against schema, use
`PolicyStore.addPoliciesFromPath()`

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-verified-permissions.Policy.fromFile.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-verified-permissions.Policy.fromFile.parameter.id"></a>

- *Type:* string

The construct id.

---

###### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-verified-permissions.Policy.fromFile.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.StaticPolicyFromFileProps">StaticPolicyFromFileProps</a>

A `StaticPolicyFromFileProps` object.

---

##### `fromPolicyAttributes` <a name="fromPolicyAttributes" id="@cdklabs/cdk-verified-permissions.Policy.fromPolicyAttributes"></a>

```typescript
import { Policy } from '@cdklabs/cdk-verified-permissions'

Policy.fromPolicyAttributes(scope: Construct, id: string, attrs: PolicyAttributes)
```

Import a Policy construct from attributes.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-verified-permissions.Policy.fromPolicyAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-verified-permissions.Policy.fromPolicyAttributes.parameter.id"></a>

- *Type:* string

The construct id.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cdklabs/cdk-verified-permissions.Policy.fromPolicyAttributes.parameter.attrs"></a>

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.PolicyAttributes">PolicyAttributes</a>

A `PolicyAttributes` object.

---

##### `fromPolicyId` <a name="fromPolicyId" id="@cdklabs/cdk-verified-permissions.Policy.fromPolicyId"></a>

```typescript
import { Policy } from '@cdklabs/cdk-verified-permissions'

Policy.fromPolicyId(scope: Construct, id: string, policyId: string)
```

Import a policy into the CDK using its id.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-verified-permissions.Policy.fromPolicyId.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-verified-permissions.Policy.fromPolicyId.parameter.id"></a>

- *Type:* string

The construct id.

---

###### `policyId`<sup>Required</sup> <a name="policyId" id="@cdklabs/cdk-verified-permissions.Policy.fromPolicyId.parameter.policyId"></a>

- *Type:* string

The policy id.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.property.definition">definition</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.PolicyDefinitionProperty">PolicyDefinitionProperty</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.property.policyId">policyId</a></code> | <code>string</code> | The unique ID of the new or updated policy. |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.property.policyStoreId">policyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.Policy.property.policyType">policyType</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.PolicyType">PolicyType</a></code> | The type of the policy. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-verified-permissions.Policy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-verified-permissions.Policy.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-verified-permissions.Policy.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdklabs/cdk-verified-permissions.Policy.property.definition"></a>

```typescript
public readonly definition: PolicyDefinitionProperty;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.PolicyDefinitionProperty">PolicyDefinitionProperty</a>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdklabs/cdk-verified-permissions.Policy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The unique ID of the new or updated policy.

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="@cdklabs/cdk-verified-permissions.Policy.property.policyStoreId"></a>

```typescript
public readonly policyStoreId: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdklabs/cdk-verified-permissions.Policy.property.policyType"></a>

```typescript
public readonly policyType: PolicyType;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.PolicyType">PolicyType</a>

The type of the policy.

This is one of the following values: Static or TemplateLinked.

---


### PolicyStore <a name="PolicyStore" id="@cdklabs/cdk-verified-permissions.PolicyStore"></a>

- *Implements:* <a href="#@cdklabs/cdk-verified-permissions.IPolicyStore">IPolicyStore</a>

#### Initializers <a name="Initializers" id="@cdklabs/cdk-verified-permissions.PolicyStore.Initializer"></a>

```typescript
import { PolicyStore } from '@cdklabs/cdk-verified-permissions'

new PolicyStore(scope: Construct, id: string, props?: PolicyStoreProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStoreProps">PolicyStoreProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-verified-permissions.PolicyStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-verified-permissions.PolicyStore.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-verified-permissions.PolicyStore.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.PolicyStoreProps">PolicyStoreProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.addPolicies">addPolicies</a></code> | Add multiple policies to the policy store. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.addPoliciesFromPath">addPoliciesFromPath</a></code> | Takes in an absolute path to a directory containing .cedar files and adds the contents of each .cedar file as policies to this policy store. Parses the policies with cedar-wasm and, if the policy store has a schema, performs semantic validation of the policies as well. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.grant">grant</a></code> | Adds an IAM policy statement associated with this policy store to an IAM principal's policy. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.grantAuth">grantAuth</a></code> | Permits an IAM principal all auth operations on the policy store: IsAuthorized, IsAuthorizedWithToken. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.grantRead">grantRead</a></code> | Permits an IAM principal all read operations on the policy store: GetIdentitySource, GetPolicy, GetPolicyStore, GetPolicyTemplate, GetSchema, ListIdentitySources, ListPolicies, ListPolicyTemplates. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.grantWrite">grantWrite</a></code> | Permits an IAM principal all write & read operations on the policy store: CreateIdentitySource, CreatePolicy,CreatePolicyTemplate, DeleteIdentitySource, DeletePolicy, DeletePolicyTemplate, PutSchema, UpdateIdentitySource, UpdatePolicy, UpdatePolicyTemplate. |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-verified-permissions.PolicyStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-verified-permissions.PolicyStore.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-verified-permissions.PolicyStore.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addPolicies` <a name="addPolicies" id="@cdklabs/cdk-verified-permissions.PolicyStore.addPolicies"></a>

```typescript
public addPolicies(policyDefinitions: AddPolicyOptions[]): Policy[]
```

Add multiple policies to the policy store.

###### `policyDefinitions`<sup>Required</sup> <a name="policyDefinitions" id="@cdklabs/cdk-verified-permissions.PolicyStore.addPolicies.parameter.policyDefinitions"></a>

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.AddPolicyOptions">AddPolicyOptions</a>[]

An array of policy options for the policy stores policies.

---

##### `addPoliciesFromPath` <a name="addPoliciesFromPath" id="@cdklabs/cdk-verified-permissions.PolicyStore.addPoliciesFromPath"></a>

```typescript
public addPoliciesFromPath(absolutePath: string): Policy[]
```

Takes in an absolute path to a directory containing .cedar files and adds the contents of each .cedar file as policies to this policy store. Parses the policies with cedar-wasm and, if the policy store has a schema, performs semantic validation of the policies as well.

###### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="@cdklabs/cdk-verified-permissions.PolicyStore.addPoliciesFromPath.parameter.absolutePath"></a>

- *Type:* string

a string representing an absolute path to the directory containing your policies.

---

##### `grant` <a name="grant" id="@cdklabs/cdk-verified-permissions.PolicyStore.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: ...string[]): Grant
```

Adds an IAM policy statement associated with this policy store to an IAM principal's policy.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cdklabs/cdk-verified-permissions.PolicyStore.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="@cdklabs/cdk-verified-permissions.PolicyStore.grant.parameter.actions"></a>

- *Type:* ...string[]

---

##### `grantAuth` <a name="grantAuth" id="@cdklabs/cdk-verified-permissions.PolicyStore.grantAuth"></a>

```typescript
public grantAuth(grantee: IGrantable): Grant
```

Permits an IAM principal all auth operations on the policy store: IsAuthorized, IsAuthorizedWithToken.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cdklabs/cdk-verified-permissions.PolicyStore.grantAuth.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantRead` <a name="grantRead" id="@cdklabs/cdk-verified-permissions.PolicyStore.grantRead"></a>

```typescript
public grantRead(grantee: IGrantable): Grant
```

Permits an IAM principal all read operations on the policy store: GetIdentitySource, GetPolicy, GetPolicyStore, GetPolicyTemplate, GetSchema, ListIdentitySources, ListPolicies, ListPolicyTemplates.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cdklabs/cdk-verified-permissions.PolicyStore.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantWrite` <a name="grantWrite" id="@cdklabs/cdk-verified-permissions.PolicyStore.grantWrite"></a>

```typescript
public grantWrite(grantee: IGrantable): Grant
```

Permits an IAM principal all write & read operations on the policy store: CreateIdentitySource, CreatePolicy,CreatePolicyTemplate, DeleteIdentitySource, DeletePolicy, DeletePolicyTemplate, PutSchema, UpdateIdentitySource, UpdatePolicy, UpdatePolicyTemplate.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cdklabs/cdk-verified-permissions.PolicyStore.grantWrite.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.fromPolicyStoreArn">fromPolicyStoreArn</a></code> | Create a PolicyStore construct that represents an external PolicyStore via policy store arn. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.fromPolicyStoreAttributes">fromPolicyStoreAttributes</a></code> | Creates a PolicyStore construct that represents an external Policy Store. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.fromPolicyStoreId">fromPolicyStoreId</a></code> | Create a PolicyStore construct that represents an external policy store via policy store id. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.schemaFromOpenApiSpec">schemaFromOpenApiSpec</a></code> | This method generates a schema based on an swagger file. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.schemaFromRestApi">schemaFromRestApi</a></code> | This method generates a schema based on an AWS CDK RestApi construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-verified-permissions.PolicyStore.isConstruct"></a>

```typescript
import { PolicyStore } from '@cdklabs/cdk-verified-permissions'

PolicyStore.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-verified-permissions.PolicyStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-verified-permissions.PolicyStore.isOwnedResource"></a>

```typescript
import { PolicyStore } from '@cdklabs/cdk-verified-permissions'

PolicyStore.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-verified-permissions.PolicyStore.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-verified-permissions.PolicyStore.isResource"></a>

```typescript
import { PolicyStore } from '@cdklabs/cdk-verified-permissions'

PolicyStore.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-verified-permissions.PolicyStore.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromPolicyStoreArn` <a name="fromPolicyStoreArn" id="@cdklabs/cdk-verified-permissions.PolicyStore.fromPolicyStoreArn"></a>

```typescript
import { PolicyStore } from '@cdklabs/cdk-verified-permissions'

PolicyStore.fromPolicyStoreArn(scope: Construct, id: string, policyStoreArn: string)
```

Create a PolicyStore construct that represents an external PolicyStore via policy store arn.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-verified-permissions.PolicyStore.fromPolicyStoreArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-verified-permissions.PolicyStore.fromPolicyStoreArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `policyStoreArn`<sup>Required</sup> <a name="policyStoreArn" id="@cdklabs/cdk-verified-permissions.PolicyStore.fromPolicyStoreArn.parameter.policyStoreArn"></a>

- *Type:* string

The PolicyStore's ARN.

---

##### `fromPolicyStoreAttributes` <a name="fromPolicyStoreAttributes" id="@cdklabs/cdk-verified-permissions.PolicyStore.fromPolicyStoreAttributes"></a>

```typescript
import { PolicyStore } from '@cdklabs/cdk-verified-permissions'

PolicyStore.fromPolicyStoreAttributes(scope: Construct, id: string, attrs: PolicyStoreAttributes)
```

Creates a PolicyStore construct that represents an external Policy Store.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-verified-permissions.PolicyStore.fromPolicyStoreAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-verified-permissions.PolicyStore.fromPolicyStoreAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cdklabs/cdk-verified-permissions.PolicyStore.fromPolicyStoreAttributes.parameter.attrs"></a>

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.PolicyStoreAttributes">PolicyStoreAttributes</a>

A `PolicyStoreAttributes` object.

---

##### `fromPolicyStoreId` <a name="fromPolicyStoreId" id="@cdklabs/cdk-verified-permissions.PolicyStore.fromPolicyStoreId"></a>

```typescript
import { PolicyStore } from '@cdklabs/cdk-verified-permissions'

PolicyStore.fromPolicyStoreId(scope: Construct, id: string, policyStoreId: string)
```

Create a PolicyStore construct that represents an external policy store via policy store id.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-verified-permissions.PolicyStore.fromPolicyStoreId.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-verified-permissions.PolicyStore.fromPolicyStoreId.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="@cdklabs/cdk-verified-permissions.PolicyStore.fromPolicyStoreId.parameter.policyStoreId"></a>

- *Type:* string

The PolicyStore's id.

---

##### `schemaFromOpenApiSpec` <a name="schemaFromOpenApiSpec" id="@cdklabs/cdk-verified-permissions.PolicyStore.schemaFromOpenApiSpec"></a>

```typescript
import { PolicyStore } from '@cdklabs/cdk-verified-permissions'

PolicyStore.schemaFromOpenApiSpec(swaggerFilePath: string, groupEntityTypeName?: string)
```

This method generates a schema based on an swagger file.

It makes the same assumptions and decisions
made in the Amazon Verified Permissions console. This feature is built for swagger files generated from an Amazon API Gateway
export. It's possible that some swagger files generated by other tools will not work. In that case, please
file an issue.

###### `swaggerFilePath`<sup>Required</sup> <a name="swaggerFilePath" id="@cdklabs/cdk-verified-permissions.PolicyStore.schemaFromOpenApiSpec.parameter.swaggerFilePath"></a>

- *Type:* string

absolute path to a swagger file in the local directory structure, in json format.

---

###### `groupEntityTypeName`<sup>Optional</sup> <a name="groupEntityTypeName" id="@cdklabs/cdk-verified-permissions.PolicyStore.schemaFromOpenApiSpec.parameter.groupEntityTypeName"></a>

- *Type:* string

optional parameter to specify the group entity type name.

If passed, the schema's User type will have a parent of this type.

---

##### `schemaFromRestApi` <a name="schemaFromRestApi" id="@cdklabs/cdk-verified-permissions.PolicyStore.schemaFromRestApi"></a>

```typescript
import { PolicyStore } from '@cdklabs/cdk-verified-permissions'

PolicyStore.schemaFromRestApi(restApi: RestApi, groupEntityTypeName?: string)
```

This method generates a schema based on an AWS CDK RestApi construct.

It makes the same assumptions
and decisions made in the Amazon Verified Permissions console.

###### `restApi`<sup>Required</sup> <a name="restApi" id="@cdklabs/cdk-verified-permissions.PolicyStore.schemaFromRestApi.parameter.restApi"></a>

- *Type:* aws-cdk-lib.aws_apigateway.RestApi

The RestApi construct instance from which to generate the schema.

---

###### `groupEntityTypeName`<sup>Optional</sup> <a name="groupEntityTypeName" id="@cdklabs/cdk-verified-permissions.PolicyStore.schemaFromRestApi.parameter.groupEntityTypeName"></a>

- *Type:* string

Specifies a group entity type name.

If passed, the schema's User type will have a parent of this type.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.property.policyStoreArn">policyStoreArn</a></code> | <code>string</code> | ARN of the Policy Store. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.property.policyStoreId">policyStoreId</a></code> | <code>string</code> | ID of the Policy Store. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.property.policyStoreName">policyStoreName</a></code> | <code>string</code> | Name of the Policy Store. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.property.validationSettings">validationSettings</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.ValidationSettings">ValidationSettings</a></code> | Validation Settings of the Policy Store. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.property.description">description</a></code> | <code>string</code> | Description of the Policy Store. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStore.property.schema">schema</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.Schema">Schema</a></code> | Schema definition of the Policy Store. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-verified-permissions.PolicyStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-verified-permissions.PolicyStore.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-verified-permissions.PolicyStore.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyStoreArn`<sup>Required</sup> <a name="policyStoreArn" id="@cdklabs/cdk-verified-permissions.PolicyStore.property.policyStoreArn"></a>

```typescript
public readonly policyStoreArn: string;
```

- *Type:* string

ARN of the Policy Store.

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="@cdklabs/cdk-verified-permissions.PolicyStore.property.policyStoreId"></a>

```typescript
public readonly policyStoreId: string;
```

- *Type:* string

ID of the Policy Store.

---

##### `policyStoreName`<sup>Required</sup> <a name="policyStoreName" id="@cdklabs/cdk-verified-permissions.PolicyStore.property.policyStoreName"></a>

```typescript
public readonly policyStoreName: string;
```

- *Type:* string

Name of the Policy Store.

---

##### `validationSettings`<sup>Required</sup> <a name="validationSettings" id="@cdklabs/cdk-verified-permissions.PolicyStore.property.validationSettings"></a>

```typescript
public readonly validationSettings: ValidationSettings;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.ValidationSettings">ValidationSettings</a>

Validation Settings of the Policy Store.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdklabs/cdk-verified-permissions.PolicyStore.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the Policy Store.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdklabs/cdk-verified-permissions.PolicyStore.property.schema"></a>

```typescript
public readonly schema: Schema;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.Schema">Schema</a>

Schema definition of the Policy Store.

---


### PolicyTemplate <a name="PolicyTemplate" id="@cdklabs/cdk-verified-permissions.PolicyTemplate"></a>

- *Implements:* <a href="#@cdklabs/cdk-verified-permissions.IPolicyTemplate">IPolicyTemplate</a>

#### Initializers <a name="Initializers" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.Initializer"></a>

```typescript
import { PolicyTemplate } from '@cdklabs/cdk-verified-permissions'

new PolicyTemplate(scope: Construct, id: string, props: PolicyTemplateProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplateProps">PolicyTemplateProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.PolicyTemplateProps">PolicyTemplateProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.fromFile">fromFile</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateAttributes">fromPolicyTemplateAttributes</a></code> | Creates a PolicyTemplate construct that represents an external Policy Template. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateId">fromPolicyTemplateId</a></code> | Create a PolicyTemplate construct that represents an external policy template via policy template id. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.isConstruct"></a>

```typescript
import { PolicyTemplate } from '@cdklabs/cdk-verified-permissions'

PolicyTemplate.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.isOwnedResource"></a>

```typescript
import { PolicyTemplate } from '@cdklabs/cdk-verified-permissions'

PolicyTemplate.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.isResource"></a>

```typescript
import { PolicyTemplate } from '@cdklabs/cdk-verified-permissions'

PolicyTemplate.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromFile` <a name="fromFile" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.fromFile"></a>

```typescript
import { PolicyTemplate } from '@cdklabs/cdk-verified-permissions'

PolicyTemplate.fromFile(scope: Construct, id: string, props: TemplateFromFileProps)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.fromFile.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.fromFile.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.fromFile.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.TemplateFromFileProps">TemplateFromFileProps</a>

---

##### `fromPolicyTemplateAttributes` <a name="fromPolicyTemplateAttributes" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateAttributes"></a>

```typescript
import { PolicyTemplate } from '@cdklabs/cdk-verified-permissions'

PolicyTemplate.fromPolicyTemplateAttributes(scope: Construct, id: string, attrs: PolicyTemplateAttributes)
```

Creates a PolicyTemplate construct that represents an external Policy Template.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateAttributes.parameter.attrs"></a>

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.PolicyTemplateAttributes">PolicyTemplateAttributes</a>

A `PolicyTemplateAttributes` object.

---

##### `fromPolicyTemplateId` <a name="fromPolicyTemplateId" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateId"></a>

```typescript
import { PolicyTemplate } from '@cdklabs/cdk-verified-permissions'

PolicyTemplate.fromPolicyTemplateId(scope: Construct, id: string, policyTemplateId: string)
```

Create a PolicyTemplate construct that represents an external policy template via policy template id.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateId.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateId.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `policyTemplateId`<sup>Required</sup> <a name="policyTemplateId" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateId.parameter.policyTemplateId"></a>

- *Type:* string

The PolicyTemplate's id.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.property.policyStore">policyStore</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyStore">IPolicyStore</a></code> | The Policy store that contains the template. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.property.policyTemplateId">policyTemplateId</a></code> | <code>string</code> | The ID of the policy template. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.property.statement">statement</a></code> | <code>string</code> | The statement of the policy template. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate.property.description">description</a></code> | <code>string</code> | Description of the policy template. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyStore`<sup>Required</sup> <a name="policyStore" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.property.policyStore"></a>

```typescript
public readonly policyStore: IPolicyStore;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.IPolicyStore">IPolicyStore</a>

The Policy store that contains the template.

---

##### `policyTemplateId`<sup>Required</sup> <a name="policyTemplateId" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.property.policyTemplateId"></a>

```typescript
public readonly policyTemplateId: string;
```

- *Type:* string

The ID of the policy template.

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

The statement of the policy template.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdklabs/cdk-verified-permissions.PolicyTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the policy template.

---


## Structs <a name="Structs" id="Structs"></a>

### AddPolicyOptions <a name="AddPolicyOptions" id="@cdklabs/cdk-verified-permissions.AddPolicyOptions"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.AddPolicyOptions.Initializer"></a>

```typescript
import { AddPolicyOptions } from '@cdklabs/cdk-verified-permissions'

const addPolicyOptions: AddPolicyOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.AddPolicyOptions.property.policyConfiguration">policyConfiguration</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.PolicyDefinitionProperty">PolicyDefinitionProperty</a></code> | The configuration of the Policy. |
| <code><a href="#@cdklabs/cdk-verified-permissions.AddPolicyOptions.property.policyId">policyId</a></code> | <code>string</code> | The id of the Policy. |

---

##### `policyConfiguration`<sup>Required</sup> <a name="policyConfiguration" id="@cdklabs/cdk-verified-permissions.AddPolicyOptions.property.policyConfiguration"></a>

```typescript
public readonly policyConfiguration: PolicyDefinitionProperty;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.PolicyDefinitionProperty">PolicyDefinitionProperty</a>

The configuration of the Policy.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdklabs/cdk-verified-permissions.AddPolicyOptions.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The id of the Policy.

---

### CognitoGroupConfiguration <a name="CognitoGroupConfiguration" id="@cdklabs/cdk-verified-permissions.CognitoGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.CognitoGroupConfiguration.Initializer"></a>

```typescript
import { CognitoGroupConfiguration } from '@cdklabs/cdk-verified-permissions'

const cognitoGroupConfiguration: CognitoGroupConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.CognitoGroupConfiguration.property.groupEntityType">groupEntityType</a></code> | <code>string</code> | The name of the schema entity type that's mapped to the user pool group. |

---

##### `groupEntityType`<sup>Required</sup> <a name="groupEntityType" id="@cdklabs/cdk-verified-permissions.CognitoGroupConfiguration.property.groupEntityType"></a>

```typescript
public readonly groupEntityType: string;
```

- *Type:* string

The name of the schema entity type that's mapped to the user pool group.

---

### CognitoUserPoolConfiguration <a name="CognitoUserPoolConfiguration" id="@cdklabs/cdk-verified-permissions.CognitoUserPoolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.CognitoUserPoolConfiguration.Initializer"></a>

```typescript
import { CognitoUserPoolConfiguration } from '@cdklabs/cdk-verified-permissions'

const cognitoUserPoolConfiguration: CognitoUserPoolConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.CognitoUserPoolConfiguration.property.userPool">userPool</a></code> | <code>aws-cdk-lib.aws_cognito.IUserPool</code> | Cognito User Pool. |
| <code><a href="#@cdklabs/cdk-verified-permissions.CognitoUserPoolConfiguration.property.clientIds">clientIds</a></code> | <code>string[]</code> | Client identifiers. |
| <code><a href="#@cdklabs/cdk-verified-permissions.CognitoUserPoolConfiguration.property.groupConfiguration">groupConfiguration</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.CognitoGroupConfiguration">CognitoGroupConfiguration</a></code> | Cognito Group Configuration. |

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="@cdklabs/cdk-verified-permissions.CognitoUserPoolConfiguration.property.userPool"></a>

```typescript
public readonly userPool: IUserPool;
```

- *Type:* aws-cdk-lib.aws_cognito.IUserPool
- *Default:* no Cognito User Pool

Cognito User Pool.

---

##### `clientIds`<sup>Optional</sup> <a name="clientIds" id="@cdklabs/cdk-verified-permissions.CognitoUserPoolConfiguration.property.clientIds"></a>

```typescript
public readonly clientIds: string[];
```

- *Type:* string[]
- *Default:* empty list.

Client identifiers.

---

##### `groupConfiguration`<sup>Optional</sup> <a name="groupConfiguration" id="@cdklabs/cdk-verified-permissions.CognitoUserPoolConfiguration.property.groupConfiguration"></a>

```typescript
public readonly groupConfiguration: CognitoGroupConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.CognitoGroupConfiguration">CognitoGroupConfiguration</a>
- *Default:* no Cognito Group configuration provided

Cognito Group Configuration.

---

### EntityIdentifierProperty <a name="EntityIdentifierProperty" id="@cdklabs/cdk-verified-permissions.EntityIdentifierProperty"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.EntityIdentifierProperty.Initializer"></a>

```typescript
import { EntityIdentifierProperty } from '@cdklabs/cdk-verified-permissions'

const entityIdentifierProperty: EntityIdentifierProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.EntityIdentifierProperty.property.entityId">entityId</a></code> | <code>string</code> | The identifier of an entity. |
| <code><a href="#@cdklabs/cdk-verified-permissions.EntityIdentifierProperty.property.entityType">entityType</a></code> | <code>string</code> | The type of an entity. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdklabs/cdk-verified-permissions.EntityIdentifierProperty.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

The identifier of an entity.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdklabs/cdk-verified-permissions.EntityIdentifierProperty.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

The type of an entity.

---

### IdentitySourceAttributes <a name="IdentitySourceAttributes" id="@cdklabs/cdk-verified-permissions.IdentitySourceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.IdentitySourceAttributes.Initializer"></a>

```typescript
import { IdentitySourceAttributes } from '@cdklabs/cdk-verified-permissions'

const identitySourceAttributes: IdentitySourceAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySourceAttributes.property.identitySourceId">identitySourceId</a></code> | <code>string</code> | *No description.* |

---

##### `identitySourceId`<sup>Required</sup> <a name="identitySourceId" id="@cdklabs/cdk-verified-permissions.IdentitySourceAttributes.property.identitySourceId"></a>

```typescript
public readonly identitySourceId: string;
```

- *Type:* string

---

### IdentitySourceConfiguration <a name="IdentitySourceConfiguration" id="@cdklabs/cdk-verified-permissions.IdentitySourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.IdentitySourceConfiguration.Initializer"></a>

```typescript
import { IdentitySourceConfiguration } from '@cdklabs/cdk-verified-permissions'

const identitySourceConfiguration: IdentitySourceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySourceConfiguration.property.cognitoUserPoolConfiguration">cognitoUserPoolConfiguration</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.CognitoUserPoolConfiguration">CognitoUserPoolConfiguration</a></code> | Cognito User Pool Configuration. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySourceConfiguration.property.openIdConnectConfiguration">openIdConnectConfiguration</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectConfiguration">OpenIdConnectConfiguration</a></code> | OpenID Connect Idp configuration. |

---

##### `cognitoUserPoolConfiguration`<sup>Optional</sup> <a name="cognitoUserPoolConfiguration" id="@cdklabs/cdk-verified-permissions.IdentitySourceConfiguration.property.cognitoUserPoolConfiguration"></a>

```typescript
public readonly cognitoUserPoolConfiguration: CognitoUserPoolConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.CognitoUserPoolConfiguration">CognitoUserPoolConfiguration</a>
- *Default:* no Cognito User Pool Config

Cognito User Pool Configuration.

---

##### `openIdConnectConfiguration`<sup>Optional</sup> <a name="openIdConnectConfiguration" id="@cdklabs/cdk-verified-permissions.IdentitySourceConfiguration.property.openIdConnectConfiguration"></a>

```typescript
public readonly openIdConnectConfiguration: OpenIdConnectConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectConfiguration">OpenIdConnectConfiguration</a>
- *Default:* no OpenID Provider config

OpenID Connect Idp configuration.

---

### IdentitySourceProps <a name="IdentitySourceProps" id="@cdklabs/cdk-verified-permissions.IdentitySourceProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.IdentitySourceProps.Initializer"></a>

```typescript
import { IdentitySourceProps } from '@cdklabs/cdk-verified-permissions'

const identitySourceProps: IdentitySourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySourceProps.property.configuration">configuration</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySourceConfiguration">IdentitySourceConfiguration</a></code> | Identity Source configuration. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySourceProps.property.policyStore">policyStore</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyStore">IPolicyStore</a></code> | Policy Store in which you want to store this identity source. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IdentitySourceProps.property.principalEntityType">principalEntityType</a></code> | <code>string</code> | Principal entity type. |

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdklabs/cdk-verified-permissions.IdentitySourceProps.property.configuration"></a>

```typescript
public readonly configuration: IdentitySourceConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.IdentitySourceConfiguration">IdentitySourceConfiguration</a>

Identity Source configuration.

---

##### `policyStore`<sup>Required</sup> <a name="policyStore" id="@cdklabs/cdk-verified-permissions.IdentitySourceProps.property.policyStore"></a>

```typescript
public readonly policyStore: IPolicyStore;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.IPolicyStore">IPolicyStore</a>

Policy Store in which you want to store this identity source.

---

##### `principalEntityType`<sup>Optional</sup> <a name="principalEntityType" id="@cdklabs/cdk-verified-permissions.IdentitySourceProps.property.principalEntityType"></a>

```typescript
public readonly principalEntityType: string;
```

- *Type:* string
- *Default:* No principal entity type for the identity source.

Principal entity type.

---

### OpenIdConnectAccessTokenConfiguration <a name="OpenIdConnectAccessTokenConfiguration" id="@cdklabs/cdk-verified-permissions.OpenIdConnectAccessTokenConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.OpenIdConnectAccessTokenConfiguration.Initializer"></a>

```typescript
import { OpenIdConnectAccessTokenConfiguration } from '@cdklabs/cdk-verified-permissions'

const openIdConnectAccessTokenConfiguration: OpenIdConnectAccessTokenConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectAccessTokenConfiguration.property.audiences">audiences</a></code> | <code>string[]</code> | The access token aud claim values that you want to accept in your policy store. |
| <code><a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectAccessTokenConfiguration.property.principalIdClaim">principalIdClaim</a></code> | <code>string</code> | The claim that determines the principal in OIDC access tokens. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdklabs/cdk-verified-permissions.OpenIdConnectAccessTokenConfiguration.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]
- *Default:* no audiences

The access token aud claim values that you want to accept in your policy store.

---

##### `principalIdClaim`<sup>Optional</sup> <a name="principalIdClaim" id="@cdklabs/cdk-verified-permissions.OpenIdConnectAccessTokenConfiguration.property.principalIdClaim"></a>

```typescript
public readonly principalIdClaim: string;
```

- *Type:* string
- *Default:* no principal claim

The claim that determines the principal in OIDC access tokens.

---

### OpenIdConnectConfiguration <a name="OpenIdConnectConfiguration" id="@cdklabs/cdk-verified-permissions.OpenIdConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.OpenIdConnectConfiguration.Initializer"></a>

```typescript
import { OpenIdConnectConfiguration } from '@cdklabs/cdk-verified-permissions'

const openIdConnectConfiguration: OpenIdConnectConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectConfiguration.property.issuer">issuer</a></code> | <code>string</code> | The issuer URL of an OIDC identity provider. |
| <code><a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectConfiguration.property.accessTokenOnly">accessTokenOnly</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectAccessTokenConfiguration">OpenIdConnectAccessTokenConfiguration</a></code> | The configuration for processing access tokens from your OIDC identity provider Exactly one between accessTokenOnly and identityTokenOnly must be defined. |
| <code><a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectConfiguration.property.entityIdPrefix">entityIdPrefix</a></code> | <code>string</code> | A descriptive string that you want to prefix to user entities from your OIDC identity provider. |
| <code><a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectConfiguration.property.groupConfiguration">groupConfiguration</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectGroupConfiguration">OpenIdConnectGroupConfiguration</a></code> | The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to. |
| <code><a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectConfiguration.property.identityTokenOnly">identityTokenOnly</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectIdentityTokenConfiguration">OpenIdConnectIdentityTokenConfiguration</a></code> | The configuration for processing identity (ID) tokens from your OIDC identity provider Exactly one between accessTokenOnly and identityTokenOnly must be defined. |

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdklabs/cdk-verified-permissions.OpenIdConnectConfiguration.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

The issuer URL of an OIDC identity provider.

This URL must have an OIDC discovery endpoint at the path .well-known/openid-configuration

---

##### `accessTokenOnly`<sup>Optional</sup> <a name="accessTokenOnly" id="@cdklabs/cdk-verified-permissions.OpenIdConnectConfiguration.property.accessTokenOnly"></a>

```typescript
public readonly accessTokenOnly: OpenIdConnectAccessTokenConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectAccessTokenConfiguration">OpenIdConnectAccessTokenConfiguration</a>
- *Default:* no Access Token Config

The configuration for processing access tokens from your OIDC identity provider Exactly one between accessTokenOnly and identityTokenOnly must be defined.

---

##### `entityIdPrefix`<sup>Optional</sup> <a name="entityIdPrefix" id="@cdklabs/cdk-verified-permissions.OpenIdConnectConfiguration.property.entityIdPrefix"></a>

```typescript
public readonly entityIdPrefix: string;
```

- *Type:* string
- *Default:* no Entity ID Prefix

A descriptive string that you want to prefix to user entities from your OIDC identity provider.

---

##### `groupConfiguration`<sup>Optional</sup> <a name="groupConfiguration" id="@cdklabs/cdk-verified-permissions.OpenIdConnectConfiguration.property.groupConfiguration"></a>

```typescript
public readonly groupConfiguration: OpenIdConnectGroupConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectGroupConfiguration">OpenIdConnectGroupConfiguration</a>
- *Default:* no Group Config

The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to.

---

##### `identityTokenOnly`<sup>Optional</sup> <a name="identityTokenOnly" id="@cdklabs/cdk-verified-permissions.OpenIdConnectConfiguration.property.identityTokenOnly"></a>

```typescript
public readonly identityTokenOnly: OpenIdConnectIdentityTokenConfiguration;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectIdentityTokenConfiguration">OpenIdConnectIdentityTokenConfiguration</a>
- *Default:* no ID Token Config

The configuration for processing identity (ID) tokens from your OIDC identity provider Exactly one between accessTokenOnly and identityTokenOnly must be defined.

---

### OpenIdConnectGroupConfiguration <a name="OpenIdConnectGroupConfiguration" id="@cdklabs/cdk-verified-permissions.OpenIdConnectGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.OpenIdConnectGroupConfiguration.Initializer"></a>

```typescript
import { OpenIdConnectGroupConfiguration } from '@cdklabs/cdk-verified-permissions'

const openIdConnectGroupConfiguration: OpenIdConnectGroupConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectGroupConfiguration.property.groupClaim">groupClaim</a></code> | <code>string</code> | The token claim that you want Verified Permissions to interpret as group membership. |
| <code><a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectGroupConfiguration.property.groupEntityType">groupEntityType</a></code> | <code>string</code> | The policy store entity type that you want to map your users' group claim to. |

---

##### `groupClaim`<sup>Required</sup> <a name="groupClaim" id="@cdklabs/cdk-verified-permissions.OpenIdConnectGroupConfiguration.property.groupClaim"></a>

```typescript
public readonly groupClaim: string;
```

- *Type:* string

The token claim that you want Verified Permissions to interpret as group membership.

---

##### `groupEntityType`<sup>Required</sup> <a name="groupEntityType" id="@cdklabs/cdk-verified-permissions.OpenIdConnectGroupConfiguration.property.groupEntityType"></a>

```typescript
public readonly groupEntityType: string;
```

- *Type:* string

The policy store entity type that you want to map your users' group claim to.

---

### OpenIdConnectIdentityTokenConfiguration <a name="OpenIdConnectIdentityTokenConfiguration" id="@cdklabs/cdk-verified-permissions.OpenIdConnectIdentityTokenConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.OpenIdConnectIdentityTokenConfiguration.Initializer"></a>

```typescript
import { OpenIdConnectIdentityTokenConfiguration } from '@cdklabs/cdk-verified-permissions'

const openIdConnectIdentityTokenConfiguration: OpenIdConnectIdentityTokenConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectIdentityTokenConfiguration.property.clientIds">clientIds</a></code> | <code>string[]</code> | The ID token audience, or client ID, claim values that you want to accept in your policy store from an OIDC identity provider. |
| <code><a href="#@cdklabs/cdk-verified-permissions.OpenIdConnectIdentityTokenConfiguration.property.principalIdClaim">principalIdClaim</a></code> | <code>string</code> | The claim that determines the principal in OIDC access tokens. |

---

##### `clientIds`<sup>Optional</sup> <a name="clientIds" id="@cdklabs/cdk-verified-permissions.OpenIdConnectIdentityTokenConfiguration.property.clientIds"></a>

```typescript
public readonly clientIds: string[];
```

- *Type:* string[]
- *Default:* no client IDs

The ID token audience, or client ID, claim values that you want to accept in your policy store from an OIDC identity provider.

---

##### `principalIdClaim`<sup>Optional</sup> <a name="principalIdClaim" id="@cdklabs/cdk-verified-permissions.OpenIdConnectIdentityTokenConfiguration.property.principalIdClaim"></a>

```typescript
public readonly principalIdClaim: string;
```

- *Type:* string
- *Default:* no principal claim

The claim that determines the principal in OIDC access tokens.

---

### PolicyAttributes <a name="PolicyAttributes" id="@cdklabs/cdk-verified-permissions.PolicyAttributes"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.PolicyAttributes.Initializer"></a>

```typescript
import { PolicyAttributes } from '@cdklabs/cdk-verified-permissions'

const policyAttributes: PolicyAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyAttributes.property.policyId">policyId</a></code> | <code>string</code> | The unique ID of the new or updated policy. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyAttributes.property.policyType">policyType</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.PolicyType">PolicyType</a></code> | The type of the policy. |

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdklabs/cdk-verified-permissions.PolicyAttributes.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The unique ID of the new or updated policy.

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@cdklabs/cdk-verified-permissions.PolicyAttributes.property.policyType"></a>

```typescript
public readonly policyType: PolicyType;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.PolicyType">PolicyType</a>
- *Default:* Static

The type of the policy.

This is one of the following values: Static or TemplateLinked

---

### PolicyDefinitionProperty <a name="PolicyDefinitionProperty" id="@cdklabs/cdk-verified-permissions.PolicyDefinitionProperty"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.PolicyDefinitionProperty.Initializer"></a>

```typescript
import { PolicyDefinitionProperty } from '@cdklabs/cdk-verified-permissions'

const policyDefinitionProperty: PolicyDefinitionProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyDefinitionProperty.property.static">static</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.StaticPolicyDefinitionProperty">StaticPolicyDefinitionProperty</a></code> | A structure that describes a static policy. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyDefinitionProperty.property.templateLinked">templateLinked</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty">TemplateLinkedPolicyDefinitionProperty</a></code> | A structure that describes a policy that was instantiated from a template. |

---

##### `static`<sup>Optional</sup> <a name="static" id="@cdklabs/cdk-verified-permissions.PolicyDefinitionProperty.property.static"></a>

```typescript
public readonly static: StaticPolicyDefinitionProperty;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.StaticPolicyDefinitionProperty">StaticPolicyDefinitionProperty</a>
- *Default:* Static must be set for policies created from a static definition. Otherwise, use template linked definitions.

A structure that describes a static policy.

---

##### `templateLinked`<sup>Optional</sup> <a name="templateLinked" id="@cdklabs/cdk-verified-permissions.PolicyDefinitionProperty.property.templateLinked"></a>

```typescript
public readonly templateLinked: TemplateLinkedPolicyDefinitionProperty;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty">TemplateLinkedPolicyDefinitionProperty</a>
- *Default:* Template linked must be set for policies created from a static definition. Otherwise, use static definitions.

A structure that describes a policy that was instantiated from a template.

---

### PolicyProps <a name="PolicyProps" id="@cdklabs/cdk-verified-permissions.PolicyProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.PolicyProps.Initializer"></a>

```typescript
import { PolicyProps } from '@cdklabs/cdk-verified-permissions'

const policyProps: PolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyProps.property.definition">definition</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.PolicyDefinitionProperty">PolicyDefinitionProperty</a></code> | Specifies the policy type and content to use for the new or updated policy. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyProps.property.policyStore">policyStore</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyStore">IPolicyStore</a></code> | The policy store that contains the policy. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdklabs/cdk-verified-permissions.PolicyProps.property.definition"></a>

```typescript
public readonly definition: PolicyDefinitionProperty;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.PolicyDefinitionProperty">PolicyDefinitionProperty</a>

Specifies the policy type and content to use for the new or updated policy.

The definition structure must include either a Static or a TemplateLinked element.

---

##### `policyStore`<sup>Required</sup> <a name="policyStore" id="@cdklabs/cdk-verified-permissions.PolicyProps.property.policyStore"></a>

```typescript
public readonly policyStore: IPolicyStore;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.IPolicyStore">IPolicyStore</a>

The policy store that contains the policy.

---

### PolicyStoreAttributes <a name="PolicyStoreAttributes" id="@cdklabs/cdk-verified-permissions.PolicyStoreAttributes"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.PolicyStoreAttributes.Initializer"></a>

```typescript
import { PolicyStoreAttributes } from '@cdklabs/cdk-verified-permissions'

const policyStoreAttributes: PolicyStoreAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStoreAttributes.property.policyStoreArn">policyStoreArn</a></code> | <code>string</code> | The ARN of the Amazon Verified Permissions Policy Store. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStoreAttributes.property.policyStoreId">policyStoreId</a></code> | <code>string</code> | The id of the Amazon Verified Permissions PolicyStore. |

---

##### `policyStoreArn`<sup>Optional</sup> <a name="policyStoreArn" id="@cdklabs/cdk-verified-permissions.PolicyStoreAttributes.property.policyStoreArn"></a>

```typescript
public readonly policyStoreArn: string;
```

- *Type:* string
- *Default:* no PolicyStore arn

The ARN of the Amazon Verified Permissions Policy Store.

One of this, or `policyStoreId`, is required.

---

##### `policyStoreId`<sup>Optional</sup> <a name="policyStoreId" id="@cdklabs/cdk-verified-permissions.PolicyStoreAttributes.property.policyStoreId"></a>

```typescript
public readonly policyStoreId: string;
```

- *Type:* string
- *Default:* no PolicyStore id

The id of the Amazon Verified Permissions PolicyStore.

One of this, or `policyStoreArn`, is required.

---

### PolicyStoreProps <a name="PolicyStoreProps" id="@cdklabs/cdk-verified-permissions.PolicyStoreProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.PolicyStoreProps.Initializer"></a>

```typescript
import { PolicyStoreProps } from '@cdklabs/cdk-verified-permissions'

const policyStoreProps: PolicyStoreProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStoreProps.property.validationSettings">validationSettings</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.ValidationSettings">ValidationSettings</a></code> | The policy store's validation settings. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStoreProps.property.description">description</a></code> | <code>string</code> | The policy store's description. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyStoreProps.property.schema">schema</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.Schema">Schema</a></code> | This attribute is not required from an API point of view. |

---

##### `validationSettings`<sup>Required</sup> <a name="validationSettings" id="@cdklabs/cdk-verified-permissions.PolicyStoreProps.property.validationSettings"></a>

```typescript
public readonly validationSettings: ValidationSettings;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.ValidationSettings">ValidationSettings</a>
- *Default:* If not provided, the Policy store will be created with ValidationSettingsMode = "OFF"

The policy store's validation settings.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdklabs/cdk-verified-permissions.PolicyStoreProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

The policy store's description.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdklabs/cdk-verified-permissions.PolicyStoreProps.property.schema"></a>

```typescript
public readonly schema: Schema;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.Schema">Schema</a>
- *Default:* No schema.

This attribute is not required from an API point of view.

It represents the schema (in Cedar) to be applied to the PolicyStore.

---

### PolicyTemplateAttributes <a name="PolicyTemplateAttributes" id="@cdklabs/cdk-verified-permissions.PolicyTemplateAttributes"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.PolicyTemplateAttributes.Initializer"></a>

```typescript
import { PolicyTemplateAttributes } from '@cdklabs/cdk-verified-permissions'

const policyTemplateAttributes: PolicyTemplateAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplateAttributes.property.policyTemplateId">policyTemplateId</a></code> | <code>string</code> | The id of the Amazon Verified Permissions PolicyTemplate. |

---

##### `policyTemplateId`<sup>Required</sup> <a name="policyTemplateId" id="@cdklabs/cdk-verified-permissions.PolicyTemplateAttributes.property.policyTemplateId"></a>

```typescript
public readonly policyTemplateId: string;
```

- *Type:* string

The id of the Amazon Verified Permissions PolicyTemplate.

---

### PolicyTemplateProps <a name="PolicyTemplateProps" id="@cdklabs/cdk-verified-permissions.PolicyTemplateProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.PolicyTemplateProps.Initializer"></a>

```typescript
import { PolicyTemplateProps } from '@cdklabs/cdk-verified-permissions'

const policyTemplateProps: PolicyTemplateProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplateProps.property.policyStore">policyStore</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyStore">IPolicyStore</a></code> | The policy store that contains the template. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplateProps.property.statement">statement</a></code> | <code>string</code> | Specifies the content that you want to use for the new policy template, written in the Cedar policy language. |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyTemplateProps.property.description">description</a></code> | <code>string</code> | The description to attach to the new or updated policy template. |

---

##### `policyStore`<sup>Required</sup> <a name="policyStore" id="@cdklabs/cdk-verified-permissions.PolicyTemplateProps.property.policyStore"></a>

```typescript
public readonly policyStore: IPolicyStore;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.IPolicyStore">IPolicyStore</a>
- *Default:* The policy store to attach the new or updated policy template.

The policy store that contains the template.

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdklabs/cdk-verified-permissions.PolicyTemplateProps.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string
- *Default:* The statement to attach to the new or updated policy template.

Specifies the content that you want to use for the new policy template, written in the Cedar policy language.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdklabs/cdk-verified-permissions.PolicyTemplateProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

The description to attach to the new or updated policy template.

---

### Schema <a name="Schema" id="@cdklabs/cdk-verified-permissions.Schema"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.Schema.Initializer"></a>

```typescript
import { Schema } from '@cdklabs/cdk-verified-permissions'

const schema: Schema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.Schema.property.cedarJson">cedarJson</a></code> | <code>string</code> | *No description.* |

---

##### `cedarJson`<sup>Required</sup> <a name="cedarJson" id="@cdklabs/cdk-verified-permissions.Schema.property.cedarJson"></a>

```typescript
public readonly cedarJson: string;
```

- *Type:* string

---

### StaticPolicyDefinitionProperty <a name="StaticPolicyDefinitionProperty" id="@cdklabs/cdk-verified-permissions.StaticPolicyDefinitionProperty"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.StaticPolicyDefinitionProperty.Initializer"></a>

```typescript
import { StaticPolicyDefinitionProperty } from '@cdklabs/cdk-verified-permissions'

const staticPolicyDefinitionProperty: StaticPolicyDefinitionProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.StaticPolicyDefinitionProperty.property.statement">statement</a></code> | <code>string</code> | The policy content of the static policy, written in the Cedar policy language. |
| <code><a href="#@cdklabs/cdk-verified-permissions.StaticPolicyDefinitionProperty.property.description">description</a></code> | <code>string</code> | The description of the static policy. |

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdklabs/cdk-verified-permissions.StaticPolicyDefinitionProperty.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

The policy content of the static policy, written in the Cedar policy language.

You can specify a description of the policy
directly inside the policy statement, using the Cedar annotation '@cdkDescription'

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdklabs/cdk-verified-permissions.StaticPolicyDefinitionProperty.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* Empty description.

The description of the static policy.

If this is set, it has always precedence over description defined in policy statement
through '@cdkDescription' annotation

---

### StaticPolicyFromFileProps <a name="StaticPolicyFromFileProps" id="@cdklabs/cdk-verified-permissions.StaticPolicyFromFileProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.StaticPolicyFromFileProps.Initializer"></a>

```typescript
import { StaticPolicyFromFileProps } from '@cdklabs/cdk-verified-permissions'

const staticPolicyFromFileProps: StaticPolicyFromFileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.StaticPolicyFromFileProps.property.path">path</a></code> | <code>string</code> | The path to the file to be read which contains a single cedar statement representing a policy. |
| <code><a href="#@cdklabs/cdk-verified-permissions.StaticPolicyFromFileProps.property.policyStore">policyStore</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyStore">IPolicyStore</a></code> | The policy store that the policy will be created under. |
| <code><a href="#@cdklabs/cdk-verified-permissions.StaticPolicyFromFileProps.property.description">description</a></code> | <code>string</code> | The description of the static policy. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdklabs/cdk-verified-permissions.StaticPolicyFromFileProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to the file to be read which contains a single cedar statement representing a policy.

---

##### `policyStore`<sup>Required</sup> <a name="policyStore" id="@cdklabs/cdk-verified-permissions.StaticPolicyFromFileProps.property.policyStore"></a>

```typescript
public readonly policyStore: IPolicyStore;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.IPolicyStore">IPolicyStore</a>

The policy store that the policy will be created under.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdklabs/cdk-verified-permissions.StaticPolicyFromFileProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the static policy.

---

### TemplateFromFileProps <a name="TemplateFromFileProps" id="@cdklabs/cdk-verified-permissions.TemplateFromFileProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.TemplateFromFileProps.Initializer"></a>

```typescript
import { TemplateFromFileProps } from '@cdklabs/cdk-verified-permissions'

const templateFromFileProps: TemplateFromFileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.TemplateFromFileProps.property.path">path</a></code> | <code>string</code> | The path to the file to be read which contains a single cedar statement representing a policy template. |
| <code><a href="#@cdklabs/cdk-verified-permissions.TemplateFromFileProps.property.policyStore">policyStore</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyStore">IPolicyStore</a></code> | The policy store that the policy template will be created under. |
| <code><a href="#@cdklabs/cdk-verified-permissions.TemplateFromFileProps.property.description">description</a></code> | <code>string</code> | The description of the plicy template. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdklabs/cdk-verified-permissions.TemplateFromFileProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to the file to be read which contains a single cedar statement representing a policy template.

---

##### `policyStore`<sup>Required</sup> <a name="policyStore" id="@cdklabs/cdk-verified-permissions.TemplateFromFileProps.property.policyStore"></a>

```typescript
public readonly policyStore: IPolicyStore;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.IPolicyStore">IPolicyStore</a>

The policy store that the policy template will be created under.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdklabs/cdk-verified-permissions.TemplateFromFileProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the plicy template.

---

### TemplateLinkedPolicyDefinitionProperty <a name="TemplateLinkedPolicyDefinitionProperty" id="@cdklabs/cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty.Initializer"></a>

```typescript
import { TemplateLinkedPolicyDefinitionProperty } from '@cdklabs/cdk-verified-permissions'

const templateLinkedPolicyDefinitionProperty: TemplateLinkedPolicyDefinitionProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty.property.policyTemplate">policyTemplate</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyTemplate">IPolicyTemplate</a></code> | The unique identifier of the policy template used to create this policy. |
| <code><a href="#@cdklabs/cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty.property.principal">principal</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.EntityIdentifierProperty">EntityIdentifierProperty</a></code> | The principal associated with this template-linked policy. |
| <code><a href="#@cdklabs/cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty.property.resource">resource</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.EntityIdentifierProperty">EntityIdentifierProperty</a></code> | The resource associated with this template-linked policy. |

---

##### `policyTemplate`<sup>Required</sup> <a name="policyTemplate" id="@cdklabs/cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty.property.policyTemplate"></a>

```typescript
public readonly policyTemplate: IPolicyTemplate;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.IPolicyTemplate">IPolicyTemplate</a>

The unique identifier of the policy template used to create this policy.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdklabs/cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty.property.principal"></a>

```typescript
public readonly principal: EntityIdentifierProperty;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.EntityIdentifierProperty">EntityIdentifierProperty</a>
- *Default:* No Principal. It is set to unspecified.

The principal associated with this template-linked policy.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdklabs/cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty.property.resource"></a>

```typescript
public readonly resource: EntityIdentifierProperty;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.EntityIdentifierProperty">EntityIdentifierProperty</a>
- *Default:* No Resource. It is set to unspecified.

The resource associated with this template-linked policy.

---

### ValidationSettings <a name="ValidationSettings" id="@cdklabs/cdk-verified-permissions.ValidationSettings"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-verified-permissions.ValidationSettings.Initializer"></a>

```typescript
import { ValidationSettings } from '@cdklabs/cdk-verified-permissions'

const validationSettings: ValidationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.ValidationSettings.property.mode">mode</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.ValidationSettingsMode">ValidationSettingsMode</a></code> | *No description.* |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdklabs/cdk-verified-permissions.ValidationSettings.property.mode"></a>

```typescript
public readonly mode: ValidationSettingsMode;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.ValidationSettingsMode">ValidationSettingsMode</a>

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IIdentitySource <a name="IIdentitySource" id="@cdklabs/cdk-verified-permissions.IIdentitySource"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@cdklabs/cdk-verified-permissions.IdentitySource">IdentitySource</a>, <a href="#@cdklabs/cdk-verified-permissions.IIdentitySource">IIdentitySource</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.IIdentitySource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IIdentitySource.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IIdentitySource.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IIdentitySource.property.identitySourceId">identitySourceId</a></code> | <code>string</code> | Identity Source identifier. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-verified-permissions.IIdentitySource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-verified-permissions.IIdentitySource.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-verified-permissions.IIdentitySource.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `identitySourceId`<sup>Required</sup> <a name="identitySourceId" id="@cdklabs/cdk-verified-permissions.IIdentitySource.property.identitySourceId"></a>

```typescript
public readonly identitySourceId: string;
```

- *Type:* string

Identity Source identifier.

---

### IPolicy <a name="IPolicy" id="@cdklabs/cdk-verified-permissions.IPolicy"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@cdklabs/cdk-verified-permissions.Policy">Policy</a>, <a href="#@cdklabs/cdk-verified-permissions.IPolicy">IPolicy</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicy.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicy.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicy.property.policyId">policyId</a></code> | <code>string</code> | The unique ID of the new or updated policy. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicy.property.policyType">policyType</a></code> | <code><a href="#@cdklabs/cdk-verified-permissions.PolicyType">PolicyType</a></code> | The type of the policy. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-verified-permissions.IPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-verified-permissions.IPolicy.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-verified-permissions.IPolicy.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdklabs/cdk-verified-permissions.IPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The unique ID of the new or updated policy.

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdklabs/cdk-verified-permissions.IPolicy.property.policyType"></a>

```typescript
public readonly policyType: PolicyType;
```

- *Type:* <a href="#@cdklabs/cdk-verified-permissions.PolicyType">PolicyType</a>

The type of the policy.

This is one of the following values: Static or TemplateLinked.

---

### IPolicyStore <a name="IPolicyStore" id="@cdklabs/cdk-verified-permissions.IPolicyStore"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@cdklabs/cdk-verified-permissions.PolicyStore">PolicyStore</a>, <a href="#@cdklabs/cdk-verified-permissions.IPolicyStore">IPolicyStore</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyStore.grant">grant</a></code> | Adds an IAM policy statement associated with this policy store to an IAM principal's policy. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyStore.grantAuth">grantAuth</a></code> | Permits an IAM principal all auth operations on the policy store: IsAuthorized, IsAuthorizedWithToken. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyStore.grantRead">grantRead</a></code> | Permits an IAM principal all read operations on the policy store: GetIdentitySource, GetPolicy, GetPolicyStore, GetPolicyTemplate, GetSchema, ListIdentitySources, ListPolicies, ListPolicyTemplates. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyStore.grantWrite">grantWrite</a></code> | Permits an IAM principal all write & read operations on the policy store: CreateIdentitySource, CreatePolicy,CreatePolicyTemplate, DeleteIdentitySource, DeletePolicy, DeletePolicyTemplate, PutSchema, UpdateIdentitySource, UpdatePolicy, UpdatePolicyTemplate. |

---

##### `grant` <a name="grant" id="@cdklabs/cdk-verified-permissions.IPolicyStore.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: ...string[]): Grant
```

Adds an IAM policy statement associated with this policy store to an IAM principal's policy.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cdklabs/cdk-verified-permissions.IPolicyStore.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal (no-op if undefined).

---

###### `actions`<sup>Required</sup> <a name="actions" id="@cdklabs/cdk-verified-permissions.IPolicyStore.grant.parameter.actions"></a>

- *Type:* ...string[]

The set of actions to allow (i.e. "verifiedpermissions:IsAuthorized", "verifiedpermissions:ListPolicies", ...).

---

##### `grantAuth` <a name="grantAuth" id="@cdklabs/cdk-verified-permissions.IPolicyStore.grantAuth"></a>

```typescript
public grantAuth(grantee: IGrantable): Grant
```

Permits an IAM principal all auth operations on the policy store: IsAuthorized, IsAuthorizedWithToken.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cdklabs/cdk-verified-permissions.IPolicyStore.grantAuth.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantRead` <a name="grantRead" id="@cdklabs/cdk-verified-permissions.IPolicyStore.grantRead"></a>

```typescript
public grantRead(grantee: IGrantable): Grant
```

Permits an IAM principal all read operations on the policy store: GetIdentitySource, GetPolicy, GetPolicyStore, GetPolicyTemplate, GetSchema, ListIdentitySources, ListPolicies, ListPolicyTemplates.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cdklabs/cdk-verified-permissions.IPolicyStore.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantWrite` <a name="grantWrite" id="@cdklabs/cdk-verified-permissions.IPolicyStore.grantWrite"></a>

```typescript
public grantWrite(grantee: IGrantable): Grant
```

Permits an IAM principal all write & read operations on the policy store: CreateIdentitySource, CreatePolicy,CreatePolicyTemplate, DeleteIdentitySource, DeletePolicy, DeletePolicyTemplate, PutSchema, UpdateIdentitySource, UpdatePolicy, UpdatePolicyTemplate.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cdklabs/cdk-verified-permissions.IPolicyStore.grantWrite.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyStore.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyStore.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyStore.property.policyStoreArn">policyStoreArn</a></code> | <code>string</code> | ARN of the Policy Store. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyStore.property.policyStoreId">policyStoreId</a></code> | <code>string</code> | ID of the Policy Store. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-verified-permissions.IPolicyStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-verified-permissions.IPolicyStore.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-verified-permissions.IPolicyStore.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyStoreArn`<sup>Required</sup> <a name="policyStoreArn" id="@cdklabs/cdk-verified-permissions.IPolicyStore.property.policyStoreArn"></a>

```typescript
public readonly policyStoreArn: string;
```

- *Type:* string

ARN of the Policy Store.

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="@cdklabs/cdk-verified-permissions.IPolicyStore.property.policyStoreId"></a>

```typescript
public readonly policyStoreId: string;
```

- *Type:* string

ID of the Policy Store.

---

### IPolicyTemplate <a name="IPolicyTemplate" id="@cdklabs/cdk-verified-permissions.IPolicyTemplate"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@cdklabs/cdk-verified-permissions.PolicyTemplate">PolicyTemplate</a>, <a href="#@cdklabs/cdk-verified-permissions.IPolicyTemplate">IPolicyTemplate</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyTemplate.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyTemplate.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-verified-permissions.IPolicyTemplate.property.policyTemplateId">policyTemplateId</a></code> | <code>string</code> | The ID of the policy template. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-verified-permissions.IPolicyTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-verified-permissions.IPolicyTemplate.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-verified-permissions.IPolicyTemplate.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyTemplateId`<sup>Required</sup> <a name="policyTemplateId" id="@cdklabs/cdk-verified-permissions.IPolicyTemplate.property.policyTemplateId"></a>

```typescript
public readonly policyTemplateId: string;
```

- *Type:* string

The ID of the policy template.

---

## Enums <a name="Enums" id="Enums"></a>

### PolicyType <a name="PolicyType" id="@cdklabs/cdk-verified-permissions.PolicyType"></a>

PolicyType options.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyType.STATIC">STATIC</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.PolicyType.TEMPLATELINKED">TEMPLATELINKED</a></code> | *No description.* |

---

##### `STATIC` <a name="STATIC" id="@cdklabs/cdk-verified-permissions.PolicyType.STATIC"></a>

---


##### `TEMPLATELINKED` <a name="TEMPLATELINKED" id="@cdklabs/cdk-verified-permissions.PolicyType.TEMPLATELINKED"></a>

---


### ValidationSettingsMode <a name="ValidationSettingsMode" id="@cdklabs/cdk-verified-permissions.ValidationSettingsMode"></a>

Validation Settings mode, according to the Cloudformation PolicyStore resource.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-verified-permissions.ValidationSettingsMode.OFF">OFF</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-verified-permissions.ValidationSettingsMode.STRICT">STRICT</a></code> | *No description.* |

---

##### `OFF` <a name="OFF" id="@cdklabs/cdk-verified-permissions.ValidationSettingsMode.OFF"></a>

---


##### `STRICT` <a name="STRICT" id="@cdklabs/cdk-verified-permissions.ValidationSettingsMode.STRICT"></a>

---

