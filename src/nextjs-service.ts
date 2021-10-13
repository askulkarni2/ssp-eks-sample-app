import * as kplus from 'cdk8s-plus-20';
import { Construct } from 'constructs';

export interface NextJsServiceOptions {

  /** The Docker image to use for this service. */
  readonly image: string;

  /** Container Port */
  readonly port?: number;
}

export class NextJsService extends Construct {
  constructor(scope: Construct, namespace: string, options: NextJsServiceOptions) {
    super(scope, namespace);

    const image = options.image;
    const port = options.port || 80;

    const frontendDeployment = new kplus.Deployment(this, 'frontend', {
      containers: [
        {
          image,
        },
      ],
      metadata: {
        namespace,
      },
    });

    const frontendService = new kplus.Service(this, 'service', {
      metadata: {
        namespace,
      },
    });

    frontendService.addDeployment(frontendDeployment, {
      name: 'nextjs-frontend',
      port,
    });

    const ingress = new kplus.IngressV1Beta1(this, 'ingress', {
      metadata: {
        annotations: {
          'kubernetes.io/ingress.class': 'nginx',
        },
        namespace,
      },
    });
    ingress.addRule('/frontend', kplus.IngressV1Beta1Backend.fromService(frontendService));
  }
}