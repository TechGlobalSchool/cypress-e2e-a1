/**
 * Any debugging method we see here, make sure that you remove them until your debugging is done
 * So it wont stop or delay your execution when your tests are running in the CI/CD
 */
describe('Debugging in Cypress', () => {
  beforeEach(() => {
    cy.clickCard('HTML Elements')
  })

  it('cy.wait() - Hard Wait', () => {
    cy.get('#checkbox_1').check()

    // cy.wait(10000);

    cy.get('#checkbox_2').check()
  })

  it('cy.pause() - Debugging using pause', () => {
    cy.visit(`${Cypress.env('UI_URL')}/frontend`)
    cy.clickCard('Login Function')

    cy.get('#username').type(Cypress.env('UI_USERNAME'))

    // cy.pause()

    cy.get('#password').type(Cypress.env('UI_PASSWORD'))

    cy.get('#login_btn').click()

    cy.get('#success_lgn').should('be.visible')
  })

  it('cy.debug() - Debugging using debug', () => {
    cy.visit(`${Cypress.env('UI_URL')}/frontend`)
    cy.clickCard('Login Function')

    cy.get('#username').type(Cypress.env('UI_USERNAME'))

    cy.get('#password').type(Cypress.env('UI_PASSWORD'))

    cy.get('#login_btn').click()

    cy.debug()

    cy.get('#success_lgn').should('be.visible')
  })

  /**
   * Sometimes, the pause button the Sources tab may not work as expected.
   * Instead, you can use the debugger command in JavaScript to trigger the pause.
   * 
   * @example
   * 
   * debugger
   * 
   * Or, you can delay the debugger and make it trigger after specified amount of time
   * 
   * setTimeout(()=> {
   *   debugger
   * }, 2000)
   */
})
