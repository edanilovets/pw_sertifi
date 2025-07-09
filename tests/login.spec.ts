import { test } from '../app/fixtures/app-fixture';

test.describe('Login Tests', () => {
  test(
    'Test should login successfully',
    {
      tag: ['@login', '@smoke'],
    },
    async ({ app }) => {
      //test.skip(true, 'Skipping test due to adjustments in login flow');
      await app.login.open();
      await app.login.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
      // Wait for the page to load and the profile button to appear
      await app.dashboard.expectUserToBeLoogedIn(process.env.USER_EMAIL!);
    },
  );
});
