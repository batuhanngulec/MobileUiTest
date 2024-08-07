/// <reference types="cypress" />
import AccountHelper from "./accountHelper";

describe('Create Account - Mobil Tests', () => {
    const device ='iphone-x';
    const url = 'https://magento.softwaretestingboard.com';
    const accountHelper = new AccountHelper();
    beforeEach(() => {
        cy.viewport(device);
        cy.visit(url);
    });

    
    it('UnSuccess Create Account', () => {
        cy.wait(2000);
        cy.get("[data-action='toggle-nav']").click();
        cy.get("[aria-controls='store.links']").click();
        cy.get("[id='store.links'] li:nth-child(3) a").click();

        accountHelper.createNewCustomer("Batu","GGGG","demodemo@gmail.com","demo1234!.","demo1234!.");
        cy.get("[role='alert'] div div").should('include.text','There is already an account with this email address.');
    });

    it.only('Success Create Account', () => {
        cy.wait(2000);
        cy.get("[data-action='toggle-nav']").click();
        cy.get("[aria-controls='store.links']").click();
        cy.get("[id='store.links'] li:nth-child(3) a").click();

        accountHelper.createNewCustomer("Batu","GGGG","demobg1903@gmail.com","demo1234!.","demo1234!.");
        cy.get("[role='alert'] div div").should('have.text',"Thank you for registering with Main Website Store.");
        cy.get('.box-content p').should('have.text', '\nBatu GGGG\ndemobg1903@gmail.com\n');
    });
    
});