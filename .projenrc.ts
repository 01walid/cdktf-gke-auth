import { cdktf } from "projen";
import { JobPermission } from "projen/lib/github/workflows-model";
const project = new cdktf.ConstructLibraryCdktf({
  author: "Walid Ziouche",
  authorAddress: "hi@walid.dev",
  cdktfVersion: "^0.16",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.1",
  name: "cdktf-gke-auth",
  projenrcTs: true,
  repositoryUrl: "https://github.com/01walid/cdktf-gke-auth.git",
  prettier: true,
  releaseToNpm: true,
  jest: true,
  majorVersion: 1,
  gitpod: true,
  depsUpgradeOptions: {
    workflow: true,
    workflowOptions: {
      permissions: {
        pullRequests: JobPermission.WRITE,
        idToken: JobPermission.WRITE,
        contents: JobPermission.READ,
      },
    },
  },
  jestOptions: {
    jestConfig: {
      coverageProvider: "v8",
      testEnvironment: "node",
      testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
      preset: "ts-jest",
      setupFilesAfterEnv: ["<rootDir>/setup.js"],

      // transform: { "^.+\\.ts?$": ["ts-jest", {}] },
    },
  },
  publishToPypi: {
    distName: "cdktf-gke-auth",
    module: "cdktf_gke_auth",
  },

  // Requires "MAVEN_GPG_PRIVATE_KEY", "MAVEN_GPG_PRIVATE_KEY_PASSPHRASE", "MAVEN_PASSWORD",
  // "MAVEN_USERNAME", and "MAVEN_STAGING_PROFILE_ID" to be set.
  // publishToMaven: {
  //   javaPackage: "com.your-org.your-project-name ",
  //   mavenGroupId: "com.your-org",
  //   mavenArtifactId: "your-project-name",
  // },

  // Requires "NUGET_API_KEY" to be set.
  // publishToNuget: {
  //   dotNetNamespace: "01walid.CDKTFGKEAuth",
  //   packageId: "01walid.CDKTFGKEAuth",
  // },

  publishToGo: {
    gitUserName: "01walid",
    gitUserEmail: "hi@walid.dev",
    moduleName: "github.com/01walid/cdktf-gke-auth-go",
  },

  keywords: [
    "cdktf",
    "gke",
    "auth",
    "kubernetes",
    "k8s",
    "gcp",
    "google",
    "google-cloud",
    "constructs",
  ],

  // deps: ["cdktf@^0.16", "constructs@~10.2", "@cdktf/provider-google@^7.0"],
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.addPeerDeps(
  "cdktf@^0.16",
  "constructs@~10.2",
  "@cdktf/provider-google@^7.0"
);

project.gitpod?.addCustomTask({
  name: "Setup",
  init: "yarn install",
  command: "npx projen build",
});

project.synth();
