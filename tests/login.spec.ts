import { test } from '@playwright/test';
import { App } from '../app/app';

test.describe('Login Tests', () => {
  test(
    'Test should login successfully',
    {
      tag: ['@login', '@smoke'],
    },
    async ({ page }) => {
      //test.skip(true, 'Skipping test due to adjustments in login flow');
      const app = new App(page);
      await app.login.open();
      await app.login.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
      // Wait for the page to load and the profile button to appear
      await app.dashboard.isUserLoggedIn(process.env.USER_EMAIL!);
    },
  );
});
