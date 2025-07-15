import { test as base } from '@playwright/test';
import { App } from '../app';

type Fixtures = {
  app: App;
};

export const test = base.extend<Fixtures>({
  app: async ({ page }, use) => {
    console.log('app -> initializing app fixture');
    const app = new App(page);
    await use(app);
    // clean up after each test
    console.log('app -> cleaning up after test');
  },
});
