class AccountHelper{
    createNewCustomer(firstName,lastName,email,passwd,repasswd){
        cy.get(".page-title span").should('have.text','Create New Customer Account');
        cy.get("[id='firstname']").type(firstName);
        cy.get("[id='lastname']").type(lastName);
        cy.get("[id='email_address']").type(email);
        cy.get("[id='password']").type(passwd);
        cy.get("[id='password-confirmation']").type(repasswd);
        cy.get("button[class='action submit primary']").click();
        return this;
    }
}
export default AccountHelper;