import { Page } from "@playwright/test";
import { PlaywrightDevPage } from "../pages/playwright-dev";

export class PlaywrightDevPageActions {
  readonly page: Page;
  private readonly devPage: PlaywrightDevPage;

  constructor(page: Page) {
    this.page = page;
    this.devPage = new PlaywrightDevPage(page);
  }

  async getStarted() {
    const element = await this.devPage.started;
    await element.first().click();
    // await (await this.devPage.started).first().click();
  }
}
