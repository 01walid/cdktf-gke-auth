package cdktfgkeauth


type AuthCredentials struct {
	ClusterCaCertificate *string `field:"required" json:"clusterCaCertificate" yaml:"clusterCaCertificate"`
	Host *string `field:"required" json:"host" yaml:"host"`
	Token *string `field:"required" json:"token" yaml:"token"`
}

