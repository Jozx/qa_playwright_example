import { test, expect } from '@playwright/test'
import { LoginPage } from '../../src/pages/LoginPage'

test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.gotoLoginPage()
    await loginPage.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!)
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account')
})