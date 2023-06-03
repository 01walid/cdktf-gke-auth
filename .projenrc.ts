import { cdktf } from 'projen';
const project = new cdktf.ConstructLibraryCdktf({
  author: 'Walid Ziouche',
  authorAddress: '01walid@users.noreply.github.com',
  cdktfVersion: '^0.13.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'cdktf-gke-auth',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/01walid/cdktf-gke-auth.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();