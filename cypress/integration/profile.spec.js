const data = require('./../fixtures/sample.td').testData;
const using = require('jasmine-data-provider');
const commonData = require('./../fixtures/sample.td').commonData;
const timeout = require('./../fixtures/sample.td').timeout;

describe('Profile page', () => {

    context('General', () => {
        before(() => {
            cy.openApp();
        });
        
        it('should open profile page', () => {
            cy.contains('Profile')
                .click();

            cy.contains('troll').should('be.visible');
        });
    });
});