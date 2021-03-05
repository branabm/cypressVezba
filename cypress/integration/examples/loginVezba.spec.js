
const locators = require("../../fixtures/locators.json")
const data = require("../../fixtures/data.json")
describe('login test', ()=> {
   
    //  before(() => {
       // cy.visit("https://gallery-app.vivifyideas.com/")
      //  cy.get(locators.login.loginPage).click()
    //})
    
     it("login", ()=> {
        cy.get(locators.login.email).type('branaedit@test.com')
        cy.get(locators.login.password).type('12345678')
        cy.get(locators.login.submit).click()
    })
    it("visit createGallery", ()=> {
        cy.get(locators.createGallery.urlToCreate).click()
    })
    it("createGallery", ()=> {
        cy.get( locators.createGallery.title).type('test')
        cy.get(locators.createGallery.descripition).type('desc')
        cy.get(locators.createGallery.images).type('https://upload.wikimedia.org/wikipedia/commons/f/fd/Macka_iz_Zup%C4%8Da.jpg')
        cy.get(locators.createGallery.button).click()
    })

       
 })