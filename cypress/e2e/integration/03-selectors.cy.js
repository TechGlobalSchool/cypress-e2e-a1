/// <reference types="cypress"/>

describe("Cypress Selectors", () => {
  // beforeEach(() => {
  //   cy.visit("https://www.techglobal-training.com/frontend");
  // });

  it("Practice Web Elements using - get() and contains()", () => {
    cy.get(".CardGrids_CardGrids__qDdyI").as("allCards");

    cy.get("@allCards");

    cy.get(".card").first();

    cy.get(".card").last();

    cy.get(".card").eq(8);

    // Locates the web element by its VISUAL text on the GUI
    cy.contains("HTML Elements");

    // This one tries to find element with "HTML Elements" visual text inside the web element
    // using .card class name
    cy.contains(".card", "HTML Elements");

    // This will do the same thing as above locator in more explicit way
    // It will look for card with "HTML Elements" visible text only inside the class name
    // ..CardGrids_CardGrids__qDdyI
    cy.get("@allCards").contains("HTML Elements");
  });

  it("Practice Web Elements using - find()", () => {
    cy.contains(".card", "HTML Elements").click();

    // This is an error, its because its a Child method
    // cy.find()

    // contains method only targets the web element by VISIBLE text on the UI
    cy.get("div").contains("Paragraph");

    // cy.get('#radio-button-group div')

    cy.get("#radio-button-group").find("div");
    cy.get("#radio-button-group").find("h3");
  });

  it("Practice Web Elements using - Siblings, Parent and Child", () => {
    cy.contains(".card", "HTML Elements").click();

    // next()         => Locates the immediate next sibling of a web element
    cy.get("div").contains("Paragraph").next();

    // nextAll()      => Locates the immediate next siblings of a web element
    cy.get("div").contains("Paragraph").nextAll();

    // prev()         => Locates the immediate previous sibling of a web element
    cy.get("#testing_paragraph").prev();

    // prevAll()      => Locates the immediate previous siblings of a web element
    cy.get("#testing_paragraph").prevAll();

    // Locates the immediate parent of a web element
    cy.get("#testing_paragraph").parent()

    // Locates all the parents of web element
    cy.get("#testing_paragraph").parents()

    // Locates the specific parent of web element
    cy.get("#testing_paragraph").parents('.HtmlElements_mainContainer__Fpn6M')

    // Locates until the specific parent
    cy.get("#testing_paragraph").parentsUntil('.SubPageLayout_wrapper__hs6Iw')

    // Locates all the child of web element
    cy.get('[data-identifier="Paragraphs"]').children()

    cy.get('#apple_check')
    .parents('#checkbox-button-group')
    .next()
    .find('div')
    .children()
    .find('input')
    .parent()
    .parent()
    .parent()
    .prev()
  });
});
