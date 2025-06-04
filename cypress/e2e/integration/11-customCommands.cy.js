describe('Custom Commands', () => {

  beforeEach(() => {
    cy.clickCard('HTML Elements')
  })


  it('Parent Command', () => {
    /* Parent Command */
    // cy.get()
    // cy.url()
    // cy.title()
    // cy.visit()
    // cy.window()
    // cy.on()

    cy.selectDropdown('#company_dropdown1', 'Apple')

    cy.focusLogin('techglobal@tech.com', 'global')
  })

  it('Child Command', () => {

    /* Child Commands */
    // .should()
    // .find()
    // All the action commands

    cy.get('#main_heading').logText()

    cy.get('#main_heading').haveText('HTML Elements')

    cy.get('#main_heading').logText().haveText('HTML Elements')

    cy.get('#main_heading').assertAttribute('id')
    cy.get('#main_heading').assertAttribute('id', 'main_heading')


    // Action that clicks on the button that triggers UI modal
    // cy.get('modalButton').click()
    // cy.get('#modal').should('be.visible')

    // cy.get('#firstName').type('TechGlobal')


    // cy.log(Cypress.env('UI_URL', 'https://qa.techglobal-training.com'))
    cy.log(Cypress.env('UI_URL'))
  })
})