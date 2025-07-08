import { BaseComponent } from './base.component';
import { DashboardPage } from './pages/dashboard.page';
import { LoginPage } from './pages/login.page';

export class App extends BaseComponent {
  login = new LoginPage(this.page);
  dashboard = new DashboardPage(this.page);
}
