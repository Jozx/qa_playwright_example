import { Page, Locator } from '@playwright/test'

export class LoginPage {
    private readonly emailInput: Locator
    private readonly passwordInput: Locator
    private readonly loginButton: Locator

    constructor(private page: Page) {
        this.emailInput = page.getByRole('textbox', { name: 'Email' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
    }

    async gotoLoginPage() {
        await this.page.goto('auth/login')
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}