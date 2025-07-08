import { test, expect } from '@playwright/test';
import { App } from '../app/app';

test.describe('Login Tests', () => {
  test(
    'Test should login successfully',
    {
      tag: ['@login', '@smoke'],
    },
    async ({ page }) => {
      test.skip(true, 'Skipping test due to adjustments in login flow');
      const app = new App(page);
      await app.loginPage.open();
      await app.loginPage.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
      // Wait for the page to load and the profile button to appear
      await page.locator('#profile-button-popup').getByRole('link').click();
      await expect(page.getByText(process.env.USER_EMAIL!)).toBeVisible();
    },
  );
});
