/// <reference types="cypress" />

describe('Products Control - Mobil Tests', () => {
    const device ='iphone-x';
    const url = 'https://magento.softwaretestingboard.com';

    it('Homepage Product Check', () => {
        cy.viewport(device) // For show mobile device
        cy.visit(url);
        cy.get("[class='product-item']").should('be.visible');
        
        cy.get("[class='product-image-photo']").each(($productImage) => {
            cy.wrap($productImage).should('be.visible'); // check product's img
            cy.wrap($productImage).invoke('attr', 'src').should('not.be.empty'); // check empty product's img
        });
            
        
        cy.get('.product-item-name').each(($productName) => {
            cy.wrap($productName).should('be.visible'); // Check Product Names
            cy.wrap($productName).should('not.be.empty'); // Check Empty Product Names
        });
    
        cy.get("span[class='price']").each(($productPrice) =>{
            cy.wrap($productPrice).should('be.visible'); // Check Product Prices
            cy.wrap($productPrice).should('not.be.empty'); // Check Empty Product Prices
        });

        cy.get(".product-item-actions button").each(($productAddChart) =>{
            cy.wrap($productAddChart).should('be.visible'); // Check Product Add Chart Button
        });
    });
});