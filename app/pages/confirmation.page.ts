import { step } from '../../misc/step';
import { BaseComponent } from '../base.component';

export class Confirmation extends BaseComponent {

  @step()
  async expectLoaded() {
    await this.page.getByRole('link', { name: 'Back To Dashboard' }).waitFor({ timeout: 60_000 });
  }

  @step()
  async backToDashboard() {
    await this.page.getByRole('link', { name: 'Back To Dashboard' }).click();
  }
}
