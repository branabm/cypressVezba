const locators = require("../fixtures/locators.json")

describe('login test', ()=> {
   
    //before(() => {
       // cy.visit("https://gallery-app.vivifyideas.com/")
        //cy.get(locators.login.loginPage).click()
  //  })
    
     it("email input is empty", ()=> {
     cy.get(locators.login.email).clear()
     cy.get(locators.login.password).clear().type('12345678')
     cy.get(locators.login.submit).click()
})
    it("password input is empty", ()=> {
        cy.get(locators.login.email).clear().type('branatest@test.com')
        cy.get(locators.login.password).clear()
        cy.get(locators.login.submit).click()
        })

        it('wrong email', ()=> {
            cy.get(locators.login.email).clear().type('brnanaana@test.com')
            cy.get(locators.login.password).clear().type('12345678')
            cy.get(locators.login.submit).click()
        })
        it('wrong password', ()=> {
            cy.get(locators.login.email).clear().type('branatest@test.com')
            cy.get(locators.login.password).clear().type('12311245')
            cy.get(locators.login.submit).click()
        })
        it('wrong password', ()=> {
            cy.get(locators.login.email).clear()
            cy.get(locators.login.password).clear()
            cy.get(locators.login.submit).click()
        })    
 })