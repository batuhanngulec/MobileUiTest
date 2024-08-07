class CartHelper{
    addToCart() {
        cy.get("[class='product-item']").should('be.visible'); // Check Home Page Product
        cy.get(".product-item-info img").first().click();
        
        cy.get("[option-label='XS']")
            .should('be.visible')
            .click();
        cy.get("[class='title']").should('have.text','XS');

        cy.get("[class='swatch-option color']")
            .should('be.visible')
            .first()
            .click();
        
        cy.get("[id='qty']")
            .clear()
            .type('1{enter}');
        
        cy.get("[id='product-addtocart-button']").click();

        cy.get('div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]').should('be.visible')
            .and('contain', 'You added Radiant Tee to your shopping cart'); // Check Succes Add To Cart
        return this;
    }
}
export default CartHelper;