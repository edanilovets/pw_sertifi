import { test, expect, Locator } from '@playwright/test';

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
});
