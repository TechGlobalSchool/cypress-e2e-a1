/// <reference types="cypress"/>

describe('Assertions', () => {
  beforeEach(() => {
    cy.contains('.card', 'HTML Elements').click()
  })

  it('Default Assertions', () => {
    cy
      // There is a default assertion
      // that this button must exist in the DOM before proceeding
      .get('#register_button')
      // since Cypress internally checks if the web element in the dom tree or not
      // we don't really need to do the below assertion
      .should('be.visible')
      // before we issuing the click, the button must be "actionable"
      // it can not be covered, disabled, or hidden from the view.
      .click()

    // This will fail becasue submit button is disabled
    // cy.get('[data-identifier="Focus & Blur & AutoFill"] > button').click()
  })

  it('Implicit Assertions', () => {
    cy.get('#main_heading').should('be.visible')

    // Using implicit assertions, assertion wont fail right away, instead
    // it waits specific amount of time and retries again and again
    // and if condition is still false, it fails.
    // cy.get('#main_heading').should('not.be.visible')

    // cy.get('#main_heading').should('eq', 'HTML Elements')
    // Object === 'HTML Elements'
    // <h1#main_heading> to equal HTML Elements

    cy.get('#main_heading').should('have.text', 'HTML Elements')

    cy.get('#main_heading').should('contain.text', 'Elements')
    cy.get('#main_heading').should('include.text', 'Elements')

    // cy.get('#main_heading').should('contain', 'Elements')
    // cy.get('#main_heading').should('include', 'Elements')

    cy.title().should('eq', 'TechGlobal Training | HTML Elements')

    /**
     * IMPORTANT NOTE
     *
     * Chainers like eq, include, MUST NOT be used against the WEB ELEMENTS. Web elements comes as a direct object
     * and you must use chainers like 'have.text', 'include.text' as an assertion.
     *
     * @example
     * cy.get('#main_heading').should('eq', 'Elements')                    => WRONG
     * cy.get('#main_heading').should('include', 'Elements')               => WRONG
     * Why ? It's because when we use 'eq' or 'include' chainer, we don't really specifiy what we want from the web element
     *
     * cy.title().should('eq', 'TechGlobal Training | HTML Elements')      => TRUE
     */

    cy.get('#main_heading').then(($el) => {
      cy.log(typeof $el)

      console.log($el)

      // cy.wrap($el).should('eq', 'HTML Elements')

      const ele = $el.text()
      cy.log(typeof ele)

      cy.wrap(ele).should('eq', 'HTML Elements')
      /// 'Yahya' === 'HTML Elements'
    })

    // const arr = {
    //   name: 'Yahya',
    //   age: 19,
    //   working: true,
    //   gender: 'male'
    // }
    /// arr === 'HTML Elements'
    // arr.name === 'HTML Elements'

    // have.attr chainer checks the element attribute property
    // it can get 2, or 3 arguments, and we can validate if element has specific attribute, and the value of it
    cy.get('#main_heading').should('have.attr', 'id')
    cy.get('#main_heading').should('have.attr', 'id', 'main_heading')

    cy.get('#checkbox_1').should('have.attr', 'type', 'checkbox')

    // have.length chainer validates how many web element our locator returns
    cy.get('[data-identifier*="e"]').should('have.length', 7)
    cy.get('[data-identifier*="e"]').should('have.length.greaterThan', 6)
    cy.get('[data-identifier*="e"]').should('have.length.gte', 7)

    cy.get('[data-identifier*="e"]').should('have.length.lessThan', 8)
    cy.get('[data-identifier*="e"]').should('have.length.lte', 7)

    // be.enabled checks if element is interactable
    cy.get('#checkbox_1').should('be.enabled')

    // have.value checks if input like text, textarea, email, password or dropdown has the given value
    cy.get('#text_input1')
      .type('TechGlobal')
      .should('have.value', 'TechGlobal')

    // be.checked checks if the INPUT type of radiobox OR checkbox is selected
    cy.get('#checkbox_1').check().should('be.checked')

    // have.css checks the css attribute and value
    cy.get('#main_heading').should('have.css', 'color')

    // Using and() you can do multiple assertions against the web element
    cy.get('#main_heading')
      .should('have.css', 'color', 'rgb(105, 105, 105)')
      .and('have.text', 'HTML Elements')
      .and('be.visible')

    /**
     * 1. Navigate to "https://www.techglobal-training.com/frontend/dynamic-tables"
     * 2. Click on Add Product Button > Model Opens
     * 3. Close the model and validate model is not visible
     */

    cy.visit('https://www.techglobal-training.com/frontend/dynamic-tables')

    cy.get('#add_product_btn').click()
    cy.get('.modal').should('be.visible')

    cy.get('.delete').click()
    cy.get('.modal').should('not.exist')
  })

  it('Explicit Assertions', () => {
    expect(true).to.equal(true)
    // expect(cy.url()).to.equal(cy.url())

    expect('TechGlobal').to.eq('TechGlobal')

    cy.get('#main_heading').should('have.text', 'HTML Elements')
    // expect(cy.get('#main_heading')).to.eq(cy.get('#main_heading'))

    cy.get('#main_heading').then(($el) => {
      cy.log($el)
      expect($el).to.eq($el)

      cy.log($el.text())
      cy.log($el.text().length)
      cy.log($el.length)
      cy.log($el.attr('id'))
      cy.log($el.css('color'))

      expect($el.text()).to.eq('HTML Elements')

      cy.wrap($el).should('have.text', 'HTML Elements')
      cy.wrap($el.text()).should('eq', 'HTML Elements')

      // cy.wrap($el) === cy.get('#main_heading') | Same things now
    })

    /**
     * NOTE: invoke() or without the invoke is preference. Has no performance difference or benefit one over the another.
     *
     * Only advantage of retreiving the property of web element using .then() directly without invoke is
     * it gives user flexibility to accesss multiple properties
     */
    cy.get('#main_heading')
      .invoke('text')
      .then((text) => {
        cy.log(typeof text)

        cy.log(text.toUpperCase().trim() + ' retrieved property')
      })

    cy.get('#main_heading').then(($el) => {
      const ele = $el.text()

      cy.log(ele.toUpperCase().trim() + ' retrieved property')

      expect(ele).equal('HTML Elements')
      expect(ele).to.equal('HTML Elements')
      expect(ele).to.eq('HTML Elements')
      expect(ele).to.equals('HTML Elements')

      expect(ele).to.include('Elements')

      expect($el).to.exist

      expect($el).to.have.length(1)
      expect($el).to.have.length.above(0)

      // check element attronute
      const attr = $el.attr('id')

      expect(attr).to.eq('main_heading')
    })

    cy.get('#checkbox_1').then(($el) => {
      expect($el).to.be.visible
      expect($el).to.be.enabled
      expect($el).not.to.be.checked
    })

    cy.get('#main_heading').should('have.css', 'color', 'rgb(105, 105, 105)')

    cy.get('#main_heading').then(($el) => {
      const css = $el.css('color')
      expect(css).to.eq('rgb(105, 105, 105)')
    })

    cy.get('#main_heading').then(($el) => {
      const ele = $el.text()
      expect(ele).to.equal('HTML Elements')

      cy.wrap(ele).should('eq', 'HTML Elements')
      cy.wrap(ele).should('includes', 'HTML Elements')

      cy.wrap($el).should('have.text', 'HTML Elements')
      cy.wrap($el).should('include.text', 'HTML Elements')
    })
  })

  it('each() - interacting with multiple web elements', () => {
    const arr = ['Hello World!', 'I like automation testing!']

    for (let i = 0; i < arr.length; i++) {
      cy.get('[data-identifier="Paragraphs"] > p')
        .eq(i)
        .should('have.text', arr[i])
    }

    cy.get('[data-identifier="Paragraphs"] > p').each(($el, index) => {
      cy.log(index)
      cy.log($el.text())

      cy.wrap($el)
        .should('have.text', arr[index])
        .and('be.visible')
        .and('have.length', 1)
    })

    /**
     * 1. On the Html Elements page
     * 2. From the "Headings" section, locate both "Programming Languages" and "Automation Tools" web elements
     * 3. Validate their texts with expected text
     * 4. Validate these elements are visible.
     */

    const headings = ['Programming Languages', 'Automation Tools']

    cy.get('[data-identifier="Headings"] > h4').each(($el, index) => {
      cy.wrap($el).should('have.text', headings[index]).and('be.visible')
    })

    /**
     * 1. On the Html Elements page
     * 2. From the "Checkboxes" section, locate all checkboxes
     * 3. Validate their texts with expected text
     * 4. Validate checkboxes are visible, and enabled
     */

    const exp = ['Apple', 'Microsoft', 'Tesla']

    cy.get('#checkbox-button-group div').each(($el, index) => {
      cy.wrap($el).find('label').should('have.text', exp[index])
      cy.wrap($el).find('input').should('be.visible').and('be.enabled')
    })

    // cy.get('#checkbox-button-group div').eq(0).find('input')
    // cy.get('#checkbox-button-group div').eq(0).find('label')
  })

  it('Assertion Practices', () => {
    /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     *
     * 3. From the "Text Inputs" section
     * 4. Validate text input 1 and text input 2 is enabled
     * 5. Validate text input 1 and text input 2 is not required
     * 6. Enter your name and last name
     */

    const names = ['Tech', 'Global']

    cy.get('[id^="text_input"]').each(($el, index) => {
      cy.wrap($el)
        .type(names[index])
        .should('be.enabled')
        .and('not.have.attr', 'required')
    })

    /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     *
     * 3. From the "Date Inputs" section
     * 4. Validate date input 1 and date input 2 is enabled
     * 5. Validate date input 1 and date input 2 is is not required
     * 6. Enter dates for both date input 1 and date input 2
     * 7. Validate value is changed to given dates.
     */

    /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     *
     * 3. From the "Dropdowns" section
     * 4. Validate dropdown 1 and dropdown 2 is enabled
     * 6. Enter Microsoft for dropdown 1 and Apple for dropdown 2
     * 7. Validate options are selected
     */
  })
})
