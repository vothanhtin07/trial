import { Then, When } from "@cucumber/cucumber"
import { AddToCartPage } from "../../../pages/AddToCartPage";
import { allContextPages } from "../../hooks/pageCreate";


When('User{int} search for a {string}', async function (userNumber:any, book: any) {
    const addToCart = new AddToCartPage(allContextPages[`userPage${userNumber}`])
    await addToCart.searchBook(book)
});

When('User{int} add the book to the cart', async function (userNumber:any ) {
    const addToCart = new AddToCartPage(allContextPages[`userPage${userNumber}`])
    await addToCart.addBookToCart()
});

Then('User{int} the cart badge should get updated', async function (userNumber:any) {
    const addToCart = new AddToCartPage(allContextPages[`userPage${userNumber}`])
    await addToCart.checkCartBadge()
});