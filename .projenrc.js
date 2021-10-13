const { Cdk8sTypeScriptApp } = require('projen');
const project = new Cdk8sTypeScriptApp({
  cdk8sVersion: '1.0.0-beta.10',
  defaultReleaseBranch: 'main',
  name: 'ssp-eks-sample-app',
  deps: [
    'cdk8s-plus-20',
  ],
});
project.synth();