// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add('clickCard', (link) => { 
  cy.contains(".card", link).click();
 })

 Cypress.Commands.add('selectDropdown', (locator, option) => {
  cy.get(locator).select(option)
 })

 /**
  * Create a Cypress Custom Function called 'focusLogin'
  * 
  * This function will get 2 arguments (email, name) 
  * 
  * It will enter the user email and first name on Focus section and click on the submit button
  */
 Cypress.Commands.add('focusLogin', (email, name) => {
  cy.get('[name="email"]').type(email)
  cy.get('.mb-3 > input').clear().type(name)
  cy.get('.mb-3 + button').click()
 })


/**
//  * Adds two numbers
//  * 
//  * @param {number} a - The first number
//  * @param {number} b - The second number
//  * @returns {number} - The sum of the two numbers
//  * 
//  * @xample
//  * // Returns 5
//  * add(2, 3)
//  * 
//  * @example
//  * // Returns 10
//  * add(7, 3)
//  */
//  export function add(a, b) {
//   return a + b
//  }


//  add(1, 2)                   => 3
//  add('Tech', 'Global')       => TechGlobal
//  add(1, 'Global')
//  add('Tech', 2)

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

Cypress.Commands.add('logText', { prevSubject: true }, (subject) => {
  const text = subject.text()
  cy.log(text)

  return cy.wrap(subject)
})

// cy.get('#element).logText()

// cy.get('#element).then((subject) => {
// const text = subject.text()
// cy.log(text)
// })

// Create a child function that validates the text of the web element
Cypress.Commands.add('haveText', { prevSubject: 'element' }, (subject, expectedText) => {
  // expect(subject.text()).to.equal(expectedText)
  cy.wrap(subject).should('have.text', expectedText)
})

// cy.get('#element).then((subject) => {
// cy.wrap(subject).should('have.text', expectedText)
// })

/**
 * Create a child custom command that will validate the attribute and the value of previous subject
 * 
 * NOTE: Function must be able handle, both conditions below
 * 
 * assertAttribute('target')
 * assertAttribute('target', '_blank')
 */

Cypress.Commands.add('assertAttribute', { prevSubject: 'element' }, (subject, attribute, value = null) => {
  if(value === null) {
    cy.wrap(subject).should('have.attr', attribute)
  } else {
    cy.wrap(subject).should('have.attr', attribute, value)
  }
})

//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })