//go:build no_runtime_type_checking

package cdktfgkeauth

// Building without runtime type checking enabled, so all the below just return nil

func validateGKEAuth_IsConstructParameters(x interface{}) error {
	return nil
}

func validateNewGKEAuthParameters(scope constructs.Construct, id *string, props *ClusterInfo) error {
	return nil
}

