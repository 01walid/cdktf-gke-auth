// cdktf-gke-auth
package cdktfgkeauth

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterStruct(
		"cdktf-gke-auth.AuthCredentials",
		reflect.TypeOf((*AuthCredentials)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"cdktf-gke-auth.ClusterInfo",
		reflect.TypeOf((*ClusterInfo)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"cdktf-gke-auth.GKEAuth",
		reflect.TypeOf((*GKEAuth)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "authCredentials", GoGetter: "AuthCredentials"},
			_jsii_.MemberProperty{JsiiProperty: "clientConfig", GoGetter: "ClientConfig"},
			_jsii_.MemberProperty{JsiiProperty: "clusterCaCertificate", GoGetter: "ClusterCaCertificate"},
			_jsii_.MemberProperty{JsiiProperty: "clusterCaCertificatePEM", GoGetter: "ClusterCaCertificatePEM"},
			_jsii_.MemberProperty{JsiiProperty: "clusterInfo", GoGetter: "ClusterInfo"},
			_jsii_.MemberProperty{JsiiProperty: "context", GoGetter: "Context"},
			_jsii_.MemberProperty{JsiiProperty: "fqn", GoGetter: "Fqn"},
			_jsii_.MemberProperty{JsiiProperty: "host", GoGetter: "Host"},
			_jsii_.MemberProperty{JsiiProperty: "kubeConfigRaw", GoGetter: "KubeConfigRaw"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "token", GoGetter: "Token"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_GKEAuth{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			_jsii_.InitJsiiProxy(&j.Type__cdktfITerraformDependable)
			return &j
		},
	)
}
