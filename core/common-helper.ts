import { Locator, Page, expect } from "@playwright/test";


export async function findUniqueLocator(locator: Locator) {
  await expect(locator).toHaveCount(1);
  return locator;
}

export async function isVisible(page: Page, locator: string): Promise<boolean> {
  await page.waitForSelector(locator);
  return await page.isVisible(locator);
}