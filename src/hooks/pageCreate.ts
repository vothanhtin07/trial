import { browser } from "./hooks";

export const allContextPages = {
    allContexts: [],
    allPages: []
}

export class PageClass {
    static async createPage(userNumber: number){
        let newContext = await browser.newContext ({
            recordVideo:{
                dir : 'videos/',
                size: {width:1280,height:720}
            }
        })
        let newPage = await newContext.newPage()
        allContextPages['allContexts'].push(newContext)
        allContextPages['allPages'].push(newPage)
        allContextPages[`userPage${userNumber}`] = newPage
    }
}