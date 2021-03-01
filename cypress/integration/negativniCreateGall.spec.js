const locators = require("../fixtures/locators1.json")
describe("Create gallery", () => {
    before(() => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get("a[href='/login']").click()
    })
    it('Login good', () => {
        cy.get(locators.login.email).type('branaedit@test.com')
        cy.get(locators.login.password).type('12345678')
        cy.get(locators.login.submit).click()
    })
    it('Visit my gallery', () => {
        cy.get("a[href='/create']").click()
    })
    it('Create gallery', () => {
        cy.get(locators.gallery.title).type('macka')
        cy.get(locators.gallery.description).type('desc')
        cy.get(locators.createGallery.images).type('https://upload.wikimedia.org/wikipedia/commons/f/fd/Macka_iz_Zup%C4%8Da.jpg')
        cy.get(locators.gallery.button).click()
    })
    })