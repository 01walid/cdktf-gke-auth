import { cdktf } from "projen";
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

  jest: true,
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

project.synth();
