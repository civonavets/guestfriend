/// <reference types="cypress" />
const selector = require('../../fixtures/selectors')
const data = require('../../fixtures/data')

/*
Important features: 
● 1 The + icon creates a new ticket in the correspondent column. 
● 2 Each ticket should be draggable to any other column. 
● 2.1 Once a user double clicks a ticket. He should be able to edit 
the content. 
● 2.2 The x icon shows only when the user's mouse hovers a ticket. 
If it is clicked, it should delete the selected ticket. 
● 3 The number of tickets in the column. 
*/

describe('Important Features', function () {
  beforeEach(function () {
    cy.clearCookies()
  });

  it('Checking if the "+" sign creates new ticket to "To Do" column', () => {
    cy.create(selector.toDoCounter, selector.toDoAddTicket, selector.ticket)
  })
  it('Checking if the "+" sign creates new ticket to "In Progress" column', () => {
    cy.create(selector.inProgressCounter, selector.inProgressAddTicket, selector.ticket)
  })
  it('Checking if the "+" sign creates new ticket to "Done" column', () => {
    cy.create(selector.doneCounter, selector.doneAddTicket, selector.ticket)
  })
  it('Checking if the new ticket is dragable to any column', () => {
    cy.create(selector.toDoCounter, selector.toDoAddTicket, selector.ticket)

    cy.get(selector.ticket).drag(selector.doneColumn).then(() => {
      cy.dragCheck(selector.doneCounter, selector.ticket)
    })
    cy.get(selector.ticket).drag(selector.inProgressColumn).then(() => {
      cy.dragCheck(selector.inProgressCounter, selector.ticket)
    })
    cy.get(selector.ticket).drag(selector.toDoColumn).then(() => {
      cy.dragCheck(selector.toDoCounter, selector.ticket)
    })
  })
  it('Checking if the user can edit the content of the ticket', () => {
    cy.create(selector.toDoCounter, selector.toDoAddTicket, selector.ticket)
    cy.get(selector.toDoColumn).click()
    cy.get(selector.ticket).should('contain', data.ticketPlaceholder)
    cy.get(selector.ticket).dblclick().then(() => {
      cy.get(selector.ticket).type(data.text).type('{enter}')
    })
    cy.get(selector.ticket).should('contain', data.text)
  })
  /* https://github.com/cypress-io/cypress/issues/10
  Cypress has a 'problem' with :hover state (even though it's easily done in inspector force state -> :hover) 
  so I used a forced CSS change to avoid { force: true } on an invisible button (bad practice) as a workaround
  */
  it('Checking for x icon showing on hover and the user deleting ticket', () => {
    cy.create(selector.toDoCounter, selector.toDoAddTicket, selector.ticket)
    cy.get(selector.deleteTicketButton).should('not.be.visible')
    cy.get(selector.deleteTicketButton).invoke('attr', 'style', 'visibility: visible').should('be.visible').click()
    cy.get(selector.ticket).should('not.exist')
  })
})
