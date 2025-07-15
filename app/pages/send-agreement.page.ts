import { step } from '../../misc/step';
import { BaseComponent, LoadableComponent } from '../base.component';

export class SendAgreement extends BaseComponent implements LoadableComponent {

  @step()
  async open() {
    await this.page.goto('/SendingProcess');
  }

  @step()
  async expectLoaded() {
    await this.page.getByRole('heading', { name: 'Create Folder' }).waitFor();
    await this.page.getByRole('textbox', { name: 'Folder Name *' }).waitFor({
      state: 'visible',
    });
  }

  @step()
  async sendDocumentFromLibrary(folderName: string, firstParticipant: string, documentName: string) {
    await this.page.getByRole('textbox', { name: 'Folder Name *' }).fill(folderName);
    await this.page.locator('.k-input-values').first().click();
    await this.page.getByText(firstParticipant).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByText('Next').click();
    await this.page.getByText('Add Document From Library').click();
    await this.page.getByRole('gridcell', { name: documentName, exact: true }).click();
    await this.page.getByRole('button', { name: 'Add/Remove' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByText('Next').click();
    await this.page.getByText('Send Now').click();
  }
}
