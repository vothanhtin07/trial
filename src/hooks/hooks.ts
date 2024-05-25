import { BeforeAll, AfterAll, Before, After, setDefaultTimeout, Status } from "@cucumber/cucumber"
import { Browser } from "@playwright/test"
import { invokeBrowser } from "../helper/browsers/browserManage"
import { getEnv } from "../helper/env/env"
import { allContextPages } from "./pageCreate"
setDefaultTimeout(120 * 10000)

let browser: Browser

BeforeAll(async function () {
    getEnv()
    browser = await invokeBrowser()
})

Before(async function () {
    console.log('Start new test')
})

After(async function ({ pickle, result }) {
    if (allContextPages.allContexts.length > 0) {
        for (let i = 0; i < allContextPages.allContexts.length; i++) {
            if (result?.status === Status.FAILED) {
                let screenshot = await allContextPages[`userPage${i + 1}`].screenshot()
                this.attach(screenshot, "image/png")
            }
            await allContextPages[`userPage${i + 1}`].close()
            await allContextPages.allContexts[i].close()
        }
    }
    allContextPages.allContexts = []
    allContextPages.allPages = []
})

AfterAll(async function () {
    await browser.close()
})

export { browser };