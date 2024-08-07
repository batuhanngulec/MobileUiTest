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

    createShippingcreateShipping(email,firstName,lastname,street1,street2,street3,city,state,zipCode,country,phone){
        cy.get("[for='customer-email']").first().type(email);
        cy.get("[name='shippingAddress.firstname'] label").type(firstName);
        cy.get("[name='shippingAddress.lastname'] label").type(lastname);
        cy.get("[name='shippingAddress.company'] label").type(firstName);
        cy.get("[name='shippingAddress.street.0'] input").type(street1);
        cy.get("[name='shippingAddress.street.1'] input").type(street2);
        cy.get("[name='shippingAddress.street.2'] input").type(street3);
        cy.get("[name='shippingAddress.city'] input").type(city);
        cy.get("[name='shippingAddress.region_id'] select").select(state);
        cy.get("[name='shippingAddress.postcode'] label").type(zipCode);
        cy.get("[name='shippingAddress.country_id'] select").select(country);
        cy.get("[name='shippingAddress.telephone'] label").type(phone);
        cy.get("[class='table-checkout-shipping-method'] tr input").first().click();
        cy.get("[data-role='opc-continue']").click();
        return this;
    }
}
export default CartHelper;