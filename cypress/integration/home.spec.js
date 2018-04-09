describe('Home page', () => {
    context('Sample context', () => {
    
        before(() => {
            cy.visit('/');
        });
        
        it('should url be correct', () => {
            cy.url().should('include', 'localhost:4200');
        });
        
        it('should button be disabled when zero is being put into input', () => {
            cy.get('.input__draw__form')
                .clear()
                .type('0');
            
            cy.contains('Draw!').then(el => {
                expect(el).to.have.prop('disabled', true);
            });
        });

        it('should cards be drawn', () => {
            cy.get('.input__draw__form')
                .clear()
                .type('2');
            cy.contains('Draw!')
                .click();

            cy.get('.panel__card__photo').should('have.length', 2);
        });
        
        it('should remaining cards be correct', () => {
            cy.get('.drawn__element').then((el) => {
                expect(el.text()).to.contain('Remaining Cards: 50');
            });
        });

        it('should all cards be drawn', () => {
            cy.get('.input__draw__form')
                .clear()
                .type('50');
            cy.contains('Draw!')
                .click();

            cy.get('.panel__card__photo').should('have.length', 52);
            cy.get('.drawn__element').then((el) => {
                expect(el.text()).to.contain('Remaining Cards: 0');
            });
        });

        it('should no error message be shown', () => {
            cy.contains('Not enough cards to draw!').should('not.be.visible');
        });

        it('should new deck be chosen', () => {
            cy.get('input[name="checkbox"]')
                .check();
            cy.get('.input__draw__form')
                .clear()
                .type('1');
            cy.contains('Draw!')
                .click();

            cy.get('.panel__card__photo').should('have.length', 1);
        });

        it('should remaining cards always be 0, if all cards are drawn', () => {
            cy.get('input[name="checkbox"]')
                .uncheck();
            cy.get('.input__draw__form')
                .clear()
                .type('100');
                cy.contains('Draw!')
                .click();

            cy.wait(2000);
            cy.get('.drawn__element').then((el) => {
                expect(el.text()).to.contain('Remaining Cards: 0');
            });
        });
    });
});