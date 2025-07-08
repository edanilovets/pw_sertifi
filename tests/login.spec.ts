import { test, expect, Locator } from '@playwright/test';

async function secureFill(locator: Locator, value: string) {
  await locator.fill('*****'); // masks the value in the Playwright report
  await locator.evaluate((el, val) => {
    (el as HTMLInputElement).value = val;
  }, value);
}

test(
  'test should login',
  {
    tag: ['@login', '@smoke'],
  },
  async ({ page }) => {
    await page.goto('/');

  },
);
