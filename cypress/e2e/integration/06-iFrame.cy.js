/// <reference types="cypress"/>

describe("Assertions", () => {
  beforeEach(() => {
    cy.contains(".card", "IFrames").click();
  });

  it("iFrame", () => {
    cy.get("#form_frame")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .find("#first_name")
      .type("myName");
  })

    /**
     * Go to https://techglobal-training.com/frontend/
     * Click on the "IFrames" card
     * Enter "John" into the first name input box
     * Enter "Doe" into the last name input box
     * Click on the "SUBMIT" button
     * Validate the result equals "You entered: John Doe"
     */

    it('iFrame Test Case', () => {
      const arr = ["John", "Doe"];

      cy.get("#form_frame")
        .its("0.contentDocument.body")
        .find('[id$="name"]')
        .each(($el, index) => {
          cy.wrap($el).type(arr[index]);
        });
  
      cy.get("#form_frame").its("0.contentDocument.body").find('#submit').click()
  
      cy.get('#result').should('have.text', `You entered: ${arr.join(' ')}`)
    })
  });