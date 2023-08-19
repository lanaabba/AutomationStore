/// <reference types="Cypress" />
let loginName = `lanaabbas`;
let randomNumber = Cypress._.random(0, 1000);
let Email=`lanaehab@gmail.com`;

Cypress.env('loginame', loginName);
Cypress.env('password', '12345');
Cypress.env('email',Email);




describe('Sign up & Sign in automation test ', () => {
  it('Sign in process', () => {
    cy.visit("https://automationteststore.com/index.php?rt=account/login");
    cy.get('#accountFrm > fieldset > .btn').click();
    cy.get('#AccountFrm_firstname').type("lana");
    cy.get('#AccountFrm_lastname').type("abbas");
    cy.get('#AccountFrm_email').type(Cypress.env('email'));
    cy.get('#AccountFrm_telephone').type("0798687675");
    cy.get('#AccountFrm_fax').type("lanaabbas@gmail.com");
    //my Address 
    cy.get('#AccountFrm_company').type("ltuc");
    cy.get('#AccountFrm_address_1').type("jordan");
    cy.get('#AccountFrm_address_2').type("idon");
    cy.get('#AccountFrm_city').type("irbid");
    cy.get('#AccountFrm_postcode').type("7868676");
    cy.get('#AccountFrm_country_id').select("Jordan");
    cy.get('#AccountFrm_zone_id').select("'Amman");
    // //Login Details
    cy.get('#AccountFrm_loginname').type(Cypress.env("loginame"));
    cy.get('#AccountFrm_password').type(Cypress.env("password"));
    cy.get('#AccountFrm_confirm').type(Cypress.env("password"));
    cy.get('[for="AccountFrm_newsletter1"]').click();
    cy.get('#AccountFrm_agree').click();
    cy.get('.col-md-2 > .btn').click();
  }); 
  it('Login ', () => {
    cy.visit("https://automationteststore.com/index.php?rt=account/login");
    cy.get('#loginFrm_loginname').type(Cypress.env("loginame"));
    cy.get('#loginFrm_password').type(Cypress.env("password"));
    cy.get('#loginFrm > fieldset > .btn').click();


  });

});
