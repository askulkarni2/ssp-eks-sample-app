const { Cdk8sTypeScriptApp } = require('projen');
const project = new Cdk8sTypeScriptApp({
  cdk8sVersion: '1.0.0-beta.10',
  defaultReleaseBranch: 'main',
  name: 'ssp-eks-sample-app',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();