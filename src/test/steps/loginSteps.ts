import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber"
import { LoginPage } from "../../../pages/loginPage";
import { PageClass, allContextPages } from "../../hooks/pageCreate";


setDefaultTimeout(120 * 10000)

Given('User{int} navigates to the application', async function (userNumber: number) {
    await PageClass.createPage(userNumber)
    const loginPage = new LoginPage(allContextPages[`userPage${userNumber}`])
    await loginPage.navigateToLoginScreen()
});

Given('User{int} click on the login link', async function (userNumber: number) {
    const loginPage = new LoginPage(allContextPages[`userPage${userNumber}`])
    await loginPage.clickToLoginLink()
});

Given('User{int} enter the username as {string}', async function (userNumber: number, username: any) {
    const loginPage = new LoginPage(allContextPages[`userPage${userNumber}`])
    await loginPage.enterUserName(username)
});

Given('User{int} enter the password as {string}', async function (userNumber: number, password: any) {
    const loginPage = new LoginPage(allContextPages[`userPage${userNumber}`])
    await loginPage.enterPassword(password)
});

When('User{int} click on the login button', async function (userNumber: number) {
    const loginPage = new LoginPage(allContextPages[`userPage${userNumber}`])
    await loginPage.clickLogin()
});

Then('User{int} with name {string} login should be success', async function (userNumber: number, name: string) {
    const loginPage = new LoginPage(allContextPages[`userPage${userNumber}`])
    await loginPage.checkLoginSuccess(name)
});

When('User{int} login should fail', async function (userNumber: number) {
    const loginPage = new LoginPage(allContextPages[`userPage${userNumber}`])
    await loginPage.checkLoginFail()
});