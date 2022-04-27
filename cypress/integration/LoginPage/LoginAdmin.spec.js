/// <reference types = "cypress" />
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPages from  "./LoginPages";

const login = new LoginPages()


Given('I navigate to Website',()=>{

    login.navigate()
})

When('I enter valid username', ()=>{

  login.enterEmail('admin@yourstore.com')
})

And('I enter valid password',()=>{
   login.enterPassword('admin')
})

And('I click on Login Button',()=>{
   login.submit()
})

Then('Validate the URL with /admin after login',()=>{

    cy.url().should('eq','https://admin-demo.nopcommerce.com/admin/')
})
