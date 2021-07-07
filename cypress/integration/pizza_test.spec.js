describe('Test the user onboarding page', () => {

    it('Test that the registration form works properly', () => {
        cy.visit('http://localhost:3000/pizza');

        cy.get('#pizzaSize')
        .select('Medium')
        .should('have.value', 'Medium');

        cy.get('#cheese')
        .check()
        .should('be.checked');

        cy.get('#pepperoni')
        .check()
        .should('be.checked');

        cy.get('button')
        .should('not.be.disabled');

        cy.get('form')
        .submit();

    });
});