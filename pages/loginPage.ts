import { Page, expect } from "@playwright/test";

export class LoginPage {
    page: Page;
    context: any;
    username_input: any;
    loginLink: any;
    userName: any;
    password: any;
    loginBtn: any;
    tagName: any;
    loginFailureMessage: any;

    constructor(page: Page) {
        this.page = page
        this.loginLink = page.locator("//span[text()=' Login ']");
        this.userName = page.locator("//input[@placeholder='Username']")
        this.password = page.locator("//input[@placeholder='Password']")
        this.loginBtn = page.locator("//span[text()='Login']")
        this.tagName = page.locator("//a[@class='mat-mdc-menu-trigger mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-primary mat-mdc-button-base ng-star-inserted']")
        this.loginFailureMessage = page.locator("//mat-error[text()='Username or Password is incorrect.']")
    }

    async navigateToLoginScreen() {
        await this.page.goto(process.env.BASEURL, { timeout: 120 * 1000 });
    }

    async clickToLoginLink() {
        await this.loginLink.waitFor({ state: 'visible' })
        await this.loginLink.click()
    }

    async enterUserName(userName: any) {
        await this.userName.waitFor({ state: 'visible' })
        await this.userName.fill(userName)
        await this.page.waitForTimeout(1000)
    }

    async enterPassword(password: any) {
        await this.password.waitFor({ state: 'visible' })
        await this.password.fill(password)
        await this.page.waitForTimeout(1000)
    }

    async clickLogin() {
        await this.loginBtn.waitFor({ state: 'visible' })
        await this.loginBtn.click()
        await this.page.waitForTimeout(3000)
    }

    async checkLoginSuccess() {
        await this.tagName.waitFor({ state: "visible" })
        let text = await this.tagName.textContent()
        expect(text?.toString()).toContain('tinvo')
    }

    async checkLoginFail() {
        await expect(this.loginFailureMessage).toBeVisible()
    }
}