import { test, expect, Locator } from '@playwright/test';

async function secureFill(locator: Locator, value: string) {
  await locator.fill('*****'); // masks the value in the Playwright report
  await locator.evaluate((el, val) => {
    (el as HTMLInputElement).value = val;
  }, value);
}

test.describe('Login Tests', () => {
  test(
    'Test should login successfully',
    {
      tag: ['@login', '@smoke'],
    },
    async ({ page }) => {
      await page.goto(process.env.LOGIN_URL!);
      await page.getByRole('textbox', { name: 'Username' }).click();
      await page.getByRole('textbox', { name: 'Username' }).fill(process.env.USER_EMAIL!);
      await page.getByRole('textbox', { name: 'Password' }).click();
      await secureFill(page.getByRole('textbox', { name: 'Password' }), process.env.USER_PASSWORD!);
      await page.getByRole('button', { name: 'log in' }).click();
      // Wait for the page to load and the profile button to appear
      await page.locator('#profile-button-popup').getByRole('link').click();
      await expect(page.getByText(process.env.USER_EMAIL!)).toBeVisible();
    },
  );
});
