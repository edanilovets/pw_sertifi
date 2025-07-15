import { step } from '../../misc/step';
import { BaseComponent, LoadableComponent } from '../base.component';

export class SendAuthorization extends BaseComponent implements LoadableComponent {
  @step()
  async open() {
    await this.page.goto('/SendAuth');
  }

  @step()
  async expectLoaded() {
    await this.page.getByRole('heading', { name: 'Send Authorization' }).waitFor();
    await this.page.getByRole('textbox', { name: 'Folder Name *' }).waitFor({
      state: 'visible',
    });
    await this.page.getByRole('button', { name: 'Send Now' }).waitFor({
      state: 'visible',
    });
  }

  @step()
  async send(folderName: string, firstParticipant: string, documentName: string) {
    await this.page.getByRole('textbox', { name: 'Folder Name *' }).fill(folderName);
    await this.page.locator('.k-input-values').first().click();
    await this.page.getByText(firstParticipant).click();
    await this.page.locator('span').filter({ hasText: 'Select one' }).first().click();
    await this.page.getByText(documentName, { exact: true }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Send Now' }).click();
  }
}
