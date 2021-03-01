//const locators = require("../fixtures/locators.json")
import { loginPage} from "../pageObjects/loginPage"
describe('login test', ()=> {
   
    before(() => {
        cy.visit("https://gallery-app.vivifyideas.com/")
        loginPage.visitLogin()
    })
    
     it("email input is empty", ()=> {
     loginPage.login('email','password')
     
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