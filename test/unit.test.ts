import { DataGoogleClientConfig } from "@cdktf/provider-google/lib/data-google-client-config";
import { DataGoogleContainerCluster } from "@cdktf/provider-google/lib/data-google-container-cluster";
import { GoogleProvider } from "@cdktf/provider-google/lib/provider";
import { Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest"; // Load types for expect matchers
import { GKETestingStack } from "./stack";

describe("Unit testing", () => {
  // All unit tests test the synthesized terraform code, it does not create real-world resources
  let stack: GKETestingStack;
  let synthedOutputJSON: string;

  beforeAll(() => {
    const app = Testing.app();
    stack = new GKETestingStack(app, "testing-stack");
    synthedOutputJSON = Testing.synth(stack);
  });

  it("should contain a google provider", () => {
    expect(synthedOutputJSON).toHaveProvider(GoogleProvider);
  });

  it("must contain a data google client config to be able to fetch the access token", () => {
    expect(synthedOutputJSON).toHaveDataSource(DataGoogleClientConfig);
  });

  it("must have the target container info", () => {
    expect(synthedOutputJSON).toHaveDataSourceWithProperties(
      DataGoogleContainerCluster,
      {
        location: "europe-west1",
        name: "my-cluster",
        project: "my-project",
      }
    );
  });

  it("must return the GKE login credential in the output", () => {
    const synthObject = JSON.parse(synthedOutputJSON);

    // Validate the cluster CA certificate presence and that it is sensitive
    expect(synthObject.output.clusterCaCertificate.value).toContain(
      "google_container_cluster.gke-auth"
    );
    expect(synthObject.output.clusterCaCertificate.sensitive).toBe(true);

    // Validate the token presence and that it is sensitive
    expect(synthObject.output.token.value).toContain(
      "data.google_client_config.gke-auth"
    );
    expect(synthObject.output.token.sensitive).toBe(true);

    // Host has to be defined
    expect(synthObject.output.host.value).toContain("https://");
  });
});
