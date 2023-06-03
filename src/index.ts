import { DataGoogleClientConfig } from "@cdktf/provider-google/lib/data-google-client-config";
import { DataGoogleContainerCluster } from "@cdktf/provider-google/lib/data-google-container-cluster";
import { Fn, ITerraformDependable } from "cdktf";
import { Construct } from "constructs";

export interface GkeControlPlaneProps {
  readonly clusterName: string;
  readonly location: string;
  readonly projectId: string;
}

export interface AuthCredentials {
  readonly clusterCaCertificate: string;
  readonly host: string;
  readonly token: string;
}

export class GKEAuth extends Construct implements ITerraformDependable {
  readonly clusterInfo: DataGoogleContainerCluster;
  readonly clientConfig: DataGoogleClientConfig;

  constructor(scope: Construct, id: string, props: GkeControlPlaneProps) {
    super(scope, id);

    this.clusterInfo = new DataGoogleContainerCluster(this, "gke-cluster", {
      project: props.projectId,
      location: props.location,
      name: props.clusterName,
    });

    this.clientConfig = new DataGoogleClientConfig(this, "client-config", {});
  }

  get host(): string {
    return `https://${this.clusterInfo.endpoint}`;
  }

  get clusterCaCertificate(): string {
    return this.clusterInfo.masterAuth.get(0).clusterCaCertificate;
  }

  get clusterCaCertificatePEM(): string {
    return Fn.base64decode(
      this.clusterInfo.masterAuth.get(0).clusterCaCertificate
    );
  }

  get token(): string {
    return this.clientConfig.accessToken;
  }

  get context(): string {
    return this.clusterInfo.name;
  }

  get authCredentials(): AuthCredentials {
    return {
      clusterCaCertificate: this.clusterCaCertificatePEM,
      host: this.host,
      token: this.token,
    };
  }

  get kubeConfigRaw(): string {
    return `apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: ${this.clusterCaCertificate}
    server: ${this.host}
    name: ${this.context}
contexts:
- context:
    cluster: ${this.context}
    user: ${this.context}
    name: ${this.context}
current-context: ${this.context}
kind: Config
preferences: {}
users:
- name: ${this.context}
  user:
    token: ${this.token}
`;
  }

  get fqn(): string {
    return `${this.clusterInfo.fqn}-auth`;
  }
}
