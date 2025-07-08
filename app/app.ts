import { BaseComponent } from './base.component';
import { DashboardPage } from './pages/dashboard.page';
import { LoginPage } from './pages/login.page';

export class App extends BaseComponent {
  loginPage = new LoginPage(this.page);
  dashboardPage = new DashboardPage(this.page);
}
