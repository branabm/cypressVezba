const locators = require("../fixtures/locators2.json")
describe("Create gallery", () => {
    before(() => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get("a[href='/login']").click()
    })
    it('Login', () => {
        cy.get(locators.login.email).type('branaedit@test.com')
        cy.get(locators.login.password).type('12345678')
        cy.get(locators.login.submit).click()
    })
    it('All gallery filter', () => {
        cy.get(locators.allGallery.filter).type('cat')
        cy.get(locators.allGallery.buttonFilter).click()
    })
    it('All gallery load more', () => {
        cy.get(locators.allGallery.loadMore).click()
    })
})