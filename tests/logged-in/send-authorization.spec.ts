import { test } from '../../app/fixtures/index';

test.describe('Send Authorization tests', () => {
  test(
    'Test should Send Authorization',
    {
      annotation: [{ type: 'JIRA', description: 'QA-1234' }],
      tag: ['@smoke', '@authorization'],
    },
    async ({ app }) => {
      await app.sendAuthorization.open();
      await app.sendAuthorization.send('auth1', 'QA Master', 'Hyatt Regency McCormick Place Credit Card Authorization');
      await app.confirmation.expectLoaded();
      await app.confirmation.backToDashboard();
      await app.dashboard.expectLoaded();
    },
  );
});
