/// <reference types="cypress" />
const selector = require('../../fixtures/selectors')
const data = require('../../fixtures/data')

/*
Nice to have:
● A search field in the top right corner.
● Recover the current state in case of page refresh.
*/

describe('Extra Features', function () {
    beforeEach(() => {
        cy.restoreLocalStorageCache();
        Cypress.Cookies.preserveOnce('session_id', 'remember_token')
    });
    afterEach(() => {
        cy.saveLocalStorageCache();
    });
it('Checking searchbar exists and its functioning and reload state', () => {
    cy.create(selector.toDoCounter, selector.toDoAddTicket, selector.ticket)
    cy.dragCheck(selector.toDoCounter, selector.ticket)
    cy.get(selector.searchbar).should('be.visible')
    cy.get(selector.ticket).dblclick().then(() => {
        cy.get(selector.ticket).type('1').type('{enter}')
        cy.get(selector.toDoAddTicket)
            .type('2')
            .type('3')
            .type('3')
        })
        cy.get(selector.toDoCounter).should('contain', '4')
        cy.get(selector.searchbar).type('3')
        cy.get(selector.toDoCounter).should('contain', '2')
    })
    it('Checking if state is recovered after refresh', () => {
        cy.visit(selector.baseURI)
        cy.reload()
        cy.get(selector.toDoCounter).should('contain', '4')
 })
})