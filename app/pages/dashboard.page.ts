import { expect } from '@playwright/test';
import { BaseComponent, LoadableComponent } from '../base.component';

export class Dashboard extends BaseComponent implements LoadableComponent {
  async open() {
    await this.page.goto(process.env.NG_BASE_URL!);
  }

  async expectLoaded() {
    await this.page.getByRole('heading', { name: 'Dashboard' }).waitFor();
    await this.page.getByRole('link', { name: 'Load Data' }).waitFor({ state: 'visible' });
  }

  async expectUserToBeLoogedIn(userEmail: string) {
    await this.page.locator('#profile-button-popup').getByRole('link').click();
    await expect(this.page.getByText(userEmail)).toBeVisible();
  }
}
