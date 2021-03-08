class CreateGallery {

    get titleLessThan1Char() {
        return cy.get(".alert")
     }

     get titleMoreThan255Char(){
        return cy.get(".alert")
     }

     get WrongImageFormat(){
        return cy.get(".alert")
     }

    get titleInput() {
        return cy.get("#title")
    }}