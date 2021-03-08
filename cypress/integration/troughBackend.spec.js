describe("Login test", ()=> {
    before(()=> {
        cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login',
        { email: "branatest@test.com", password: "12345678" }
        )
    .its('body').then((identity) => {
        window.localStorage.setItem('token',identity.access_token);
    })
    
})

it ('visit gallery', ()=> {
    cy.visit('/')
})

})
