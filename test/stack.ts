import { GoogleProvider } from "@cdktf/provider-google/lib/provider";
import { TerraformOutput, TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { GKEAuth } from "../src";

export class GKETestingStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new GoogleProvider(this, "google-provider", {});

    const auth = new GKEAuth(this, "gke-auth", {
      clusterName: "my-cluster",
      location: "europe-west1",
      projectId: "my-project",
    });

    new TerraformOutput(this, "host", {
      value: auth.host,
    });

    new TerraformOutput(this, "clusterCaCertificate", {
      value: auth.clusterCaCertificate,
      sensitive: true,
    });

    new TerraformOutput(this, "token", {
      value: auth.token,
      sensitive: true,
    });
  }
}
