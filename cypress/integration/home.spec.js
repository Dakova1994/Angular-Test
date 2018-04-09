describe('Home page', () => {
    context('Sample context', () => {
    
        before(() => {
            cy.openApp();
        });
        
        it('should url be correct', () => {
            cy.url().should('include', 'localhost:4200');
        });
        
        it('should button be disabled when zero is being put into input', () => {
            cy.typeNumberOfCards(0);
            
            cy.contains('Draw!').then(el => {
                expect(el).to.have.prop('disabled', true);
            });
        });

        it('should cards be drawn', () => {
            cy.drawCards(2);

            cy.get('.panel__card__photo').should('have.length', 2);
        });
        
        it('should remaining cards be correct', () => {
            cy.get('.drawn__element').then((el) => {
                expect(el.text()).to.contain('Remaining Cards: 50');
            });
        });

        it('should all cards be drawn', () => {
            cy.drawCards(50);

            cy.get('.panel__card__photo').should('have.length', 52);
            cy.get('.drawn__element').then((el) => {
                expect(el.text()).to.contain('Remaining Cards: 0');
            });
        });

        it('should no error message be shown', () => {
            cy.contains('Not enough cards to draw!').should('not.be.visible');
        });

        it('should new deck be chosen', () => {
            cy.checkNewDeck();
            cy.drawCards(1);

            cy.get('.panel__card__photo').should('have.length', 1);
        });

        it('should remaining cards always be 0, if all cards are drawn', () => {
            cy.uncheckNewDeck();
            cy.drawCards(100);

            cy.wait(2000);
            cy.get('.drawn__element').then((el) => {
                expect(el.text()).to.contain('Remaining Cards: 0');
            });
        });
    });
});