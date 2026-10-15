import { test, expect } from '@playwright/test';

test('opens the first venue from home page', async ({ page }) => {
  await page.goto('/');

  const firstVenue = page.locator('#venue-container a').first();
  await expect(firstVenue).toBeVisible();
  await firstVenue.click();

  await expect(
    page.getByRole('heading', { name: 'venue details' }),
  ).toBeVisible();
});
