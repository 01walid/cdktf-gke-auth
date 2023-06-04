package cdktfgkeauth


type ClusterInfo struct {
	ClusterName *string `field:"required" json:"clusterName" yaml:"clusterName"`
	Location *string `field:"required" json:"location" yaml:"location"`
	ProjectId *string `field:"required" json:"projectId" yaml:"projectId"`
}

