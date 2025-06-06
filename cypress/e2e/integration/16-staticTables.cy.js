import TablesPage from "../../pages/TablesPage"

describe('Static Tables', { tags: '@regression' }, () => {

  const tablesPage = new TablesPage()

  beforeEach(() => {
    cy.clickCard('Tables')

    cy.fixture('example').then(function(data) {
      this.headers = data.headers
    })
  })


  /**
   * TEST CASE
   * 
   * Navigate to frontend page and click on the Tables card
   * Validate the headers of the Static Table are "Rank", "Company", "Employees", "Country"
   * 
   * NOTE: Use Page Object modal, and craete necessary page or pages
   * NOTE 2: Also, validate the table headers using Fixture
   */
  it('Verify the headers of the table', { tags: '@table' }, function() {

    tablesPage.getCompanyTableHeaders().each(($el, index) => {
      cy.wrap($el).should('have.text', this.headers[index])
    })
  })
})