import { test } from '../app/fixtures/app-fixture';

test.describe('Send Authorization tests', () => {
  test.beforeEach(async ({ app }) => {
    await app.login.open();
    await app.login.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  });

  test('Test should Send Authorization', async ({ app }) => {
    await app.dashboard.expectLoaded();
    await app.sendAuthorization.open();
    await app.sendAuthorization.fillAndSend('auth1', 'QA Master', 'Hyatt Regency McCormick Place Credit Card Authorization');
    await app.confirmation.expectLoaded();
    await app.confirmation.backToDashboard();
    await app.dashboard.expectLoaded();
  });
});
