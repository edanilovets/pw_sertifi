import { test } from '../../app/fixtures/index';

test.describe('Send Agreement tests', () => {
  test(
    'Test should Send Agreement',
    {
      annotation: [{ type: 'JIRA', description: 'QA-3333' }],

      tag: ['@smoke', '@agreement'],
    },
    async ({ app }) => {
      await app.sendAgreement.open();
      await app.sendAgreement.sendDocumentFromLibrary('agreement1', 'QA Master', 'Hyatt Regency McCormick Place Credit Card Authorization');
      await app.confirmation.expectLoaded();
      await app.confirmation.backToDashboard();
      await app.dashboard.expectLoaded();
    },
  );
});
