import { expect } from '@playwright/test';
import { BaseComponent, LoadableComponent } from '../base.component';
import { step } from '../../misc/step';

export class Dashboard extends BaseComponent implements LoadableComponent {
  @step()
  async open() {
    await this.page.goto(process.env.NG_BASE_URL!);
  }

  @step()
  async expectLoaded() {
    await this.page.getByRole('heading', { name: 'Dashboard' }).waitFor({ timeout: 60_000 });
    await this.page.getByRole('link', { name: 'Load Data' }).waitFor({ state: 'visible' });
  }

  @step()
  async expectUserToBeLoogedIn(userEmail: string) {
    await this.page.locator('#profile-button-popup').getByRole('link').click();
    await expect(this.page.getByText(userEmail)).toBeVisible({ timeout: 30_000 });
  }
}
