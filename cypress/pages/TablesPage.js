import BasePage from './BasePage'

class TablesPage extends BasePage {

  /* Locators */
  getCompanyTableHeaders() {
    return cy.get('.header')
  }
}

export default TablesPage