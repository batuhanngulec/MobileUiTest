/// <reference types="cypress" />

describe('Products Detail Control - Mobil Tests', () => {
    const device ='iphone-x';
    const url = 'https://magento.softwaretestingboard.com';

    it('Product Detail Check', () => {
        cy.viewport(device) // For show mobile device
        cy.visit(url);
        cy.get("[class='product-item']").should('be.visible');
        cy.get(".product-item-info img").first().click();
        
        cy.get(".fotorama__img").should('be.visible'); // Check Product Image
        cy.get(".fotorama__img").invoke('attr','src').should('not.be.empty'); // Check Empty Product Image

        cy.get(".page-title-wrapper").should('be.visible'); // Check Name Visible
        cy.get(".price").should('be.visible'); // Check Price Visible
        cy.get("[class='stock available']").should('include.text','\nIn stock'); // Check Product In Stock
    });

    it('Product Select Size and Select Color', () => {
        cy.viewport(device) // For show mobile device
        cy.visit(url);
        cy.get("[class='product-item']").should('be.visible');
        cy.get(".product-item-info img").first().click();

        cy.get("[option-label='XS']")
            .should('be.visible')
            .click();
        cy.get("[class='title']").should('have.text','XS'); // Check Selected Size

        cy.get("[class='swatch-option color']")
            .should('be.visible')
            .first()
            .click();

        cy.get(".title").should('be.visible'); // Check Selected Color


        cy.get("[id='qty']")
            .clear()
            .type('1{enter}');
        
    });

    it.only('Invalid Product Count', () => {
        const invalidCount1 = 0;
        const invalidCount2 = -1;
        const invalidCount3 = 10001;

        cy.viewport(device) // For show mobile device
        cy.visit(url);
        cy.get("[class='product-item']").should('be.visible');
        cy.get(".product-item-info img").first().click();

        cy.get("[option-label='XS']")
            .should('be.visible')
            .click();
        cy.get("[class='title']").should('have.text','XS'); // Check Selected Size

        cy.get("[class='swatch-option color']")
            .should('be.visible')
            .first()
            .click();

        cy.get(".title").should('be.visible'); // Check Selected Color


        cy.get("[id='qty']")
            .clear()
            .type(invalidCount1 + '{enter}');
        cy.get("[id='qty-error']").should('have.text','Please enter a quantity greater than 0.');

        cy.get("[id='qty']")
            .clear()
            .type(invalidCount2 + '{enter}');
        cy.get("[id='qty-error']").should('have.text','Please enter a quantity greater than 0.')

        cy.get("[id='qty']")
            .clear()
            .type(invalidCount3 + '{enter}');
        cy.get("[id='qty-error']").should('have.text','The maximum you may purchase is 10000.');
        
    });
});