import { BaseComponent } from './base.component';
import { LoginPage } from './pages/login.page';

export class App extends BaseComponent {
  loginPage = new LoginPage(this.page);
}
