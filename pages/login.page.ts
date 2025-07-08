import { Page, Locator } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  private async secureFill(locator: Locator, value: string) {
    await locator.fill('*****'); // masks the value in the report
    await locator.evaluate((el, val) => {
      (el as HTMLInputElement).value = val;
    }, value);
  }

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
