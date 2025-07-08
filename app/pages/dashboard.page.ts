import { expect } from '@playwright/test';
import { BaseComponent } from '../base.component';

export class DashboardPage extends BaseComponent {
  async open() {
    await this.page.goto(process.env.NG_BASE_URL!);
  }

  async expectUserToBeLoogedIn(userEmail: string) {
    await this.page.locator('#profile-button-popup').getByRole('link').click();
    await expect(this.page.getByText(userEmail)).toBeVisible();
  }
}
