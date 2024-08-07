/// <reference types="cypress" />
import CartHelper from "./cartHelper";
describe('Product Add To Cart - Mobil Tests', () => {
    const device ='iphone-x';
    const url = 'https://magento.softwaretestingboard.com';
    const cartHelper = new CartHelper(); 
    beforeEach(() => {
        cy.viewport(device);
        cy.visit(url);
    });

    it('Success Product Add To Cart', () => {
        cartHelper.addToCart();
    });

    it.only('Success Check Cart Page', () => {
        cartHelper.addToCart();
        cy.get("[class='action showcart']").click();
        cy.wait(1000);
        cy.get(".price-wrapper .price").should('be.visible');
        cy.get("[data-role='product-item']").first().should('be.visible');
        cy.get("[id='top-cart-btn-checkout']").click();
        cy.url().should('eq', "https://magento.softwaretestingboard.com/checkout/#shipping");
    });

    it('Success CheckOut', () => {

    });
});