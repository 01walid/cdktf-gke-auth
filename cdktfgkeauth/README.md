<p align="center">
  <a href="https://opensource.org/licenses/Apache-2.0"><img src="https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg" alt="Apache 2.0 License"></a>
  <a href="https://gitpod.io/#https://github.com/01walid/cdktf-gke-auth"><img src="https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod" alt="Gitpod ready-to-code"></a>
  <a href="https://www.npmjs.com/package/cdktf-gke-auth"><img src="https://badge.fury.io/js/cdktf-gke-auth.svg" alt="npm version"></a>
  <a href="https://pypi.org/project/cdktf-gke-auth/"><img src="https://badge.fury.io/py/cdktf-gke-auth.svg" alt="PyPI version"></a>
  <a href="https://github.com/01walid/cdktf-gke-auth/actions/workflows/build.yml"><img src="https://github.com/01walid/cdktf-gke-auth/actions/workflows/build.yml/badge.svg" alt="Build badge"></a>
  <a href="https://github.com/01walid/cdktf-gke-auth/actions/workflows/release.yml"><img src="https://github.com/01walid/cdktf-gke-auth/actions/workflows/release.yml/badge.svg" alt="Release badge"></a>
</p>

# cdktf-gke-auth

Easily authenticate against a Google Kubernetes Engine (GKE) within your CDK for Terraform stack. Without the need to
resort to [Google's terraform GKE auth](https://github.com/terraform-google-modules/terraform-google-kubernetes-engine/tree/v26.1.1/modules/auth) module. You can avoid running `cdktf get` as pre-synth step.

This project uses [projen](https://github.com/projen/projen) and [jsii](https://github.com/aws/jsii) to compile the construct to Typescript, Python, Go and .Net (Java upon request).

## Example usage (Typescript)

Install the construct with: `yarn install cdktf-gke-auth`.

```go
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
    new KubernetesProvider(this, "kubernetes", {
      ...auth.authCredentials
    });

    // Or a helm provider like so:
     new HelmProvider(this, "helm", {
      kubernetes: auth.authCredentials,
    });
  }
}
```

The `GKEAuth` instance expose `host`, `clusterCaCertificate`, `clusterCaCertificatePEM`, and `token` you can use to authenticate using
any of the kubernetes popular cdktf providers.

For other languages examples, checkout this construct on [ConstructHub](https://constructs.dev/packages/cdktf-gke-auth/).
