/// <reference types="cypress" />

describe('Home page Mobil Ui Tests', () => {
    const device ='iphone-x';
    const url = 'https://magento.softwaretestingboard.com';

    it('Successful mobile view', () => {
        cy.viewport(device) // For show mobile device
        cy.visit(url);
        cy.get(".page-header").should('be.visible'); // Check Header
        cy.get(".page-main").should('be.visible'); // Check Main Section
        cy.get(".product-item").should('be.visible'); // Check Product Item
    });

    it('Check Navbar', () => {
        cy.viewport(device)
        cy.visit(url);
        cy.get("[data-action='toggle-nav']").should('be.visible');
        cy.wait(3000);
        cy.get("[data-action='toggle-nav']").click();
        cy.get("ul[id='ui-id-2'] > li").should('be.visible'); // Check Navbar Links
    });

    it('Check Submenu - Navbar', () => {
        cy.viewport(device)
        cy.visit(url);
        cy.get("[data-action='toggle-nav']").should('be.visible');
        cy.wait(3000);
        cy.get("[data-action='toggle-nav']").click();
        cy.get("ul[id='ui-id-2'] > li").should('be.visible');

        cy.get("ul[id='ui-id-2'] > li > a > span").contains("Men").click();
        cy.get("ul[aria-expanded='true'] > li").should('be.visible'); // Check Men's Menu Links
    });

    it.only('Check Search Button', () => {
        const searchWord = "Men t";
        const searchWord2 = "Men";
        const searchWord3 = "Me";
        cy.viewport(device);
        cy.visit(url); 
        cy.get("[for='search']").should('be.visible');
        cy.get("[for='search']").click();
        cy.get("[id='search']").type(searchWord + '{enter}');
        cy.get("[data-ui-id='page-title-wrapper']").should('have.text',"Search results for: "+"'"+searchWord + "'");
        cy.get("[class='item product product-item']").should('be.visible');

        cy.get("[for='search']").click();
        cy.get("[id='search']").clear().type(searchWord2 + '{enter}');
        cy.get("[data-ui-id='page-title-wrapper']").should('have.text',"Search results for: "+"'"+searchWord2 + "'");
        cy.get("[class='message notice']").should('include.text',"\n\nYour search returned no results.");


        cy.get("[for='search']").click();
        cy.get("[id='search']").clear().type(searchWord3 + '{enter}');
        cy.get("[data-ui-id='page-title-wrapper']").should('have.text',"Search results for: "+"'"+searchWord3 + "'");
        cy.get("[class='message notice']").should('include.text',"\n\nMinimum Search query length is 3");

    });
});