const data = require('./../fixtures/sample.td').testData;
const using = require('jasmine-data-provider');
const commonData = require('./../fixtures/sample.td').commonData;
const timeout = require('./../fixtures/sample.td').timeout;

describe('Home page', () => {

    context('General', () => {
        before(() => {
            cy.openApp();
        });
        
        it('should url be correct', () => {
            cy.url().should('include', commonData.address);
        });
        
        it('should button be disabled when zero is being put into input', () => {
            cy.typeNumberOfCards(0);
            
            cy.contains('Draw!').then(el => {
                expect(el).to.have.prop('disabled', true);
            });
        });

        it('should enter click submit button', () => {
            cy.typeNumberOfCards('4{enter}');

            cy.get('.panel__card__photo').should('have.length', 4);
        });
    });

    using(data, d => {
        context('Detailed', () => {
            
            before(() => {
                cy.openApp();
            });

            it('should cards be drawn', () => {
                cy.drawCards(d.numberOfCardsToBeDrawn);
    
                cy.get('.panel__card__photo').should('have.length', d.numberOfCardsToBeDrawn);
            });
            
            it('should remaining cards be correct', () => {
                cy.get('.drawn__element').then((el) => {
                    expect(el.text()).to.contain(`Remaining Cards: ${d.numberOfCardsLeft}`);
                });
            });
    
            it('should all cards be drawn', () => {
                cy.drawCards(d.numberOfCardsLeft);
    
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
                cy.drawCards(d.newDeckNumberOfCardsToBeDrawn);
    
                cy.get('.panel__card__photo').should('have.length', d.newDeckNumberOfCardsToBeDrawn);
            });
    
            it('should remaining cards always be 0, if all cards are drawn', () => {
                cy.uncheckNewDeck();
                cy.drawCards(d.newDeckNumberOfCardsLeft + 1);
    
                cy.wait(timeout.short);
                cy.get('.drawn__element').then((el) => {
                    expect(el.text()).to.contain('Remaining Cards: 0');
                });
            });
        });
    });
});