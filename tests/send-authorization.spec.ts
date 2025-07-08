import { test, expect, Locator } from '@playwright/test';

async function secureFill(locator: Locator, value: string) {
  await locator.fill('*****'); // masks the value in the Playwright report
  await locator.evaluate((el, val) => {
    (el as HTMLInputElement).value = val;
  }, value);
}

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.LOGIN_URL!);
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.USER_EMAIL!);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await secureFill(page.getByRole('textbox', { name: 'Password' }), process.env.USER_PASSWORD!);
  await page.getByRole('button', { name: 'log in' }).click();
});

test('Test should Send Authorization', async ({ page }) => {
  await page.getByRole('button').filter({ hasText: 'Create New' }).click();
  await page.getByRole('link', { name: 'Send Authorization', exact: true }).click();
  await page.getByRole('textbox', { name: 'Folder Name *' }).click();
  await page.getByRole('textbox', { name: 'Folder Name *' }).fill('auth1');
  await page.locator('.k-input-values').first().click();
  await page.getByText('QA Master').click();
  await page.locator('span').filter({ hasText: 'Select one' }).first().click();
  await page.getByText('Hyatt Regency McCormick Place Credit Card Authorization', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Send Now' }).click();
  await page.getByRole('link', { name: 'Back To Dashboard' }).click();
  // Verify that the dashboard is visible after sending the authorization
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});
