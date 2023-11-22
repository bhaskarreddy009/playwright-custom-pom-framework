import { expect, type Locator, type Page } from "@playwright/test";
import { findUniqueLocator } from "../core/common-helper";

export class PlaywrightDevPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get started() {
    return findUniqueLocator(
      this.page.locator("a", { hasText: "Get started" })
    );
  }

  get installation() {
    return this.page.locator("h1", { hasText: "Installation" });
  }
}
