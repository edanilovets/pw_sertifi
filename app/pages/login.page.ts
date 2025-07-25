import { BaseComponent } from '../base.component';

export class Login extends BaseComponent {
  async open() {
    await this.page.goto(process.env.LOGIN_URL!);
  }

  async login(username: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Username' }).click();
    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).click();
    await this.secureFill(this.page.getByRole('textbox', { name: 'Password' }), password);
    await this.page.getByRole('button', { name: 'log in' }).click();
  }
}
