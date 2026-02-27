import { test, expect } from '@playwright/test'
import { LoginPage } from '../../src/pages/LoginPage'

test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.gotoLoginPage()
    await loginPage.login('[EMAIL_ADDRESS]', 'password')
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/')
})