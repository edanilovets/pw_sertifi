import { type Page, type Locator } from '@playwright/test';
import { step } from '../misc/step';

export interface LoadableComponent {
  open(): Promise<void>;
  expectLoaded(): Promise<void>;
}

export abstract class BaseComponent {
  constructor(protected page: Page) {}

  @step()
  protected async secureFill(locator: Locator, value: string) {
    await locator.fill('*****'); // masks the value in the report
    await locator.evaluate((el, val) => {
      (el as HTMLInputElement).value = val;
    }, value);
  }

  @step()
  async waitForTimeout(seconds: number): Promise<void> {
    await this.page.waitForTimeout(seconds * 1000);
  }
}
