import { createGallery } from "../pageObjects/createGallery"
const data = require('../fixtures/data.json')

describe("Login Test", () => {

    //before(() => {
     // cy.loginCommand()
    //})

    it("Visit Create Gallery", () => {
        cy.visit('/')
        createGallery.clickCreateGallery()
    })
    let galId = '';
     it("Create a Gallery", () => {
        cy.intercept("POST", "https://gallery-api.vivifyideas.com/api/galleries", (req) => {
        }).as('succesfullCreate')
        createGallery.createGallery("title", "desc", "https://data.whicdn.com/images/19956498/original.jpg")

        cy.wait("@succesfullCreate").then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
            galId = interception.response.body.id
        })        
    }) 
    it("Logging Gallery ID", () => {
        console.log(galId)

    })
         it("Deleting a Gallery", () => {
        cy.intercept("DELETE", `https://gallery-api.vivifyideas.com/api/galleries/${galId}`, (req) => {
        }).as('succesfullDelete')
        cy.loginCommand()
        cy.visit(`https://gallery-app.vivifyideas.com/galleries/${galId}`)
        cy.contains("Delete Gallery").click()
        cy.wait("@succesfullDelete").then((interception) => {
            expect(interception.response.statusCode).to.equal(200)

        })        
    })

}) 