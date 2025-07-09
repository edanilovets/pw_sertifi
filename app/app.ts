import { BaseComponent } from './base.component';
import { Dashboard } from './pages/dashboard.page';
import { Login } from './pages/login.page';
import { SendAuthorization } from './pages/send-authorization.page';
import { Confirmation } from './pages/confirmation.page';

export class App extends BaseComponent {
  login = new Login(this.page);
  dashboard = new Dashboard(this.page);
  sendAuthorization = new SendAuthorization(this.page);
  confirmation = new Confirmation(this.page);
}
