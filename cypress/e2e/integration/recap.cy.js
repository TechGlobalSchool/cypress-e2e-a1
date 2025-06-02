it('Project', () => {


  cy.visit('https://www.techglobal-training.com/frontend/booking')


  cy.contains('.label', 'Number of passengers').next().children().select('2')

  const arr = ['First', 'Alaska', 'Arizona', '2', 'Adult (16-64)', 'Child (2-11)']

  cy.get('.field > .label + div select').each(($el, index) => {
    cy.wrap($el).select(arr[index])
  })
})