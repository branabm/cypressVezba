import {registerPage} from '../../pageObjects/registerPage'
const data = require("../../fixtures/data.json")
const faker = require('faker');


describe("Register", () => {

    beforeEach(() => {
            cy.visit('/') 
            registerPage.clickRegisterButton()
    })

    
    it ('Registration', () => {
        registerPage.fillFirstName(data.register.firstName)
        registerPage.fillLastName(data.register.lastName)
        registerPage.fillEmail(faker.internet.email())
        registerPage.fillPassword(data.register.password)
        registerPage.fillPasswordConfirmation(data.register.passwordConfirmation)     
        registerPage.clickCheckbox()
        registerPage.clickSubmitButton()
    })
    it ('All empty fields', () => {
        registerPage.clickSubmitButton()
        cy.wait(1000)
    })
    it ('Without first name', () => {
        
        registerPage.fillLastName(data.register.lastName)
        registerPage.fillEmail(faker.internet.email())
        registerPage.fillPassword(data.register.password)
        registerPage.fillPasswordConfirmation(data.register.passwordConfirmation)     
        registerPage.clickCheckbox()
        registerPage.clickSubmitButton()
    })
    it ('Without last name', () => {
        registerPage.fillFirstName(data.register.firstName)
        
        registerPage.fillEmail(faker.internet.email())
        registerPage.fillPassword(data.register.password)
        registerPage.fillPasswordConfirmation(data.register.passwordConfirmation)     
        registerPage.clickCheckbox()
        registerPage.clickSubmitButton()
    })
    it('Without email', () => {
        registerPage.fillFirstName(data.register.firstName)
        registerPage.fillLastName(data.register.lastName)
        
        registerPage.fillPassword(data.register.password)
        registerPage.fillPasswordConfirmation(data.register.passwordConfirmation)     
        registerPage.clickCheckbox()
        registerPage.clickSubmitButton()
    })
    it ('Without password', () => {
        registerPage.fillFirstName(data.register.firstName)
        registerPage.fillLastName(data.register.lastName)
        registerPage.fillEmail(faker.internet.email())
        
        registerPage.fillPasswordConfirmation(data.register.passwordConfirmation)     
        registerPage.clickCheckbox()
        registerPage.clickSubmitButton()
    })
    it ('Without password confirmation', () => {
        registerPage.fillFirstName(data.register.firstName)
        registerPage.fillLastName(data.register.lastName)
        registerPage.fillEmail(faker.internet.email())
        registerPage.fillPassword(data.register.password)
            
        registerPage.clickCheckbox()
        registerPage.clickSubmitButton()
    })
    it ('Email without @', () => {
        registerPage.fillFirstName(data.register.firstName)
        registerPage.fillLastName(data.register.lastName)
        registerPage.fillEmail(data.register.emailWithoutMonkey)
        registerPage.fillPassword(data.register.password)
        registerPage.fillPasswordConfirmation(data.register.passwordConfirmation)     
        registerPage.clickCheckbox()
        registerPage.clickSubmitButton()
    })
    it ('Email without dot', () => {
        registerPage.fillFirstName(data.register.firstName)
        registerPage.fillLastName(data.register.lastName)
        registerPage.fillEmail(data.register.emailWithoutDot)
        registerPage.fillPassword(data.register.password)
        registerPage.fillPasswordConfirmation(data.register.passwordConfirmation)     
        registerPage.clickCheckbox()
        registerPage.clickSubmitButton()
    })
    it ('Password confirmation doesnt match', () => {
        registerPage.fillFirstName(data.register.firstName)
        registerPage.fillLastName(data.register.lastName)
        registerPage.fillEmail(faker.internet.email())
        registerPage.fillPassword(data.register.password)
        registerPage.fillPasswordConfirmation(data.register.wrongPassword8)     
        registerPage.clickCheckbox()
        registerPage.clickSubmitButton()
        registerPage.upozorenje.should('contain', 'The password confirmation does not match.')
    })
    it ('Password with only letters', () => {
        registerPage.fillFirstName(data.register.firstName)
        registerPage.fillLastName(data.register.lastName)
        registerPage.fillEmail(faker.internet.email())
        registerPage.fillPassword(data.register.passwordOnlyLetters)
        registerPage.fillPasswordConfirmation(data.register.passwordOnlyLetters)     
        registerPage.clickCheckbox()
        registerPage.clickSubmitButton()
        registerPage.upozorenje.should('contain', 'The password format is invalid.')
    })
    it ('Password less than 8 chars', () => {
        registerPage.fillFirstName(data.register.firstName)
        registerPage.fillLastName(data.register.lastName)
        registerPage.fillEmail(faker.internet.email())
        registerPage.fillPassword(data.register.passwordShort)
        registerPage.fillPasswordConfirmation(data.register.passwordShort)     
        registerPage.clickCheckbox()
        registerPage.clickSubmitButton()
        registerPage.upozorenje.should('contain', 'The password must be at least 8 characters.')
    })
    it ('Terms unchecked', () => {
        registerPage.fillFirstName(data.register.firstName)
        registerPage.fillLastName(data.register.lastName)
        registerPage.fillEmail(faker.internet.email())
        registerPage.fillPassword(data.register.password)
        registerPage.fillPasswordConfirmation(data.register.passwordConfirmation)     
        registerPage.checkbox.should('not.be.checked')
        
        registerPage.clickSubmitButton()
        registerPage.upozorenje.should('contain', 'The terms and conditions must be accepted.')
    })
    
    
 })


