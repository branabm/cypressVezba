class LoginPage {
    get emailInput(){
        return cy.get('#email')
    }
    get passwordInput(){
        return cy.get('#password')
    }
    get submitButton(){
        return cy.get('button[type="submit"]')
    }

    get navigationLogin() {
        return cy.get('a[href="/login"')
    }
    fillEmailInput(email) {
        this.emailInput.type(email)
    }
    fillPasswordInput(password) {
        this.passwordInput.type(password)
    }
   
    
    
}
export const loginPage = new LoginPage()