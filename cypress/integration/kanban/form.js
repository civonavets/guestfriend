/// <reference types="cypress" />
const selector = require("../../fixtures/selectors")

describe('Form tests', function () {
    beforeEach(function () {
      cy.visit(selector.baseURI, {
      })
    })
    it('Checking if the Title is diplayed', ()=> {
        cy.get(selector.title)
        .should('contain', 'Kanban Board')
    })
    it('Checking if the searchbar is diplayed', ()=> {
        cy.get(selector.searchbar)
        .should('have.attr', 'placeholder', 'Search')
    })
    
    it('Checking if the "To Do" header is diplayed', ()=> {
        cy.get(selector.toDo)
        .should('contain', 'To Do')
    })
    it('Checking if the "To Do counter" header is diplayed', ()=> {
        cy.get(selector.toDoCounter)
        .should('contain', '0')
    })
    it('Checking if the "To Do column" header is diplayed', ()=> {
        cy.get(selector.toDoColumn)
        .should('be.visible')
    })
    it('Checking if the "To Do" + symbol is diplayed', ()=> {
        cy.get(selector.toDoAddTicket)
        .should('contain', '+')
    })

    it('Checking if the "In Progress" header is diplayed', ()=> {
        cy.get(selector.inProgress)
        .should('contain', 'In Progress')
    })
    it('Checking if the "In Progress counter" is diplayed', ()=> {
        cy.get(selector.inProgressCounter)
        .should('contain', '0')
    })
    it('Checking if the "In Progress" column is diplayed', ()=> {
        cy.get(selector.inProgressColumn)
        .should('be.visible')
    })
    it('Checking if the "In Progress" + symbol is diplayed', ()=> {
        cy.get(selector.inProgressAddTicket)
        .should('contain', '+')
    })

    it('Checking if the "Done" header is diplayed', ()=> {
        cy.get(selector.done)
        .should('contain', 'Done')
    })
    it('Checking if the "Done counter" is diplayed', ()=> {
        cy.get(selector.doneCounter)
        .should('contain', '0')
    })
    it('Checking if the "Done" column is diplayed', ()=> {
        cy.get(selector.doneColumn)
        .should('be.visible')
    })
    it('Checking if the "Done" + symbol is diplayed', ()=> {
        cy.get(selector.doneAddTicket)
        .should('contain', '+')
    })
})