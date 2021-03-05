import { loginPage} from "../pageObjects/loginPage"
import { createGallery} from "../pageObjects/createGallery" 
//const locators = require("../fixtures/locators.json")
//const errors = require("../fixtures/errors.json")
const data = require("../fixtures/data.json")

describe ('login and create gallery', ()=> {
   
   beforeEach(()=> {
       cy.visit("https://gallery-app.vivifyideas.com/")
       loginPage.visitLogin()
    })
    
    it ("login", ()=> {
      loginPage.login(data.login.email, data.login.password)  
    })
    it ('Go to create gallery page', () => {
      createGallery.clickCreateGalleryButton()
  })
    it ('Create new gallery', () => {
      createGallery.createNewGallery('a','Macka')
        cy.get(data.createGallery.images).type('https://upload.wikimedia.org/wikipedia/commons/f/fd/Macka_iz_Zup%C4%8Da.jpg')
      })
      it ("Create gallery one letter", () => {
        cy.get(createGallery.clickCreateGalleryButton).click()
        cy.get(createGallery.galleryTitle).type('a')
        cy.get(createGallery.galleryDescription).type('macka')
        
        cy.get(createGallery.galleryImage).type('https://upload.wikimedia.org/wikipedia/commons/f/fd/Macka_iz_Zup%C4%8Da.jpg')
        cy.get(createGallery.createSubmitButton).click()
        cy.get(createGallery.alert)
        .should("have.class", "alert alert-danger")
        createGallery.clickCreateGallery()
        createGallery.fillTitle('a')
        createGallery.fillDescription(data.createGallery.description)
        createGallery.fillImage(data.createGallery.image)
        createGallery.clickSubmitButton()
        createGallery.alert
        .should('contain', 'The title must be at least 2 characters.')
        .and("have.class", "alert alert-danger")
        .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        .and('be.visible')
    })
   /* it("password input is empty", ()=> {
        cy.get(locators.login.email).clear().type('branatest@test.com')
        cy.get(locators.login.password).clear().type('contain','12345678')
        cy.get(locators.login.submit).click()
        cy.get(errors.createGallery.alert).should('contain',errors.createGallery.passwordNotMatch)
        .and('have.css', 'background-color','rgb(248, 215, 218)')
        .and('include', 'cypress.io')
        
        })

       // it('wrong email', ()=> {
         //   cy.get(locators.login.email).clear().type('brnanaana@test.com')
           // cy.get(locators.login.password).clear().type('12345678')
           // cy.get(locators.login.submit).click()
       // })
       // it('wrong password', ()=> {
         //   cy.get(locators.login.email).clear().type('branatest@test.com')
          //  cy.get(locators.login.password).clear().type('12311245')
            //cy.get(locators.login.submit).click()
       // })
       // it('wrong password', ()=> {
         //   cy.get(locators.login.email).clear()
          //  cy.get(locators.login.password).clear()
           // cy.get(locators.login.submit).click()
        //})    */
})