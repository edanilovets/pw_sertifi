import { test } from '../../app/fixtures/app-fixture';

test.describe('Send Authorization tests', () => {
  test('Test should Send Authorization', async ({ app }) => {
    await app.sendAuthorization.open();
    await app.sendAuthorization.send('auth1', 'QA Master', 'Hyatt Regency McCormick Place Credit Card Authorization');
    await app.confirmation.expectLoaded();
    await app.confirmation.backToDashboard();
    await app.dashboard.expectLoaded();
  });
});
