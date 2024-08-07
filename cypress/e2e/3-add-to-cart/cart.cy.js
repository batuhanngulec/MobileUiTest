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

    it('Success Check Cart Page', () => {
        cartHelper.addToCart();
        cy.get("[class='action showcart']").click();
        cy.wait(1000);
        cy.get(".price-wrapper .price").should('be.visible');
        cy.get("[data-role='product-item']").first().should('be.visible');
        
    });

    it.only('Success Shipping', () => {
        cartHelper.addToCart();
        cy.get("[class='action showcart']").click();
        cy.wait(1000);
        cy.get("[id='top-cart-btn-checkout']").click();
        cy.url().should('eq', "https://magento.softwaretestingboard.com/checkout/#shipping");

        cartHelper.createShippingcreateShipping("demoo@gmail.com","demoname","denolastname","street1","street2","street3","citydemo","Arizona","12345","Turkey","5455458545");
        cy.get(".estimated-block .estimated-price").should('be.visible');
        cy.get("[class='primary'] button[class='action primary checkout']").click();
        cy.get(".page-title span").should('have.text','Thank you for your purchase!');
        cy.get(".checkout-success p span").should('be.visible');
    });
    
});