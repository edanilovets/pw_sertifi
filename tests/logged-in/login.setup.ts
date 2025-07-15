import { test as setup } from '../../app/fixtures/index';
import { STORAGE_STATE } from '../../playwright.config';

setup('Log user in and verify profile access', async ({ app, page }) => {
  await app.login.open();
  await app.login.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  await app.dashboard.expectLoaded();

  // Save the storage state to persist the login session
  await page.context().storageState({ path: STORAGE_STATE });
});
