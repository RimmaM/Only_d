import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://only.digital/en');
  await page.locator('footer').click();
  await page.locator('footer').getByRole('button', { name: 'Start a project' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByText('Creating digital products').click();
  //await page.locator('div').filter({ hasText: 'WorkAbout usWhat we' }).first().click();
  await page.goto('https://only.digital/en/projects');
  await page.locator('footer').click();
  await page.getByRole('main').getByText('bedptgvk').click();
  await page.locator('footer').getByRole('img').click();
  //await page.locator('div').filter({ hasText: 'WorkAbout usWhat we' }).first().click();
  await page.locator('footer').click();
  await page.locator('footer').getByRole('button', { name: 'Start a project' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('main').getByText('pdfpitchcompany presentation').click();
  //await page.locator('div').filter({ hasText: 'WorkAbout usWhat we' }).first().click();
  await page.locator('footer').click();
  await page.getByText('creative digital production').click();
});