import { App, Chart } from 'cdk8s';
import { Construct } from 'constructs';
import { NextJsService } from './nextjs-service';

export class NextJsChart extends Chart {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    new NextJsService(this, ns, {
      image: 'paulbouwer/hello-kubernetes:1.10.0',
    });
  }
}

const app = new App();
new NextJsChart(app, 'team-burnham');
app.synth();