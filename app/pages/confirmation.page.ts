import { BaseComponent } from '../base.component';

export class Confirmation extends BaseComponent {
  async expectLoaded() {
    await this.page.getByRole('link', { name: 'Back To Dashboard' }).waitFor( { timeout: 60000});
  }
  async backToDashboard() {
    await this.page.getByRole('link', { name: 'Back To Dashboard' }).click();
  }
}
