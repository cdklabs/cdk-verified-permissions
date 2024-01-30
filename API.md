# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentitySource <a name="IdentitySource" id="cdk-verified-permissions.IdentitySource"></a>

- *Implements:* <a href="#cdk-verified-permissions.IIdentitySource">IIdentitySource</a>

#### Initializers <a name="Initializers" id="cdk-verified-permissions.IdentitySource.Initializer"></a>

```typescript
import { IdentitySource } from 'cdk-verified-permissions'

new IdentitySource(scope: Construct, id: string, props: IdentitySourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.IdentitySource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-verified-permissions.IdentitySource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-verified-permissions.IdentitySource.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-verified-permissions.IdentitySourceProps">IdentitySourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-verified-permissions.IdentitySource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-verified-permissions.IdentitySource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-verified-permissions.IdentitySource.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-verified-permissions.IdentitySourceProps">IdentitySourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-verified-permissions.IdentitySource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-verified-permissions.IdentitySource.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-verified-permissions.IdentitySource.addUserPoolClient">addUserPoolClient</a></code> | Add a User Pool Client. |

---

##### `toString` <a name="toString" id="cdk-verified-permissions.IdentitySource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-verified-permissions.IdentitySource.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-verified-permissions.IdentitySource.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addUserPoolClient` <a name="addUserPoolClient" id="cdk-verified-permissions.IdentitySource.addUserPoolClient"></a>

```typescript
public addUserPoolClient(userPoolClient: IUserPoolClient): void
```

Add a User Pool Client.

###### `userPoolClient`<sup>Required</sup> <a name="userPoolClient" id="cdk-verified-permissions.IdentitySource.addUserPoolClient.parameter.userPoolClient"></a>

- *Type:* aws-cdk-lib.aws_cognito.IUserPoolClient

The User Pool Client Construct.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-verified-permissions.IdentitySource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-verified-permissions.IdentitySource.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-verified-permissions.IdentitySource.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-verified-permissions.IdentitySource.fromIdentitySourceArn">fromIdentitySourceArn</a></code> | Create an Identity Source from its ARN. |
| <code><a href="#cdk-verified-permissions.IdentitySource.fromIdentitySourceAttributes">fromIdentitySourceAttributes</a></code> | Creates Identity Source from its attributes. |
| <code><a href="#cdk-verified-permissions.IdentitySource.fromIdentitySourceId">fromIdentitySourceId</a></code> | Create an Identity Source from its identifier. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-verified-permissions.IdentitySource.isConstruct"></a>

```typescript
import { IdentitySource } from 'cdk-verified-permissions'

IdentitySource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-verified-permissions.IdentitySource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-verified-permissions.IdentitySource.isOwnedResource"></a>

```typescript
import { IdentitySource } from 'cdk-verified-permissions'

IdentitySource.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-verified-permissions.IdentitySource.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-verified-permissions.IdentitySource.isResource"></a>

```typescript
import { IdentitySource } from 'cdk-verified-permissions'

IdentitySource.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-verified-permissions.IdentitySource.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromIdentitySourceArn` <a name="fromIdentitySourceArn" id="cdk-verified-permissions.IdentitySource.fromIdentitySourceArn"></a>

```typescript
import { IdentitySource } from 'cdk-verified-permissions'

IdentitySource.fromIdentitySourceArn(scope: Construct, id: string, identitySourceArn: string)
```

Create an Identity Source from its ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-verified-permissions.IdentitySource.fromIdentitySourceArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-verified-permissions.IdentitySource.fromIdentitySourceArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `identitySourceArn`<sup>Required</sup> <a name="identitySourceArn" id="cdk-verified-permissions.IdentitySource.fromIdentitySourceArn.parameter.identitySourceArn"></a>

- *Type:* string

The Identity Source ARN.

---

##### `fromIdentitySourceAttributes` <a name="fromIdentitySourceAttributes" id="cdk-verified-permissions.IdentitySource.fromIdentitySourceAttributes"></a>

```typescript
import { IdentitySource } from 'cdk-verified-permissions'

IdentitySource.fromIdentitySourceAttributes(scope: Construct, id: string, attrs: IdentitySourceAttributes)
```

Creates Identity Source from its attributes.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-verified-permissions.IdentitySource.fromIdentitySourceAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-verified-permissions.IdentitySource.fromIdentitySourceAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="cdk-verified-permissions.IdentitySource.fromIdentitySourceAttributes.parameter.attrs"></a>

- *Type:* <a href="#cdk-verified-permissions.IdentitySourceAttributes">IdentitySourceAttributes</a>

An `IdentitySourceAttributes` object.

---

##### `fromIdentitySourceId` <a name="fromIdentitySourceId" id="cdk-verified-permissions.IdentitySource.fromIdentitySourceId"></a>

```typescript
import { IdentitySource } from 'cdk-verified-permissions'

IdentitySource.fromIdentitySourceId(scope: Construct, id: string, identitySourceId: string)
```

Create an Identity Source from its identifier.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-verified-permissions.IdentitySource.fromIdentitySourceId.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-verified-permissions.IdentitySource.fromIdentitySourceId.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `identitySourceId`<sup>Required</sup> <a name="identitySourceId" id="cdk-verified-permissions.IdentitySource.fromIdentitySourceId.parameter.identitySourceId"></a>

- *Type:* string

The Identity Source identifier.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.IdentitySource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-verified-permissions.IdentitySource.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-verified-permissions.IdentitySource.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-verified-permissions.IdentitySource.property.clientIds">clientIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-verified-permissions.IdentitySource.property.discoveryUrl">discoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-verified-permissions.IdentitySource.property.identitySourceArn">identitySourceArn</a></code> | <code>string</code> | Identity Source ARN. |
| <code><a href="#cdk-verified-permissions.IdentitySource.property.identitySourceId">identitySourceId</a></code> | <code>string</code> | Identity Source identifier. |
| <code><a href="#cdk-verified-permissions.IdentitySource.property.openIdIssuer">openIdIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-verified-permissions.IdentitySource.property.userPoolArn">userPoolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-verified-permissions.IdentitySource.property.policyStore">policyStore</a></code> | <code><a href="#cdk-verified-permissions.IPolicyStore">IPolicyStore</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-verified-permissions.IdentitySource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-verified-permissions.IdentitySource.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-verified-permissions.IdentitySource.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `clientIds`<sup>Required</sup> <a name="clientIds" id="cdk-verified-permissions.IdentitySource.property.clientIds"></a>

```typescript
public readonly clientIds: string[];
```

- *Type:* string[]

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="cdk-verified-permissions.IdentitySource.property.discoveryUrl"></a>

```typescript
public readonly discoveryUrl: string;
```

- *Type:* string

---

##### `identitySourceArn`<sup>Required</sup> <a name="identitySourceArn" id="cdk-verified-permissions.IdentitySource.property.identitySourceArn"></a>

```typescript
public readonly identitySourceArn: string;
```

- *Type:* string

Identity Source ARN.

---

##### `identitySourceId`<sup>Required</sup> <a name="identitySourceId" id="cdk-verified-permissions.IdentitySource.property.identitySourceId"></a>

```typescript
public readonly identitySourceId: string;
```

- *Type:* string

Identity Source identifier.

---

##### `openIdIssuer`<sup>Required</sup> <a name="openIdIssuer" id="cdk-verified-permissions.IdentitySource.property.openIdIssuer"></a>

```typescript
public readonly openIdIssuer: string;
```

- *Type:* string

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="cdk-verified-permissions.IdentitySource.property.userPoolArn"></a>

```typescript
public readonly userPoolArn: string;
```

- *Type:* string

---

##### `policyStore`<sup>Optional</sup> <a name="policyStore" id="cdk-verified-permissions.IdentitySource.property.policyStore"></a>

```typescript
public readonly policyStore: IPolicyStore;
```

- *Type:* <a href="#cdk-verified-permissions.IPolicyStore">IPolicyStore</a>

---


### Policy <a name="Policy" id="cdk-verified-permissions.Policy"></a>

- *Implements:* <a href="#cdk-verified-permissions.IPolicy">IPolicy</a>

#### Initializers <a name="Initializers" id="cdk-verified-permissions.Policy.Initializer"></a>

```typescript
import { Policy } from 'cdk-verified-permissions'

new Policy(scope: Construct, id: string, props: PolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.Policy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-verified-permissions.Policy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-verified-permissions.Policy.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-verified-permissions.PolicyProps">PolicyProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-verified-permissions.Policy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-verified-permissions.Policy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-verified-permissions.Policy.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-verified-permissions.PolicyProps">PolicyProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-verified-permissions.Policy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-verified-permissions.Policy.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-verified-permissions.Policy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-verified-permissions.Policy.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-verified-permissions.Policy.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-verified-permissions.Policy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-verified-permissions.Policy.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-verified-permissions.Policy.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-verified-permissions.Policy.fromPolicyAttributes">fromPolicyAttributes</a></code> | Import a Policy construct from attributes. |
| <code><a href="#cdk-verified-permissions.Policy.fromPolicyId">fromPolicyId</a></code> | Import a policy into the CDK using its id. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-verified-permissions.Policy.isConstruct"></a>

```typescript
import { Policy } from 'cdk-verified-permissions'

Policy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-verified-permissions.Policy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-verified-permissions.Policy.isOwnedResource"></a>

```typescript
import { Policy } from 'cdk-verified-permissions'

Policy.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-verified-permissions.Policy.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-verified-permissions.Policy.isResource"></a>

```typescript
import { Policy } from 'cdk-verified-permissions'

Policy.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-verified-permissions.Policy.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromPolicyAttributes` <a name="fromPolicyAttributes" id="cdk-verified-permissions.Policy.fromPolicyAttributes"></a>

```typescript
import { Policy } from 'cdk-verified-permissions'

Policy.fromPolicyAttributes(scope: Construct, id: string, attrs: PolicyAttributes)
```

Import a Policy construct from attributes.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-verified-permissions.Policy.fromPolicyAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-verified-permissions.Policy.fromPolicyAttributes.parameter.id"></a>

- *Type:* string

The construct id.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="cdk-verified-permissions.Policy.fromPolicyAttributes.parameter.attrs"></a>

- *Type:* <a href="#cdk-verified-permissions.PolicyAttributes">PolicyAttributes</a>

A `PolicyAttributes` object.

---

##### `fromPolicyId` <a name="fromPolicyId" id="cdk-verified-permissions.Policy.fromPolicyId"></a>

```typescript
import { Policy } from 'cdk-verified-permissions'

Policy.fromPolicyId(scope: Construct, id: string, policyId: string)
```

Import a policy into the CDK using its id.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-verified-permissions.Policy.fromPolicyId.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-verified-permissions.Policy.fromPolicyId.parameter.id"></a>

- *Type:* string

The construct id.

---

###### `policyId`<sup>Required</sup> <a name="policyId" id="cdk-verified-permissions.Policy.fromPolicyId.parameter.policyId"></a>

- *Type:* string

The policy id.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.Policy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-verified-permissions.Policy.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-verified-permissions.Policy.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-verified-permissions.Policy.property.definition">definition</a></code> | <code><a href="#cdk-verified-permissions.PolicyDefinitionProperty">PolicyDefinitionProperty</a></code> | *No description.* |
| <code><a href="#cdk-verified-permissions.Policy.property.policyId">policyId</a></code> | <code>string</code> | The unique ID of the new or updated policy. |
| <code><a href="#cdk-verified-permissions.Policy.property.policyStoreId">policyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-verified-permissions.Policy.property.policyType">policyType</a></code> | <code><a href="#cdk-verified-permissions.PolicyType">PolicyType</a></code> | The type of the policy. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-verified-permissions.Policy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-verified-permissions.Policy.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-verified-permissions.Policy.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `definition`<sup>Required</sup> <a name="definition" id="cdk-verified-permissions.Policy.property.definition"></a>

```typescript
public readonly definition: PolicyDefinitionProperty;
```

- *Type:* <a href="#cdk-verified-permissions.PolicyDefinitionProperty">PolicyDefinitionProperty</a>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="cdk-verified-permissions.Policy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The unique ID of the new or updated policy.

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="cdk-verified-permissions.Policy.property.policyStoreId"></a>

```typescript
public readonly policyStoreId: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="cdk-verified-permissions.Policy.property.policyType"></a>

```typescript
public readonly policyType: PolicyType;
```

- *Type:* <a href="#cdk-verified-permissions.PolicyType">PolicyType</a>

The type of the policy.

This is one of the following values: Static or TemplateLinked.

---


### PolicyStore <a name="PolicyStore" id="cdk-verified-permissions.PolicyStore"></a>

- *Implements:* <a href="#cdk-verified-permissions.IPolicyStore">IPolicyStore</a>

#### Initializers <a name="Initializers" id="cdk-verified-permissions.PolicyStore.Initializer"></a>

```typescript
import { PolicyStore } from 'cdk-verified-permissions'

new PolicyStore(scope: Construct, id: string, props?: PolicyStoreProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.PolicyStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-verified-permissions.PolicyStore.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-verified-permissions.PolicyStore.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-verified-permissions.PolicyStoreProps">PolicyStoreProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-verified-permissions.PolicyStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-verified-permissions.PolicyStore.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-verified-permissions.PolicyStore.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-verified-permissions.PolicyStoreProps">PolicyStoreProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-verified-permissions.PolicyStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-verified-permissions.PolicyStore.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-verified-permissions.PolicyStore.addPolicies">addPolicies</a></code> | Add multiple policies to the policy store. |
| <code><a href="#cdk-verified-permissions.PolicyStore.grant">grant</a></code> | Adds an IAM policy statement associated with this policy store to an IAM principal's policy. |
| <code><a href="#cdk-verified-permissions.PolicyStore.grantAuth">grantAuth</a></code> | Permits an IAM principal all auth operations on the policy store: IsAuthorized, IsAuthorizedWithToken. |
| <code><a href="#cdk-verified-permissions.PolicyStore.grantRead">grantRead</a></code> | Permits an IAM principal all read operations on the policy store: GetIdentitySource, GetPolicy, GetPolicyStore, GetPolicyTemplate, GetSchema, ListIdentitySources, ListPolicies, ListPolicyTemplates. |
| <code><a href="#cdk-verified-permissions.PolicyStore.grantWrite">grantWrite</a></code> | Permits an IAM principal all write & read operations on the policy store: CreateIdentitySource, CreatePolicy,CreatePolicyTemplate, DeleteIdentitySource, DeletePolicy, DeletePolicyTemplate, PutSchema, UpdateIdentitySource, UpdatePolicy, UpdatePolicyTemplate. |

---

##### `toString` <a name="toString" id="cdk-verified-permissions.PolicyStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-verified-permissions.PolicyStore.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-verified-permissions.PolicyStore.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addPolicies` <a name="addPolicies" id="cdk-verified-permissions.PolicyStore.addPolicies"></a>

```typescript
public addPolicies(policyDefinitions: AddPolicyOptions[]): Policy[]
```

Add multiple policies to the policy store.

###### `policyDefinitions`<sup>Required</sup> <a name="policyDefinitions" id="cdk-verified-permissions.PolicyStore.addPolicies.parameter.policyDefinitions"></a>

- *Type:* <a href="#cdk-verified-permissions.AddPolicyOptions">AddPolicyOptions</a>[]

An array of policy options for the policy stores policies.

---

##### `grant` <a name="grant" id="cdk-verified-permissions.PolicyStore.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string): Grant
```

Adds an IAM policy statement associated with this policy store to an IAM principal's policy.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-verified-permissions.PolicyStore.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="cdk-verified-permissions.PolicyStore.grant.parameter.actions"></a>

- *Type:* string

---

##### `grantAuth` <a name="grantAuth" id="cdk-verified-permissions.PolicyStore.grantAuth"></a>

```typescript
public grantAuth(grantee: IGrantable): Grant
```

Permits an IAM principal all auth operations on the policy store: IsAuthorized, IsAuthorizedWithToken.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-verified-permissions.PolicyStore.grantAuth.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantRead` <a name="grantRead" id="cdk-verified-permissions.PolicyStore.grantRead"></a>

```typescript
public grantRead(grantee: IGrantable): Grant
```

Permits an IAM principal all read operations on the policy store: GetIdentitySource, GetPolicy, GetPolicyStore, GetPolicyTemplate, GetSchema, ListIdentitySources, ListPolicies, ListPolicyTemplates.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-verified-permissions.PolicyStore.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantWrite` <a name="grantWrite" id="cdk-verified-permissions.PolicyStore.grantWrite"></a>

```typescript
public grantWrite(grantee: IGrantable): Grant
```

Permits an IAM principal all write & read operations on the policy store: CreateIdentitySource, CreatePolicy,CreatePolicyTemplate, DeleteIdentitySource, DeletePolicy, DeletePolicyTemplate, PutSchema, UpdateIdentitySource, UpdatePolicy, UpdatePolicyTemplate.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-verified-permissions.PolicyStore.grantWrite.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-verified-permissions.PolicyStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-verified-permissions.PolicyStore.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-verified-permissions.PolicyStore.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-verified-permissions.PolicyStore.fromPolicyStoreArn">fromPolicyStoreArn</a></code> | Create a PolicyStore construct that represents an external PolicyStore via policy store arn. |
| <code><a href="#cdk-verified-permissions.PolicyStore.fromPolicyStoreAttributes">fromPolicyStoreAttributes</a></code> | Creates a PolicyStore construct that represents an external Policy Store. |
| <code><a href="#cdk-verified-permissions.PolicyStore.fromPolicyStoreId">fromPolicyStoreId</a></code> | Create a PolicyStore construct that represents an external policy store via policy store id. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-verified-permissions.PolicyStore.isConstruct"></a>

```typescript
import { PolicyStore } from 'cdk-verified-permissions'

PolicyStore.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-verified-permissions.PolicyStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-verified-permissions.PolicyStore.isOwnedResource"></a>

```typescript
import { PolicyStore } from 'cdk-verified-permissions'

PolicyStore.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-verified-permissions.PolicyStore.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-verified-permissions.PolicyStore.isResource"></a>

```typescript
import { PolicyStore } from 'cdk-verified-permissions'

PolicyStore.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-verified-permissions.PolicyStore.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromPolicyStoreArn` <a name="fromPolicyStoreArn" id="cdk-verified-permissions.PolicyStore.fromPolicyStoreArn"></a>

```typescript
import { PolicyStore } from 'cdk-verified-permissions'

PolicyStore.fromPolicyStoreArn(scope: Construct, id: string, policyStoreArn: string)
```

Create a PolicyStore construct that represents an external PolicyStore via policy store arn.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-verified-permissions.PolicyStore.fromPolicyStoreArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-verified-permissions.PolicyStore.fromPolicyStoreArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `policyStoreArn`<sup>Required</sup> <a name="policyStoreArn" id="cdk-verified-permissions.PolicyStore.fromPolicyStoreArn.parameter.policyStoreArn"></a>

- *Type:* string

The PolicyStore's ARN.

---

##### `fromPolicyStoreAttributes` <a name="fromPolicyStoreAttributes" id="cdk-verified-permissions.PolicyStore.fromPolicyStoreAttributes"></a>

```typescript
import { PolicyStore } from 'cdk-verified-permissions'

PolicyStore.fromPolicyStoreAttributes(scope: Construct, id: string, attrs: PolicyStoreAttributes)
```

Creates a PolicyStore construct that represents an external Policy Store.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-verified-permissions.PolicyStore.fromPolicyStoreAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-verified-permissions.PolicyStore.fromPolicyStoreAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="cdk-verified-permissions.PolicyStore.fromPolicyStoreAttributes.parameter.attrs"></a>

- *Type:* <a href="#cdk-verified-permissions.PolicyStoreAttributes">PolicyStoreAttributes</a>

A `PolicyStoreAttributes` object.

---

##### `fromPolicyStoreId` <a name="fromPolicyStoreId" id="cdk-verified-permissions.PolicyStore.fromPolicyStoreId"></a>

```typescript
import { PolicyStore } from 'cdk-verified-permissions'

PolicyStore.fromPolicyStoreId(scope: Construct, id: string, policyStoreId: string)
```

Create a PolicyStore construct that represents an external policy store via policy store id.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-verified-permissions.PolicyStore.fromPolicyStoreId.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-verified-permissions.PolicyStore.fromPolicyStoreId.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="cdk-verified-permissions.PolicyStore.fromPolicyStoreId.parameter.policyStoreId"></a>

- *Type:* string

The PolicyStore's id.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.PolicyStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-verified-permissions.PolicyStore.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-verified-permissions.PolicyStore.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-verified-permissions.PolicyStore.property.policyStoreArn">policyStoreArn</a></code> | <code>string</code> | ARN of the Policy Store. |
| <code><a href="#cdk-verified-permissions.PolicyStore.property.policyStoreId">policyStoreId</a></code> | <code>string</code> | ID of the Policy Store. |
| <code><a href="#cdk-verified-permissions.PolicyStore.property.policyStoreName">policyStoreName</a></code> | <code>string</code> | Name of the Policy Store. |
| <code><a href="#cdk-verified-permissions.PolicyStore.property.validationSettings">validationSettings</a></code> | <code><a href="#cdk-verified-permissions.IValidationSettings">IValidationSettings</a></code> | Validation Settings of the Policy Store. |
| <code><a href="#cdk-verified-permissions.PolicyStore.property.schema">schema</a></code> | <code><a href="#cdk-verified-permissions.ISchema">ISchema</a></code> | Schema definition of the Policy Store. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-verified-permissions.PolicyStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-verified-permissions.PolicyStore.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-verified-permissions.PolicyStore.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyStoreArn`<sup>Required</sup> <a name="policyStoreArn" id="cdk-verified-permissions.PolicyStore.property.policyStoreArn"></a>

```typescript
public readonly policyStoreArn: string;
```

- *Type:* string

ARN of the Policy Store.

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="cdk-verified-permissions.PolicyStore.property.policyStoreId"></a>

```typescript
public readonly policyStoreId: string;
```

- *Type:* string

ID of the Policy Store.

---

##### `policyStoreName`<sup>Required</sup> <a name="policyStoreName" id="cdk-verified-permissions.PolicyStore.property.policyStoreName"></a>

```typescript
public readonly policyStoreName: string;
```

- *Type:* string

Name of the Policy Store.

---

##### `validationSettings`<sup>Required</sup> <a name="validationSettings" id="cdk-verified-permissions.PolicyStore.property.validationSettings"></a>

```typescript
public readonly validationSettings: IValidationSettings;
```

- *Type:* <a href="#cdk-verified-permissions.IValidationSettings">IValidationSettings</a>

Validation Settings of the Policy Store.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="cdk-verified-permissions.PolicyStore.property.schema"></a>

```typescript
public readonly schema: ISchema;
```

- *Type:* <a href="#cdk-verified-permissions.ISchema">ISchema</a>

Schema definition of the Policy Store.

---


### PolicyTemplate <a name="PolicyTemplate" id="cdk-verified-permissions.PolicyTemplate"></a>

- *Implements:* <a href="#cdk-verified-permissions.IPolicyTemplate">IPolicyTemplate</a>

#### Initializers <a name="Initializers" id="cdk-verified-permissions.PolicyTemplate.Initializer"></a>

```typescript
import { PolicyTemplate } from 'cdk-verified-permissions'

new PolicyTemplate(scope: Construct, id: string, props: PolicyTemplateProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-verified-permissions.PolicyTemplateProps">PolicyTemplateProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-verified-permissions.PolicyTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-verified-permissions.PolicyTemplate.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-verified-permissions.PolicyTemplate.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-verified-permissions.PolicyTemplateProps">PolicyTemplateProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-verified-permissions.PolicyTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-verified-permissions.PolicyTemplate.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-verified-permissions.PolicyTemplate.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateAttributes">fromPolicyTemplateAttributes</a></code> | Creates a PolicyStore construct that represents an external Policy Store. |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateId">fromPolicyTemplateId</a></code> | Create a PolicyTemplate construct that represents an external policy template via policy template id. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-verified-permissions.PolicyTemplate.isConstruct"></a>

```typescript
import { PolicyTemplate } from 'cdk-verified-permissions'

PolicyTemplate.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-verified-permissions.PolicyTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-verified-permissions.PolicyTemplate.isOwnedResource"></a>

```typescript
import { PolicyTemplate } from 'cdk-verified-permissions'

PolicyTemplate.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-verified-permissions.PolicyTemplate.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-verified-permissions.PolicyTemplate.isResource"></a>

```typescript
import { PolicyTemplate } from 'cdk-verified-permissions'

PolicyTemplate.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-verified-permissions.PolicyTemplate.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromPolicyTemplateAttributes` <a name="fromPolicyTemplateAttributes" id="cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateAttributes"></a>

```typescript
import { PolicyTemplate } from 'cdk-verified-permissions'

PolicyTemplate.fromPolicyTemplateAttributes(scope: Construct, id: string, attrs: PolicyTemplateAttributes)
```

Creates a PolicyStore construct that represents an external Policy Store.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateAttributes.parameter.attrs"></a>

- *Type:* <a href="#cdk-verified-permissions.PolicyTemplateAttributes">PolicyTemplateAttributes</a>

A `PolicyStoreAttributes` object.

---

##### `fromPolicyTemplateId` <a name="fromPolicyTemplateId" id="cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateId"></a>

```typescript
import { PolicyTemplate } from 'cdk-verified-permissions'

PolicyTemplate.fromPolicyTemplateId(scope: Construct, id: string, policyTemplateId: string)
```

Create a PolicyTemplate construct that represents an external policy template via policy template id.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateId.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateId.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `policyTemplateId`<sup>Required</sup> <a name="policyTemplateId" id="cdk-verified-permissions.PolicyTemplate.fromPolicyTemplateId.parameter.policyTemplateId"></a>

- *Type:* string

The PolicyTemplate's id.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.property.policyTemplateId">policyTemplateId</a></code> | <code>string</code> | The ID of the policy template. |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.property.statement">statement</a></code> | <code>string</code> | The statement of the policy template. |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.property.description">description</a></code> | <code>string</code> | Description of the policy template. |
| <code><a href="#cdk-verified-permissions.PolicyTemplate.property.policyStore">policyStore</a></code> | <code><a href="#cdk-verified-permissions.IPolicyStore">IPolicyStore</a></code> | The Policy store that contains the template. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-verified-permissions.PolicyTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-verified-permissions.PolicyTemplate.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-verified-permissions.PolicyTemplate.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyTemplateId`<sup>Required</sup> <a name="policyTemplateId" id="cdk-verified-permissions.PolicyTemplate.property.policyTemplateId"></a>

```typescript
public readonly policyTemplateId: string;
```

- *Type:* string

The ID of the policy template.

---

##### `statement`<sup>Required</sup> <a name="statement" id="cdk-verified-permissions.PolicyTemplate.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

The statement of the policy template.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-verified-permissions.PolicyTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the policy template.

---

##### `policyStore`<sup>Optional</sup> <a name="policyStore" id="cdk-verified-permissions.PolicyTemplate.property.policyStore"></a>

```typescript
public readonly policyStore: IPolicyStore;
```

- *Type:* <a href="#cdk-verified-permissions.IPolicyStore">IPolicyStore</a>

The Policy store that contains the template.

---


## Structs <a name="Structs" id="Structs"></a>

### AddPolicyOptions <a name="AddPolicyOptions" id="cdk-verified-permissions.AddPolicyOptions"></a>

#### Initializer <a name="Initializer" id="cdk-verified-permissions.AddPolicyOptions.Initializer"></a>

```typescript
import { AddPolicyOptions } from 'cdk-verified-permissions'

const addPolicyOptions: AddPolicyOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.AddPolicyOptions.property.policyConfiguration">policyConfiguration</a></code> | <code><a href="#cdk-verified-permissions.PolicyDefinitionProperty">PolicyDefinitionProperty</a></code> | The configuration of the Policy. |
| <code><a href="#cdk-verified-permissions.AddPolicyOptions.property.policyId">policyId</a></code> | <code>string</code> | The id of the Policy. |

---

##### `policyConfiguration`<sup>Required</sup> <a name="policyConfiguration" id="cdk-verified-permissions.AddPolicyOptions.property.policyConfiguration"></a>

```typescript
public readonly policyConfiguration: PolicyDefinitionProperty;
```

- *Type:* <a href="#cdk-verified-permissions.PolicyDefinitionProperty">PolicyDefinitionProperty</a>

The configuration of the Policy.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="cdk-verified-permissions.AddPolicyOptions.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The id of the Policy.

---

### CognitoUserPoolConfiguration <a name="CognitoUserPoolConfiguration" id="cdk-verified-permissions.CognitoUserPoolConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-verified-permissions.CognitoUserPoolConfiguration.Initializer"></a>

```typescript
import { CognitoUserPoolConfiguration } from 'cdk-verified-permissions'

const cognitoUserPoolConfiguration: CognitoUserPoolConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.CognitoUserPoolConfiguration.property.userPool">userPool</a></code> | <code>aws-cdk-lib.aws_cognito.IUserPool</code> | Cognito User Pool. |
| <code><a href="#cdk-verified-permissions.CognitoUserPoolConfiguration.property.clientIds">clientIds</a></code> | <code>string[]</code> | Client identifiers. |

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="cdk-verified-permissions.CognitoUserPoolConfiguration.property.userPool"></a>

```typescript
public readonly userPool: IUserPool;
```

- *Type:* aws-cdk-lib.aws_cognito.IUserPool
- *Default:* no Cognito User Pool

Cognito User Pool.

---

##### `clientIds`<sup>Optional</sup> <a name="clientIds" id="cdk-verified-permissions.CognitoUserPoolConfiguration.property.clientIds"></a>

```typescript
public readonly clientIds: string[];
```

- *Type:* string[]
- *Default:* empty list.

Client identifiers.

---

### EntityIdentifierProperty <a name="EntityIdentifierProperty" id="cdk-verified-permissions.EntityIdentifierProperty"></a>

#### Initializer <a name="Initializer" id="cdk-verified-permissions.EntityIdentifierProperty.Initializer"></a>

```typescript
import { EntityIdentifierProperty } from 'cdk-verified-permissions'

const entityIdentifierProperty: EntityIdentifierProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.EntityIdentifierProperty.property.entityId">entityId</a></code> | <code>string</code> | The identifier of an entity. |
| <code><a href="#cdk-verified-permissions.EntityIdentifierProperty.property.entityType">entityType</a></code> | <code>string</code> | The type of an entity. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="cdk-verified-permissions.EntityIdentifierProperty.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

The identifier of an entity.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="cdk-verified-permissions.EntityIdentifierProperty.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

The type of an entity.

---

### IdentitySourceAttributes <a name="IdentitySourceAttributes" id="cdk-verified-permissions.IdentitySourceAttributes"></a>

#### Initializer <a name="Initializer" id="cdk-verified-permissions.IdentitySourceAttributes.Initializer"></a>

```typescript
import { IdentitySourceAttributes } from 'cdk-verified-permissions'

const identitySourceAttributes: IdentitySourceAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.IdentitySourceAttributes.property.identitySourceArn">identitySourceArn</a></code> | <code>string</code> | The identity Source ARN. |
| <code><a href="#cdk-verified-permissions.IdentitySourceAttributes.property.identitySourceId">identitySourceId</a></code> | <code>string</code> | The identity Source identifier. |

---

##### `identitySourceArn`<sup>Optional</sup> <a name="identitySourceArn" id="cdk-verified-permissions.IdentitySourceAttributes.property.identitySourceArn"></a>

```typescript
public readonly identitySourceArn: string;
```

- *Type:* string

The identity Source ARN.

---

##### `identitySourceId`<sup>Optional</sup> <a name="identitySourceId" id="cdk-verified-permissions.IdentitySourceAttributes.property.identitySourceId"></a>

```typescript
public readonly identitySourceId: string;
```

- *Type:* string

The identity Source identifier.

---

### IdentitySourceConfiguration <a name="IdentitySourceConfiguration" id="cdk-verified-permissions.IdentitySourceConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-verified-permissions.IdentitySourceConfiguration.Initializer"></a>

```typescript
import { IdentitySourceConfiguration } from 'cdk-verified-permissions'

const identitySourceConfiguration: IdentitySourceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.IdentitySourceConfiguration.property.cognitoUserPoolConfiguration">cognitoUserPoolConfiguration</a></code> | <code><a href="#cdk-verified-permissions.CognitoUserPoolConfiguration">CognitoUserPoolConfiguration</a></code> | Cognito User Pool Configuration. |

---

##### `cognitoUserPoolConfiguration`<sup>Required</sup> <a name="cognitoUserPoolConfiguration" id="cdk-verified-permissions.IdentitySourceConfiguration.property.cognitoUserPoolConfiguration"></a>

```typescript
public readonly cognitoUserPoolConfiguration: CognitoUserPoolConfiguration;
```

- *Type:* <a href="#cdk-verified-permissions.CognitoUserPoolConfiguration">CognitoUserPoolConfiguration</a>

Cognito User Pool Configuration.

---

### IdentitySourceProps <a name="IdentitySourceProps" id="cdk-verified-permissions.IdentitySourceProps"></a>

#### Initializer <a name="Initializer" id="cdk-verified-permissions.IdentitySourceProps.Initializer"></a>

```typescript
import { IdentitySourceProps } from 'cdk-verified-permissions'

const identitySourceProps: IdentitySourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.IdentitySourceProps.property.configuration">configuration</a></code> | <code><a href="#cdk-verified-permissions.IdentitySourceConfiguration">IdentitySourceConfiguration</a></code> | Identity Source configuration. |
| <code><a href="#cdk-verified-permissions.IdentitySourceProps.property.policyStore">policyStore</a></code> | <code><a href="#cdk-verified-permissions.IPolicyStore">IPolicyStore</a></code> | Policy Store in which you want to store this identity source. |
| <code><a href="#cdk-verified-permissions.IdentitySourceProps.property.principalEntityType">principalEntityType</a></code> | <code>string</code> | Principal entity type. |

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="cdk-verified-permissions.IdentitySourceProps.property.configuration"></a>

```typescript
public readonly configuration: IdentitySourceConfiguration;
```

- *Type:* <a href="#cdk-verified-permissions.IdentitySourceConfiguration">IdentitySourceConfiguration</a>

Identity Source configuration.

---

##### `policyStore`<sup>Optional</sup> <a name="policyStore" id="cdk-verified-permissions.IdentitySourceProps.property.policyStore"></a>

```typescript
public readonly policyStore: IPolicyStore;
```

- *Type:* <a href="#cdk-verified-permissions.IPolicyStore">IPolicyStore</a>
- *Default:* No policy store is set for the identity source.

Policy Store in which you want to store this identity source.

---

##### `principalEntityType`<sup>Optional</sup> <a name="principalEntityType" id="cdk-verified-permissions.IdentitySourceProps.property.principalEntityType"></a>

```typescript
public readonly principalEntityType: string;
```

- *Type:* string
- *Default:* No principal entity type for the identity source.

Principal entity type.

---

### PolicyAttributes <a name="PolicyAttributes" id="cdk-verified-permissions.PolicyAttributes"></a>

#### Initializer <a name="Initializer" id="cdk-verified-permissions.PolicyAttributes.Initializer"></a>

```typescript
import { PolicyAttributes } from 'cdk-verified-permissions'

const policyAttributes: PolicyAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.PolicyAttributes.property.policyId">policyId</a></code> | <code>string</code> | The unique ID of the new or updated policy. |
| <code><a href="#cdk-verified-permissions.PolicyAttributes.property.policyType">policyType</a></code> | <code><a href="#cdk-verified-permissions.PolicyType">PolicyType</a></code> | The type of the policy. |

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="cdk-verified-permissions.PolicyAttributes.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The unique ID of the new or updated policy.

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="cdk-verified-permissions.PolicyAttributes.property.policyType"></a>

```typescript
public readonly policyType: PolicyType;
```

- *Type:* <a href="#cdk-verified-permissions.PolicyType">PolicyType</a>
- *Default:* Static

The type of the policy.

This is one of the following values: Static or TemplateLinked

---

### PolicyDefinitionProperty <a name="PolicyDefinitionProperty" id="cdk-verified-permissions.PolicyDefinitionProperty"></a>

#### Initializer <a name="Initializer" id="cdk-verified-permissions.PolicyDefinitionProperty.Initializer"></a>

```typescript
import { PolicyDefinitionProperty } from 'cdk-verified-permissions'

const policyDefinitionProperty: PolicyDefinitionProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.PolicyDefinitionProperty.property.static">static</a></code> | <code><a href="#cdk-verified-permissions.StaticPolicyDefinitionProperty">StaticPolicyDefinitionProperty</a></code> | A structure that describes a static policy. |
| <code><a href="#cdk-verified-permissions.PolicyDefinitionProperty.property.templateLinked">templateLinked</a></code> | <code><a href="#cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty">TemplateLinkedPolicyDefinitionProperty</a></code> | A structure that describes a policy that was instantiated from a template. |

---

##### `static`<sup>Optional</sup> <a name="static" id="cdk-verified-permissions.PolicyDefinitionProperty.property.static"></a>

```typescript
public readonly static: StaticPolicyDefinitionProperty;
```

- *Type:* <a href="#cdk-verified-permissions.StaticPolicyDefinitionProperty">StaticPolicyDefinitionProperty</a>
- *Default:* Static must be set for policies created from a static definition. Otherwise, use template linked definitions.

A structure that describes a static policy.

---

##### `templateLinked`<sup>Optional</sup> <a name="templateLinked" id="cdk-verified-permissions.PolicyDefinitionProperty.property.templateLinked"></a>

```typescript
public readonly templateLinked: TemplateLinkedPolicyDefinitionProperty;
```

- *Type:* <a href="#cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty">TemplateLinkedPolicyDefinitionProperty</a>
- *Default:* Template linked must be set for policies created from a static definition. Otherwise, use static definitions.

A structure that describes a policy that was instantiated from a template.

---

### PolicyProps <a name="PolicyProps" id="cdk-verified-permissions.PolicyProps"></a>

#### Initializer <a name="Initializer" id="cdk-verified-permissions.PolicyProps.Initializer"></a>

```typescript
import { PolicyProps } from 'cdk-verified-permissions'

const policyProps: PolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.PolicyProps.property.definition">definition</a></code> | <code><a href="#cdk-verified-permissions.PolicyDefinitionProperty">PolicyDefinitionProperty</a></code> | Specifies the policy type and content to use for the new or updated policy. |
| <code><a href="#cdk-verified-permissions.PolicyProps.property.policyStore">policyStore</a></code> | <code><a href="#cdk-verified-permissions.IPolicyStore">IPolicyStore</a></code> | The policy store that contains the policy. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="cdk-verified-permissions.PolicyProps.property.definition"></a>

```typescript
public readonly definition: PolicyDefinitionProperty;
```

- *Type:* <a href="#cdk-verified-permissions.PolicyDefinitionProperty">PolicyDefinitionProperty</a>

Specifies the policy type and content to use for the new or updated policy.

The definition structure must include either a Static or a TemplateLinked element.

---

##### `policyStore`<sup>Required</sup> <a name="policyStore" id="cdk-verified-permissions.PolicyProps.property.policyStore"></a>

```typescript
public readonly policyStore: IPolicyStore;
```

- *Type:* <a href="#cdk-verified-permissions.IPolicyStore">IPolicyStore</a>

The policy store that contains the policy.

---

### PolicyStoreAttributes <a name="PolicyStoreAttributes" id="cdk-verified-permissions.PolicyStoreAttributes"></a>

#### Initializer <a name="Initializer" id="cdk-verified-permissions.PolicyStoreAttributes.Initializer"></a>

```typescript
import { PolicyStoreAttributes } from 'cdk-verified-permissions'

const policyStoreAttributes: PolicyStoreAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.PolicyStoreAttributes.property.policyStoreArn">policyStoreArn</a></code> | <code>string</code> | The ARN of the Amazon Verified Permissions Policy Store. |
| <code><a href="#cdk-verified-permissions.PolicyStoreAttributes.property.policyStoreId">policyStoreId</a></code> | <code>string</code> | The id of the Amazon Verified Permissions PolicyStore. |

---

##### `policyStoreArn`<sup>Optional</sup> <a name="policyStoreArn" id="cdk-verified-permissions.PolicyStoreAttributes.property.policyStoreArn"></a>

```typescript
public readonly policyStoreArn: string;
```

- *Type:* string
- *Default:* no PolicyStore arn

The ARN of the Amazon Verified Permissions Policy Store.

One of this, or `policyStoreId`, is required.

---

##### `policyStoreId`<sup>Optional</sup> <a name="policyStoreId" id="cdk-verified-permissions.PolicyStoreAttributes.property.policyStoreId"></a>

```typescript
public readonly policyStoreId: string;
```

- *Type:* string
- *Default:* no PolicyStore id

The id of the Amazon Verified Permissions PolicyStore.

One of this, or `policyStoreArn`, is required.

---

### PolicyStoreProps <a name="PolicyStoreProps" id="cdk-verified-permissions.PolicyStoreProps"></a>

#### Initializer <a name="Initializer" id="cdk-verified-permissions.PolicyStoreProps.Initializer"></a>

```typescript
import { PolicyStoreProps } from 'cdk-verified-permissions'

const policyStoreProps: PolicyStoreProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.PolicyStoreProps.property.validationSettings">validationSettings</a></code> | <code><a href="#cdk-verified-permissions.IValidationSettings">IValidationSettings</a></code> | The policy store's validation settings. |
| <code><a href="#cdk-verified-permissions.PolicyStoreProps.property.schema">schema</a></code> | <code><a href="#cdk-verified-permissions.ISchema">ISchema</a></code> | This attribute is not required from an API point of view. |

---

##### `validationSettings`<sup>Required</sup> <a name="validationSettings" id="cdk-verified-permissions.PolicyStoreProps.property.validationSettings"></a>

```typescript
public readonly validationSettings: IValidationSettings;
```

- *Type:* <a href="#cdk-verified-permissions.IValidationSettings">IValidationSettings</a>
- *Default:* If not provided, the Policy store will be created with ValidationSettingsMode = "OFF"

The policy store's validation settings.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="cdk-verified-permissions.PolicyStoreProps.property.schema"></a>

```typescript
public readonly schema: ISchema;
```

- *Type:* <a href="#cdk-verified-permissions.ISchema">ISchema</a>
- *Default:* The schema (in Cedar) to be applied to the PolicyStore.

This attribute is not required from an API point of view.

It represents the schema (in Cedar) to be applied to the PolicyStore.

---

### PolicyTemplateAttributes <a name="PolicyTemplateAttributes" id="cdk-verified-permissions.PolicyTemplateAttributes"></a>

#### Initializer <a name="Initializer" id="cdk-verified-permissions.PolicyTemplateAttributes.Initializer"></a>

```typescript
import { PolicyTemplateAttributes } from 'cdk-verified-permissions'

const policyTemplateAttributes: PolicyTemplateAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.PolicyTemplateAttributes.property.policyTemplateId">policyTemplateId</a></code> | <code>string</code> | The id of the Amazon Verified Permissions PolicyTemplate. |

---

##### `policyTemplateId`<sup>Required</sup> <a name="policyTemplateId" id="cdk-verified-permissions.PolicyTemplateAttributes.property.policyTemplateId"></a>

```typescript
public readonly policyTemplateId: string;
```

- *Type:* string

The id of the Amazon Verified Permissions PolicyTemplate.

---

### PolicyTemplateProps <a name="PolicyTemplateProps" id="cdk-verified-permissions.PolicyTemplateProps"></a>

#### Initializer <a name="Initializer" id="cdk-verified-permissions.PolicyTemplateProps.Initializer"></a>

```typescript
import { PolicyTemplateProps } from 'cdk-verified-permissions'

const policyTemplateProps: PolicyTemplateProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.PolicyTemplateProps.property.statement">statement</a></code> | <code>string</code> | Specifies the content that you want to use for the new policy template, written in the Cedar policy language. |
| <code><a href="#cdk-verified-permissions.PolicyTemplateProps.property.description">description</a></code> | <code>string</code> | The description to attach to the new or updated policy template. |
| <code><a href="#cdk-verified-permissions.PolicyTemplateProps.property.policyStore">policyStore</a></code> | <code><a href="#cdk-verified-permissions.IPolicyStore">IPolicyStore</a></code> | The policy store that contains the template. |

---

##### `statement`<sup>Required</sup> <a name="statement" id="cdk-verified-permissions.PolicyTemplateProps.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string
- *Default:* The statement to attach to the new or updated policy template.

Specifies the content that you want to use for the new policy template, written in the Cedar policy language.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-verified-permissions.PolicyTemplateProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

The description to attach to the new or updated policy template.

---

##### `policyStore`<sup>Optional</sup> <a name="policyStore" id="cdk-verified-permissions.PolicyTemplateProps.property.policyStore"></a>

```typescript
public readonly policyStore: IPolicyStore;
```

- *Type:* <a href="#cdk-verified-permissions.IPolicyStore">IPolicyStore</a>
- *Default:* No policy store.

The policy store that contains the template.

---

### StaticPolicyDefinitionProperty <a name="StaticPolicyDefinitionProperty" id="cdk-verified-permissions.StaticPolicyDefinitionProperty"></a>

#### Initializer <a name="Initializer" id="cdk-verified-permissions.StaticPolicyDefinitionProperty.Initializer"></a>

```typescript
import { StaticPolicyDefinitionProperty } from 'cdk-verified-permissions'

const staticPolicyDefinitionProperty: StaticPolicyDefinitionProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.StaticPolicyDefinitionProperty.property.statement">statement</a></code> | <code>string</code> | The policy content of the static policy, written in the Cedar policy language. |
| <code><a href="#cdk-verified-permissions.StaticPolicyDefinitionProperty.property.description">description</a></code> | <code>string</code> | The description of the static policy. |

---

##### `statement`<sup>Required</sup> <a name="statement" id="cdk-verified-permissions.StaticPolicyDefinitionProperty.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

The policy content of the static policy, written in the Cedar policy language.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-verified-permissions.StaticPolicyDefinitionProperty.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* Empty description.

The description of the static policy.

---

### TemplateLinkedPolicyDefinitionProperty <a name="TemplateLinkedPolicyDefinitionProperty" id="cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty"></a>

#### Initializer <a name="Initializer" id="cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty.Initializer"></a>

```typescript
import { TemplateLinkedPolicyDefinitionProperty } from 'cdk-verified-permissions'

const templateLinkedPolicyDefinitionProperty: TemplateLinkedPolicyDefinitionProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty.property.policyTemplate">policyTemplate</a></code> | <code><a href="#cdk-verified-permissions.IPolicyTemplate">IPolicyTemplate</a></code> | The unique identifier of the policy template used to create this policy. |
| <code><a href="#cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty.property.principal">principal</a></code> | <code><a href="#cdk-verified-permissions.EntityIdentifierProperty">EntityIdentifierProperty</a></code> | The principal associated with this template-linked policy. |
| <code><a href="#cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty.property.resource">resource</a></code> | <code><a href="#cdk-verified-permissions.EntityIdentifierProperty">EntityIdentifierProperty</a></code> | The resource associated with this template-linked policy. |

---

##### `policyTemplate`<sup>Required</sup> <a name="policyTemplate" id="cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty.property.policyTemplate"></a>

```typescript
public readonly policyTemplate: IPolicyTemplate;
```

- *Type:* <a href="#cdk-verified-permissions.IPolicyTemplate">IPolicyTemplate</a>

The unique identifier of the policy template used to create this policy.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty.property.principal"></a>

```typescript
public readonly principal: EntityIdentifierProperty;
```

- *Type:* <a href="#cdk-verified-permissions.EntityIdentifierProperty">EntityIdentifierProperty</a>
- *Default:* No Principal. It is set to unspecified.

The principal associated with this template-linked policy.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="cdk-verified-permissions.TemplateLinkedPolicyDefinitionProperty.property.resource"></a>

```typescript
public readonly resource: EntityIdentifierProperty;
```

- *Type:* <a href="#cdk-verified-permissions.EntityIdentifierProperty">EntityIdentifierProperty</a>
- *Default:* No Resource. It is set to unspecified.

The resource associated with this template-linked policy.

---

## Classes <a name="Classes" id="Classes"></a>

### Statement <a name="Statement" id="cdk-verified-permissions.Statement"></a>

#### Initializers <a name="Initializers" id="cdk-verified-permissions.Statement.Initializer"></a>

```typescript
import { Statement } from 'cdk-verified-permissions'

new Statement()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-verified-permissions.Statement.fromFile">fromFile</a></code> | Loads the statement from a local disk path. |
| <code><a href="#cdk-verified-permissions.Statement.fromInline">fromInline</a></code> | Inline statement for policy. |

---

##### `fromFile` <a name="fromFile" id="cdk-verified-permissions.Statement.fromFile"></a>

```typescript
import { Statement } from 'cdk-verified-permissions'

Statement.fromFile(path: string)
```

Loads the statement from a local disk path.

###### `path`<sup>Required</sup> <a name="path" id="cdk-verified-permissions.Statement.fromFile.parameter.path"></a>

- *Type:* string

A path with the policy statement.

---

##### `fromInline` <a name="fromInline" id="cdk-verified-permissions.Statement.fromInline"></a>

```typescript
import { Statement } from 'cdk-verified-permissions'

Statement.fromInline(statement: string)
```

Inline statement for policy.

###### `statement`<sup>Required</sup> <a name="statement" id="cdk-verified-permissions.Statement.fromInline.parameter.statement"></a>

- *Type:* string

The actual statement.

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IIdentitySource <a name="IIdentitySource" id="cdk-verified-permissions.IIdentitySource"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#cdk-verified-permissions.IdentitySource">IdentitySource</a>, <a href="#cdk-verified-permissions.IIdentitySource">IIdentitySource</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.IIdentitySource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-verified-permissions.IIdentitySource.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-verified-permissions.IIdentitySource.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-verified-permissions.IIdentitySource.property.identitySourceArn">identitySourceArn</a></code> | <code>string</code> | Identity Source ARN. |
| <code><a href="#cdk-verified-permissions.IIdentitySource.property.identitySourceId">identitySourceId</a></code> | <code>string</code> | Identity Source identifier. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-verified-permissions.IIdentitySource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-verified-permissions.IIdentitySource.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-verified-permissions.IIdentitySource.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `identitySourceArn`<sup>Required</sup> <a name="identitySourceArn" id="cdk-verified-permissions.IIdentitySource.property.identitySourceArn"></a>

```typescript
public readonly identitySourceArn: string;
```

- *Type:* string

Identity Source ARN.

---

##### `identitySourceId`<sup>Required</sup> <a name="identitySourceId" id="cdk-verified-permissions.IIdentitySource.property.identitySourceId"></a>

```typescript
public readonly identitySourceId: string;
```

- *Type:* string

Identity Source identifier.

---

### IPolicy <a name="IPolicy" id="cdk-verified-permissions.IPolicy"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#cdk-verified-permissions.Policy">Policy</a>, <a href="#cdk-verified-permissions.IPolicy">IPolicy</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.IPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-verified-permissions.IPolicy.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-verified-permissions.IPolicy.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-verified-permissions.IPolicy.property.policyId">policyId</a></code> | <code>string</code> | The unique ID of the new or updated policy. |
| <code><a href="#cdk-verified-permissions.IPolicy.property.policyType">policyType</a></code> | <code><a href="#cdk-verified-permissions.PolicyType">PolicyType</a></code> | The type of the policy. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-verified-permissions.IPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-verified-permissions.IPolicy.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-verified-permissions.IPolicy.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="cdk-verified-permissions.IPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The unique ID of the new or updated policy.

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="cdk-verified-permissions.IPolicy.property.policyType"></a>

```typescript
public readonly policyType: PolicyType;
```

- *Type:* <a href="#cdk-verified-permissions.PolicyType">PolicyType</a>

The type of the policy.

This is one of the following values: Static or TemplateLinked.

---

### IPolicyStore <a name="IPolicyStore" id="cdk-verified-permissions.IPolicyStore"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#cdk-verified-permissions.PolicyStore">PolicyStore</a>, <a href="#cdk-verified-permissions.IPolicyStore">IPolicyStore</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-verified-permissions.IPolicyStore.grant">grant</a></code> | Adds an IAM policy statement associated with this policy store to an IAM principal's policy. |
| <code><a href="#cdk-verified-permissions.IPolicyStore.grantAuth">grantAuth</a></code> | Permits an IAM principal all auth operations on the policy store: IsAuthorized, IsAuthorizedWithToken. |
| <code><a href="#cdk-verified-permissions.IPolicyStore.grantRead">grantRead</a></code> | Permits an IAM principal all read operations on the policy store: GetIdentitySource, GetPolicy, GetPolicyStore, GetPolicyTemplate, GetSchema, ListIdentitySources, ListPolicies, ListPolicyTemplates. |
| <code><a href="#cdk-verified-permissions.IPolicyStore.grantWrite">grantWrite</a></code> | Permits an IAM principal all write & read operations on the policy store: CreateIdentitySource, CreatePolicy,CreatePolicyTemplate, DeleteIdentitySource, DeletePolicy, DeletePolicyTemplate, PutSchema, UpdateIdentitySource, UpdatePolicy, UpdatePolicyTemplate. |

---

##### `grant` <a name="grant" id="cdk-verified-permissions.IPolicyStore.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string): Grant
```

Adds an IAM policy statement associated with this policy store to an IAM principal's policy.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-verified-permissions.IPolicyStore.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal (no-op if undefined).

---

###### `actions`<sup>Required</sup> <a name="actions" id="cdk-verified-permissions.IPolicyStore.grant.parameter.actions"></a>

- *Type:* string

The set of actions to allow (i.e. "verifiedpermissions:IsAuthorized", "verifiedpermissions:ListPolicies", ...).

---

##### `grantAuth` <a name="grantAuth" id="cdk-verified-permissions.IPolicyStore.grantAuth"></a>

```typescript
public grantAuth(grantee: IGrantable): Grant
```

Permits an IAM principal all auth operations on the policy store: IsAuthorized, IsAuthorizedWithToken.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-verified-permissions.IPolicyStore.grantAuth.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantRead` <a name="grantRead" id="cdk-verified-permissions.IPolicyStore.grantRead"></a>

```typescript
public grantRead(grantee: IGrantable): Grant
```

Permits an IAM principal all read operations on the policy store: GetIdentitySource, GetPolicy, GetPolicyStore, GetPolicyTemplate, GetSchema, ListIdentitySources, ListPolicies, ListPolicyTemplates.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-verified-permissions.IPolicyStore.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantWrite` <a name="grantWrite" id="cdk-verified-permissions.IPolicyStore.grantWrite"></a>

```typescript
public grantWrite(grantee: IGrantable): Grant
```

Permits an IAM principal all write & read operations on the policy store: CreateIdentitySource, CreatePolicy,CreatePolicyTemplate, DeleteIdentitySource, DeletePolicy, DeletePolicyTemplate, PutSchema, UpdateIdentitySource, UpdatePolicy, UpdatePolicyTemplate.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-verified-permissions.IPolicyStore.grantWrite.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.IPolicyStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-verified-permissions.IPolicyStore.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-verified-permissions.IPolicyStore.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-verified-permissions.IPolicyStore.property.policyStoreArn">policyStoreArn</a></code> | <code>string</code> | ARN of the Policy Store. |
| <code><a href="#cdk-verified-permissions.IPolicyStore.property.policyStoreId">policyStoreId</a></code> | <code>string</code> | ID of the Policy Store. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-verified-permissions.IPolicyStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-verified-permissions.IPolicyStore.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-verified-permissions.IPolicyStore.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyStoreArn`<sup>Required</sup> <a name="policyStoreArn" id="cdk-verified-permissions.IPolicyStore.property.policyStoreArn"></a>

```typescript
public readonly policyStoreArn: string;
```

- *Type:* string

ARN of the Policy Store.

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="cdk-verified-permissions.IPolicyStore.property.policyStoreId"></a>

```typescript
public readonly policyStoreId: string;
```

- *Type:* string

ID of the Policy Store.

---

### IPolicyTemplate <a name="IPolicyTemplate" id="cdk-verified-permissions.IPolicyTemplate"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#cdk-verified-permissions.PolicyTemplate">PolicyTemplate</a>, <a href="#cdk-verified-permissions.IPolicyTemplate">IPolicyTemplate</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.IPolicyTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-verified-permissions.IPolicyTemplate.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-verified-permissions.IPolicyTemplate.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-verified-permissions.IPolicyTemplate.property.policyTemplateId">policyTemplateId</a></code> | <code>string</code> | The ID of the policy template. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-verified-permissions.IPolicyTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-verified-permissions.IPolicyTemplate.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-verified-permissions.IPolicyTemplate.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyTemplateId`<sup>Required</sup> <a name="policyTemplateId" id="cdk-verified-permissions.IPolicyTemplate.property.policyTemplateId"></a>

```typescript
public readonly policyTemplateId: string;
```

- *Type:* string

The ID of the policy template.

---

### ISchema <a name="ISchema" id="cdk-verified-permissions.ISchema"></a>

- *Implemented By:* <a href="#cdk-verified-permissions.ISchema">ISchema</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.ISchema.property.cedarJson">cedarJson</a></code> | <code>string</code> | *No description.* |

---

##### `cedarJson`<sup>Required</sup> <a name="cedarJson" id="cdk-verified-permissions.ISchema.property.cedarJson"></a>

```typescript
public readonly cedarJson: string;
```

- *Type:* string

---

### IValidationSettings <a name="IValidationSettings" id="cdk-verified-permissions.IValidationSettings"></a>

- *Implemented By:* <a href="#cdk-verified-permissions.IValidationSettings">IValidationSettings</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-verified-permissions.IValidationSettings.property.mode">mode</a></code> | <code><a href="#cdk-verified-permissions.ValidationSettingsMode">ValidationSettingsMode</a></code> | *No description.* |

---

##### `mode`<sup>Required</sup> <a name="mode" id="cdk-verified-permissions.IValidationSettings.property.mode"></a>

```typescript
public readonly mode: ValidationSettingsMode;
```

- *Type:* <a href="#cdk-verified-permissions.ValidationSettingsMode">ValidationSettingsMode</a>

---

## Enums <a name="Enums" id="Enums"></a>

### PolicyType <a name="PolicyType" id="cdk-verified-permissions.PolicyType"></a>

PolicyType options.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-verified-permissions.PolicyType.STATIC">STATIC</a></code> | *No description.* |
| <code><a href="#cdk-verified-permissions.PolicyType.TEMPLATELINKED">TEMPLATELINKED</a></code> | *No description.* |

---

##### `STATIC` <a name="STATIC" id="cdk-verified-permissions.PolicyType.STATIC"></a>

---


##### `TEMPLATELINKED` <a name="TEMPLATELINKED" id="cdk-verified-permissions.PolicyType.TEMPLATELINKED"></a>

---


### ValidationSettingsMode <a name="ValidationSettingsMode" id="cdk-verified-permissions.ValidationSettingsMode"></a>

Validation Settings mode, according to the Cloudformation PolicyStore resource.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-verified-permissions.ValidationSettingsMode.OFF">OFF</a></code> | *No description.* |
| <code><a href="#cdk-verified-permissions.ValidationSettingsMode.STRICT">STRICT</a></code> | *No description.* |

---

##### `OFF` <a name="OFF" id="cdk-verified-permissions.ValidationSettingsMode.OFF"></a>

---


##### `STRICT` <a name="STRICT" id="cdk-verified-permissions.ValidationSettingsMode.STRICT"></a>

---

