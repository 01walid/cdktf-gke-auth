<p align="center">
  <a href="https://opensource.org/licenses/Apache-2.0"><img src="https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg" alt="Apache 2.0 License"></a>
  <a href="https://www.npmjs.com/package/cdktf-gke-auth"><img src="https://badge.fury.io/js/cdktf-gke-auth.svg" alt="npm version"></a>
  <a href="https://github.com/01walid/cdktf-gke-auth/actions/workflows/build.yml"><img src="https://github.com/01walid/cdktf-gke-auth/actions/workflows/build.yml/badge.svg" alt="Build badge"></a>
  <a href="https://github.com/01walid/cdktf-gke-auth/actions/workflows/release.yml"><img src="https://github.com/01walid/cdktf-gke-auth/actions/workflows/release.yml/badge.svg" alt="Release badge"></a>
</p>

# cdktf-gke-auth

Easily authenticate against a Google Kubernetes Engine (GKE) within your CDK for Terraform stack. Without the need to
resort to [Google's terraform GKE auth](https://github.com/terraform-google-modules/terraform-google-kubernetes-engine/tree/v26.1.1/modules/auth) module. You can avoid running `cdktf get` as pre-synth step.

## Example usage (Typescript)

Install the construct with: `yarn install cdktf-gke-auth`.

```ts
import { GoogleProvider } from "@cdktf/provider-google/lib/provider";
import { TerraformOutput, TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { GKEAuth } from 'cdktf-gke-auth';

export class MyKubeStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new GoogleProvider(this, "google-provider", {});

    const auth = new GKEAuth(this, "gke-auth", {
      clusterName: "my-cluster",
      location: "europe-west1",
      projectId: "my-project",
    });

    // init the Kubernetes provider like so:
    // new KubernetesProvider(this, "kubernetes", {
    //   ...auth.authCredentials
    // });

    // Or a helm provider like so:
    //  new HelmProvider(this, "helm", {
    //   kubernetes: auth.authCredentials,
    // });
  }
}
```

The `GKEAuth` instance expose `host`, `clusterCaCertificate`, `clusterCaCertificatePEM`, and `token` you can use to authenticate using
any of the kubernetes popular cdktf providers.

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GKEAuth <a name="GKEAuth" id="cdktf-gke-auth.GKEAuth"></a>

- *Implements:* cdktf.ITerraformDependable

#### Initializers <a name="Initializers" id="cdktf-gke-auth.GKEAuth.Initializer"></a>

```typescript
import { GKEAuth } from 'cdktf-gke-auth'

new GKEAuth(scope: Construct, id: string, props: GkeControlPlaneProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-gke-auth.GKEAuth.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-gke-auth.GKEAuth.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-gke-auth.GKEAuth.Initializer.parameter.props">props</a></code> | <code><a href="#cdktf-gke-auth.GkeControlPlaneProps">GkeControlPlaneProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-gke-auth.GKEAuth.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-gke-auth.GKEAuth.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdktf-gke-auth.GKEAuth.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktf-gke-auth.GkeControlPlaneProps">GkeControlPlaneProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-gke-auth.GKEAuth.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-gke-auth.GKEAuth.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-gke-auth.GKEAuth.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-gke-auth.GKEAuth.isConstruct"></a>

```typescript
import { GKEAuth } from 'cdktf-gke-auth'

GKEAuth.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-gke-auth.GKEAuth.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-gke-auth.GKEAuth.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-gke-auth.GKEAuth.property.authCredentials">authCredentials</a></code> | <code><a href="#cdktf-gke-auth.AuthCredentials">AuthCredentials</a></code> | *No description.* |
| <code><a href="#cdktf-gke-auth.GKEAuth.property.clientConfig">clientConfig</a></code> | <code>@cdktf/provider-google.dataGoogleClientConfig.DataGoogleClientConfig</code> | *No description.* |
| <code><a href="#cdktf-gke-auth.GKEAuth.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-gke-auth.GKEAuth.property.clusterCaCertificatePEM">clusterCaCertificatePEM</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-gke-auth.GKEAuth.property.clusterInfo">clusterInfo</a></code> | <code>@cdktf/provider-google.dataGoogleContainerCluster.DataGoogleContainerCluster</code> | *No description.* |
| <code><a href="#cdktf-gke-auth.GKEAuth.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-gke-auth.GKEAuth.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-gke-auth.GKEAuth.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-gke-auth.GKEAuth.property.kubeConfigRaw">kubeConfigRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-gke-auth.GKEAuth.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-gke-auth.GKEAuth.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `authCredentials`<sup>Required</sup> <a name="authCredentials" id="cdktf-gke-auth.GKEAuth.property.authCredentials"></a>

```typescript
public readonly authCredentials: AuthCredentials;
```

- *Type:* <a href="#cdktf-gke-auth.AuthCredentials">AuthCredentials</a>

---

##### `clientConfig`<sup>Required</sup> <a name="clientConfig" id="cdktf-gke-auth.GKEAuth.property.clientConfig"></a>

```typescript
public readonly clientConfig: DataGoogleClientConfig;
```

- *Type:* @cdktf/provider-google.dataGoogleClientConfig.DataGoogleClientConfig

---

##### `clusterCaCertificate`<sup>Required</sup> <a name="clusterCaCertificate" id="cdktf-gke-auth.GKEAuth.property.clusterCaCertificate"></a>

```typescript
public readonly clusterCaCertificate: string;
```

- *Type:* string

---

##### `clusterCaCertificatePEM`<sup>Required</sup> <a name="clusterCaCertificatePEM" id="cdktf-gke-auth.GKEAuth.property.clusterCaCertificatePEM"></a>

```typescript
public readonly clusterCaCertificatePEM: string;
```

- *Type:* string

---

##### `clusterInfo`<sup>Required</sup> <a name="clusterInfo" id="cdktf-gke-auth.GKEAuth.property.clusterInfo"></a>

```typescript
public readonly clusterInfo: DataGoogleContainerCluster;
```

- *Type:* @cdktf/provider-google.dataGoogleContainerCluster.DataGoogleContainerCluster

---

##### `context`<sup>Required</sup> <a name="context" id="cdktf-gke-auth.GKEAuth.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="cdktf-gke-auth.GKEAuth.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="cdktf-gke-auth.GKEAuth.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `kubeConfigRaw`<sup>Required</sup> <a name="kubeConfigRaw" id="cdktf-gke-auth.GKEAuth.property.kubeConfigRaw"></a>

```typescript
public readonly kubeConfigRaw: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="cdktf-gke-auth.GKEAuth.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### AuthCredentials <a name="AuthCredentials" id="cdktf-gke-auth.AuthCredentials"></a>

#### Initializer <a name="Initializer" id="cdktf-gke-auth.AuthCredentials.Initializer"></a>

```typescript
import { AuthCredentials } from 'cdktf-gke-auth'

const authCredentials: AuthCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-gke-auth.AuthCredentials.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-gke-auth.AuthCredentials.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-gke-auth.AuthCredentials.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `clusterCaCertificate`<sup>Required</sup> <a name="clusterCaCertificate" id="cdktf-gke-auth.AuthCredentials.property.clusterCaCertificate"></a>

```typescript
public readonly clusterCaCertificate: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="cdktf-gke-auth.AuthCredentials.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="cdktf-gke-auth.AuthCredentials.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

### GkeControlPlaneProps <a name="GkeControlPlaneProps" id="cdktf-gke-auth.GkeControlPlaneProps"></a>

#### Initializer <a name="Initializer" id="cdktf-gke-auth.GkeControlPlaneProps.Initializer"></a>

```typescript
import { GkeControlPlaneProps } from 'cdktf-gke-auth'

const gkeControlPlaneProps: GkeControlPlaneProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-gke-auth.GkeControlPlaneProps.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-gke-auth.GkeControlPlaneProps.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-gke-auth.GkeControlPlaneProps.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="cdktf-gke-auth.GkeControlPlaneProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="cdktf-gke-auth.GkeControlPlaneProps.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="cdktf-gke-auth.GkeControlPlaneProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---



