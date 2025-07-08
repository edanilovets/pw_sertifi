import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login Tests', () => {
  test(
    'Test should login successfully',
    {
      tag: ['@login', '@smoke'],
    },
    async ({ page }) => {
      test.skip(true, 'Skipping test due to adjustments in login flow');
      const loginPage = new LoginPage(page);
      await loginPage.open();
      await loginPage.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
      // Wait for the page to load and the profile button to appear
      await page.locator('#profile-button-popup').getByRole('link').click();
      await expect(page.getByText(process.env.USER_EMAIL!)).toBeVisible();
    },
  );
});
