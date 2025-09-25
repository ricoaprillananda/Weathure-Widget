import { test, expect, Page } from '@playwright/test';

test('search city and view weather', async ({ page }: { page: Page }) => {
    await page.goto('/');
    await page.getByLabel('Location Picker').fill('Jakarta');
    await page.getByRole('button', { name: /search/i }).click();
    await expect(page.getByLabel('Current Weather')).toBeVisible();
});

test('toggle unit', async ({ page }: { page: Page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /°F/i }).click();
    await expect(page.getByLabel('Temperature')).toContainText('°F');
});

test('open hourly and daily details', async ({ page }: { page: Page }) => {
    await page.goto('/');
    await expect(page.getByLabel('Hourly Forecast')).toBeVisible();
    await expect(page.getByLabel('Daily Forecast')).toBeVisible();
});
