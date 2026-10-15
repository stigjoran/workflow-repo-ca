import { test, expect } from '@playwright/test';

test.describe('Login', () => {
  test('should log in successfully with valid credentials', async ({
    page,
  }) => {
    await page.goto('/login/');
    await page.fill('input[name="email"]', process.env.TEST_EMAIL);
    await page.fill('input[name="password"]', process.env.TEST_PASSWORD);
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('http://127.0.0.1:3000/');
  });

  test('should show an error message with invalid credentials', async ({
    page,
  }) => {
    await page.goto('/login/');
    await page.fill('input[name="email"]', 'js2_ca@stud.noroff.no');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('http://127.0.0.1:3000/login/');
    await expect(page.getByRole('alert')).toBeVisible();
    await expect(page.getByRole('alert')).toHaveText(
      'Invalid email or password',
    );
  });
});
