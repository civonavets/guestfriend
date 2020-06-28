module.exports = {

baseURI: 'https://milos-kanban-board.netlify.app/',
title: '.sc-fzokOt',
searchbar: '[data-testid=search]',

toDo: ':nth-child(1) > .sc-AxheI > .sc-AxmLO',
toDoCounter: ':nth-child(1) > .sc-AxheI > .sc-fzozJi',
toDoColumn: ':nth-child(1) > .sc-fzoLsD',
toDoAddTicket: ':nth-child(1) > .sc-AxheI > [data-testid=add-ticket-button]',

inProgress: ':nth-child(2) > .sc-AxheI > .sc-AxmLO',
inProgressCounter: ':nth-child(2) > .sc-AxheI > .sc-fzozJi',
inProgressColumn: ':nth-child(2) > .sc-fzoLsD',
inProgressAddTicket: ':nth-child(2) > .sc-AxheI > [data-testid=add-ticket-button]',

done: ':nth-child(3) > .sc-AxheI > .sc-AxmLO',
doneCounter: ':nth-child(3) > .sc-AxheI > .sc-fzozJi',
doneColumn: ':nth-child(3) > .sc-fzoLsD',
doneAddTicket: ':nth-child(3) > .sc-AxheI > [data-testid=add-ticket-button]',

ticket: '[data-testid=ticket]',
ticketTittle: '.sc-AxhCb',

multTic1: ':nth-child(1) > .sc-fzoLsD > :nth-child(1) > [data-testid=ticket]',
multTicNm2: ':nth-child(1) > .sc-fzoLsD > :nth-child(1) > [data-testid=ticket] > .sc-AxhCb',

ads: ':nth-child(2) > .sc-fzoLsD > :nth-child(1) > [data-testid=ticket]',
ads2: ':nth-child(2) > .sc-fzoLsD > :nth-child(1) > [data-testid=ticket] > .sc-AxhCb',

deleteTicketButton: '[data-testid=delete-ticket-button]',


}