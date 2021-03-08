
/*import{ allGalleries} from('../pageObjects/allGalleries')
import{ login } from( '../pageObjects/loginPage')
import{ register} from('../pageObjects/registerPage')*/

const locators = require('../fixtures/locators.json')
const data = require('../fixtures/data.json')

describe ("login test", () => {
    it("intercept requesta", () => {
        cy.intercept('POST','https://gallery-api.vivifyideas.com/api/auth/login', (req) => {
        }).as('succesfullLogin')
        cy.visit('/login')
        cy.get(locators.login.email).clear().type(data.login.email)
        cy.get(locators.login.password).clear().type(data.login.password)
        cy.get(locators.login.submit).click()
        cy.wait('@succesfullLogin').then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
        })
    })
})