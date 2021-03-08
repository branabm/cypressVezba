const locators = require('../fixtures/locators.json')

describe("register test", ()=> {
    it('intercept request', () => {
        cy.intercept('POST','https://gallery-api.vivifyideas.com/api/auth/register', (req) => {
          }).as('succesfullRegistration'),
          cy.visit('/')
          
          cy.get(locators.register.navigationRegister).click()
          cy.get(locators.register.firstName).clear().type('Brani')
        cy.get(locators.register.lastName).clear().type('Test')
        cy.get(locators.register.email).clear().type('testtelst@test.com')
        cy.get(locators.register.password).clear().type('12345678')
        cy.get(locators.register.passwordConfirmation).clear().type('12345678')
        cy.get(locators.register.checkbox).check()
        cy.get(locators.register.submit).click()
        cy.wait('@succesfullRegistration').then((interseption) => {
            expect(interseption.response.statusCode).to.equal(200)
        })
    })

    
})