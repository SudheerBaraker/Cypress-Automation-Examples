/// <reference types = "cypress" />

class LoginPages {

    navigate() {

        cy.visit('https://admin-demo.nopcommerce.com/')

        
    }

    enterEmail(username) {

        cy.get('[id=Email]')
            .clear()
            .type(username)

        return this
    }

    enterPassword(pass){

        cy.get('#Password').clear().type(pass)

        return this
    }

    submit(){

        cy.get('[type=submit]').click()
    }



}

export default LoginPages