import { test } from '@playwright/test';
import { App } from '../app/app';

test.describe('Send Authorization tests', () => {
  test.beforeEach(async ({ page }) => {
    const app = new App(page);
    await app.login.open();
    await app.login.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  });

  test('Test should Send Authorization', async ({ page }) => {
    const app = new App(page);
    await app.dashboard.expectLoaded();
    await app.sendAuthorization.open();
    await app.sendAuthorization.fillAndSend('auth1', 'QA Master', 'Hyatt Regency McCormick Place Credit Card Authorization');
    await app.confirmation.backToDashboard();
    await app.dashboard.expectLoaded();
  });
});
