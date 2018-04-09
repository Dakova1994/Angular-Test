const drawButtonText = 'Draw!';
const newDeckCheckboxSelector = 'input[name="checkbox"]';
const numberOfCardsInputSelector = '.input__draw__form';

Cypress.Commands.add('typeNumberOfCards', (cards) => {
    cy.get(numberOfCardsInputSelector)
        .clear()
        .type(cards);
});

Cypress.Commands.add('clickDrawButton', () => {
    cy.contains(drawButtonText)
        .click();
});

Cypress.Commands.add('openApp', () => {
    cy.visit('/');
});

Cypress.Commands.add('checkNewDeck', () => {
    cy.get(newDeckCheckboxSelector)
        .check();
});

Cypress.Commands.add('uncheckNewDeck', () => {
    cy.get(newDeckCheckboxSelector)
        .uncheck();
});

Cypress.Commands.add('drawCards', (cards) => {
    cy.typeNumberOfCards(cards);
    cy.clickDrawButton();
});