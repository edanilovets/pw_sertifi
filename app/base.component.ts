import { type Page, type Locator } from '@playwright/test';

export interface LoadableComponent {
  open(): Promise<void>;
  expectLoaded(): Promise<void>;
}

export abstract class BaseComponent {
  constructor(protected page: Page) {}

  protected async secureFill(locator: Locator, value: string) {
    await locator.fill('*****'); // masks the value in the report
    await locator.evaluate((el, val) => {
      (el as HTMLInputElement).value = val;
    }, value);
  }

  async waitForTimeout(seconds: number): Promise<void> {
    await this.page.waitForTimeout(seconds * 1000);
  }
}
