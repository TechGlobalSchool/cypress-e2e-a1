/// <reference types="cypress"/>

describe("CSS Locators", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/html-elements");
  });

  it("Understanding CSS Syntax - Locating using tags", () => {
    cy.get("button");

    cy.get("h3");

    cy.get("li");

    cy.get("input");
  });

  it("Understanding CSS Syntax - Locating using class and id", () => {
    cy.get("#checkbox-button-group");

    cy.get(".checkbox");

    // <div class= "Yoanna Yahya Lesia Aziz Tech Global"  id="repro">
    // cy.get('.Yoanna Yahya Lesia Aziz Tech Global')
    // cy.get('.Yoanna')
    // cy.get('.Yahya')
    // cy.get('.Lesia')
  });

  it("Understanding CSS Syntax - Locating using multiple selectors", () => {
    // <div class= "Yoanna Yahya Lesia Aziz Tech Global"  id="repro">
    // cy.get('.Yoanna Yahya Lesia Aziz Tech Global')
    // cy.get('.Yoanna')
    // cy.get('.Yahya')
    // cy.get('.Lesia')

    // cy.get('.Yoanna.Yahya.Lesia')
    // cy.get('div.Yoanna.Yahya.Lesia#repro')

    cy.get("label.checkbox.is-inline#tesla_check");
  });

  it("Understanding CSS Syntax - Locating child, descendant, adjacent web element", () => {
    /**
     * Child Selector (>):
     *
     * Description: Targets direct children of a specified parent element.
     */

    cy.get("#checkbox-button-group > h3");

    cy.get("#checkbox-button-group > div > #apple_check > #checkbox_1");

    cy.get("#checkbox-button-group > div > .checkbox > #checkbox_1.mr-2");

    /**
     * Descendant Selector (space):
     * Description: Targets elements nested anywhere within a specific parent.
     */

    cy.get("#checkbox-button-group #checkbox_1");

    // cy.get('#checkbox-button-group > div > #microsoft_check')
    cy.get("#checkbox-button-group  #microsoft_check");

    cy.get("body #microsoft_check");

    cy.get("div #unordered_list");

    cy.get("#ordered_list #ordered_list_item1");

    /**
     * Adjacent Sibling Selector (+):
     * Description: Targets an element immediately after another specified element at the same level in the hierarchy.
     */

    // Locates the immediate sibling of #ordered_list_item1, and after li
    cy.get("#ordered_list #ordered_list_item1 + li + li");

    // ~ Locates all the NEXT siblings of #ordered_list_item1
    cy.get("#ordered_list #ordered_list_item1 ~ li");

    /**
     * Grouping Selector (comma, ,):
     * Description: Combines multiple selectors into one rule set, allowing you to style
     * different elements with the same set of styles.
     */

    cy.get("#register_button, #main_header_container + button");

    cy.get("#text_input1, #facebook_link, #company_dropdown2");
  });

  it("Locating the web element using Attribute Selectors", () => {
    cy.get("#checkbox-button-group");
    cy.get(".checkbox");

    cy.get('[id="checkbox-button-group"]');
    cy.get('[class="checkbox"]');

    cy.get('[data-identifier="Paragraphs"]');
    cy.get('[value="Apple"]');
    cy.get('[class="checkbox"]');

    // Wildcard to target ANY web element
    cy.get("#checkbox-button-group > *");
  });

  it('Test Case', () => {
      /**
   * TEST CASE 1
   * Go to https://techglobal-training.com/frontend/dynamic-elements
   * Locate the below box is displayed
   * Box 1
   *
   * TEST CASE 2
   * Go to https://techglobal-training.com/frontend/dynamic-elements
   * Locate the below box is displayed
   * Box 2
   */

  /**
   * @example
   * 
   * <div id="box_asd12d"></>
   * 
   * contains     => [id*="box_"]
   * starts-with  => [id^="box_"]
   * ends-with    => [id$="box_"]
   */

  cy.visit('https://www.techglobal-training.com/frontend/dynamic-elements')

  cy.get('[id^="box_1_"]').should('be.visible')
  cy.get('[id^="box_2_"]').should('be.visible')

  cy.get('[id^="box_1_"], [id^="box_2_"]')

  cy.get('[id^="box_"]')
  })

  it('Targeting the web elements using - Pseudo Classes', () => {

    cy.get('#ordered_list > li:first-child')
    cy.get('#ordered_list > li:last-child')
    cy.get('#ordered_list > li:nth-child(2)')

    // cy.get('input:checked')

    cy.get('#microsoft_check input').check()

    cy.get('input:checked')

    cy.get('button:disabled')

    cy.get('input:not(#checkbox_1)')
    cy.get('input:not(input:checked)')

   //.form:not([state="hidden"])

   cy.get('.checkbox:where(#apple_check, #microsoft_check)')
  })
});
