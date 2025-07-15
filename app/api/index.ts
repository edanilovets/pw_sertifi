import { RequestHolder } from './requestHolder';
import { SendAuthorizationController } from './send-authorization.controller';

export class API extends RequestHolder {
  public readonly sendAuth = new SendAuthorizationController(this.request);
}
