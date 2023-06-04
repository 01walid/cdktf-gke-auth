package cdktfgkeauth

import (
	_init_ "github.com/01walid/cdktf-gke-auth/go/cdktfgkeauth/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/01walid/cdktf-gke-auth/go/cdktfgkeauth/internal"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/cdktf/cdktf-provider-google-go/google/v7/datagoogleclientconfig"
	"github.com/cdktf/cdktf-provider-google-go/google/v7/datagooglecontainercluster"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

type GKEAuth interface {
	constructs.Construct
	cdktf.ITerraformDependable
	AuthCredentials() *AuthCredentials
	ClientConfig() datagoogleclientconfig.DataGoogleClientConfig
	ClusterCaCertificate() *string
	ClusterCaCertificatePEM() *string
	ClusterInfo() datagooglecontainercluster.DataGoogleContainerCluster
	Context() *string
	Fqn() *string
	Host() *string
	KubeConfigRaw() *string
	// The tree node.
	Node() constructs.Node
	Token() *string
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for GKEAuth
type jsiiProxy_GKEAuth struct {
	internal.Type__constructsConstruct
	internal.Type__cdktfITerraformDependable
}

func (j *jsiiProxy_GKEAuth) AuthCredentials() *AuthCredentials {
	var returns *AuthCredentials
	_jsii_.Get(
		j,
		"authCredentials",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_GKEAuth) ClientConfig() datagoogleclientconfig.DataGoogleClientConfig {
	var returns datagoogleclientconfig.DataGoogleClientConfig
	_jsii_.Get(
		j,
		"clientConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_GKEAuth) ClusterCaCertificate() *string {
	var returns *string
	_jsii_.Get(
		j,
		"clusterCaCertificate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_GKEAuth) ClusterCaCertificatePEM() *string {
	var returns *string
	_jsii_.Get(
		j,
		"clusterCaCertificatePEM",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_GKEAuth) ClusterInfo() datagooglecontainercluster.DataGoogleContainerCluster {
	var returns datagooglecontainercluster.DataGoogleContainerCluster
	_jsii_.Get(
		j,
		"clusterInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_GKEAuth) Context() *string {
	var returns *string
	_jsii_.Get(
		j,
		"context",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_GKEAuth) Fqn() *string {
	var returns *string
	_jsii_.Get(
		j,
		"fqn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_GKEAuth) Host() *string {
	var returns *string
	_jsii_.Get(
		j,
		"host",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_GKEAuth) KubeConfigRaw() *string {
	var returns *string
	_jsii_.Get(
		j,
		"kubeConfigRaw",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_GKEAuth) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_GKEAuth) Token() *string {
	var returns *string
	_jsii_.Get(
		j,
		"token",
		&returns,
	)
	return returns
}


func NewGKEAuth(scope constructs.Construct, id *string, props *ClusterInfo) GKEAuth {
	_init_.Initialize()

	if err := validateNewGKEAuthParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_GKEAuth{}

	_jsii_.Create(
		"cdktf-gke-auth.GKEAuth",
		[]interface{}{scope, id, props},
		&j,
	)

	return &j
}

func NewGKEAuth_Override(g GKEAuth, scope constructs.Construct, id *string, props *ClusterInfo) {
	_init_.Initialize()

	_jsii_.Create(
		"cdktf-gke-auth.GKEAuth",
		[]interface{}{scope, id, props},
		g,
	)
}

// Checks if `x` is a construct.
//
// Use this method instead of `instanceof` to properly detect `Construct`
// instances, even when the construct library is symlinked.
//
// Explanation: in JavaScript, multiple copies of the `constructs` library on
// disk are seen as independent, completely different libraries. As a
// consequence, the class `Construct` in each copy of the `constructs` library
// is seen as a different class, and an instance of one class will not test as
// `instanceof` the other class. `npm install` will not create installations
// like this, but users may manually symlink construct libraries together or
// use a monorepo tool: in those cases, multiple copies of the `constructs`
// library can be accidentally installed, and `instanceof` will behave
// unpredictably. It is safest to avoid using `instanceof`, and using
// this type-testing method instead.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
func GKEAuth_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateGKEAuth_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"cdktf-gke-auth.GKEAuth",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (g *jsiiProxy_GKEAuth) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		g,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

