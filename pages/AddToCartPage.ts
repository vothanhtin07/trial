import { Page, expect } from "@playwright/test";

export class AddToCartPage {
    page: Page;
    context: any;
    username_input: any;
    loginLink: any;
    userName: any;
    password: any;
    loginBtn: any;
    tagName: any;
    loginFailureMessage: any;
    searchInput: any;
    searchBtn: any;
    addToCartBtn: any;
    cartBadgeCount: any;

    constructor(page: Page) {
        this.page = page
        this.searchInput = page.locator("input[type='search']");
        this.searchBtn = page.locator("mat-option[role='option'] span");
        this.addToCartBtn = page.locator("//button[@color='primary']//span[contains(text(),' Add to Cart')]")
        this.cartBadgeCount = page.locator("#mat-badge-content-0")
    }

    async searchBook(book: any) {
        await this.searchInput.fill(book)
        await this.searchBtn.click()
        await this.page.waitForTimeout(3000)
    }

    async addBookToCart() {
        await this.addToCartBtn.waitFor({ state: 'visible' })
        await this.addToCartBtn.click()
        await this.page.waitForTimeout(1000)
    }

    async checkCartBadge() {
        await this.cartBadgeCount.waitFor({ state: 'visible' })
        const badgeCount = await this.cartBadgeCount.textContent()
        expect(Number(badgeCount)).toBeGreaterThan(0)
    }
}