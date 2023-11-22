import { test, expect } from "@playwright/test";
import { PlaywrightDevPageActions } from "../actions/playwright-dev";

test.describe("Grouping tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("getting started should contain table of contents", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPageActions(page);
    await playwrightDev.getStarted();
  });
});
