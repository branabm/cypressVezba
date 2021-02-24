describe ('registration' , ()=> {
    it( 'visit gallery page' , () => {
        cy.visit("/")
    })
    it('registrationPage', ()=> {
        cy.get('li:nth-of-type(2) > .nav-buttons.nav-link').click()
    })
    it('registration', ()=> {
        cy.get('#first-name').clear();
        cy.get('#last-name').clear();
        cy.get('#email').clear();
        cy.get('#password').clear();
        cy.get('#password-confirmation').clear();
        cy.get('input[type=checkbox]').uncheck();
        cy.get('button[type=submit]').click();
    })
})

