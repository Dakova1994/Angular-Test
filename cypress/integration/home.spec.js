describe('Deck of cards app', () => {
    context('Sample context', () => {
    
        before(() => {
            cy.visit('/');
        });

        it('should url be correct', () => {
            cy.url().should('include', 'localhost:4200');
        });
    });
});