import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://only.digital/en');
  await page.goto('https://only.digital/en/projects');
  await page.locator('footer').click();
  await page.getByRole('button', { name: 'Start a project' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByText('Creating digital products').click();
  await page.getByRole('main').getByText('hello@only.digital+7 (495)').click();
  await page.goto('https://only.digital/en/company');
  await page.locator('footer').click();
  await page.locator('footer').getByRole('button', { name: 'Start a project' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByText('Creating digital products').click();
  await page.getByRole('main').getByText('hello@only.digital+7 (495)').click();
  await page.goto('https://only.digital/en/fields');
  await page.locator('footer').click();
  await page.locator('footer').getByRole('button', { name: 'Start a project' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByText('Creating digital products').click();
  await page.getByRole('main').getByText('hello@only.digital+7 (495)').click();
});