import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:5173';

const COMPONENTS = [
  'button', 'card', 'input', 'label', 'textarea', 'select',
  'checkbox', 'radio-group', 'switch', 'slider', 'badge', 'alert',
  'avatar', 'separator', 'skeleton', 'tabs', 'tooltip', 'popover',
  'dialog', 'sheet', 'dropdown-menu', 'accordion', 'progress', 'spinner',
] as const;

for (const component of COMPONENTS) {
  test(`${component} — visual regression`, async ({ page }) => {
    await page.goto(`${BASE}/#${component}`, { waitUntil: 'networkidle' });
    const target = page.locator(`[data-component="${component}"]`);
    await expect(target).toBeVisible({ timeout: 15_000 });
    await page.waitForTimeout(350);
    await expect(target).toHaveScreenshot(`${component}.png`, {
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });
}

test('dark mode — button', async ({ page }) => {
  await page.goto(`${BASE}/?theme=dark#button`, { waitUntil: 'networkidle' });
  const target = page.locator('[data-component="button"]');
  await expect(target).toBeVisible({ timeout: 15_000 });
  await expect(target).toHaveScreenshot('button-dark.png', { animations: 'disabled' });
});
