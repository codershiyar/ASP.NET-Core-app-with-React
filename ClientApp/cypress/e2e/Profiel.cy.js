

import {InloggenAlsGebruiker} from './InloggenAuto'
import {ProfielPagina,ProfielPaginaMetId,ApiOphalenProfiel } from './../fixtures/TestGegevens.json'

describe('Profiel', () => {

  it('Inloggen als Gebruiker en zijn gegevens opslaan in cookies', () =>  
    {  
      InloggenAlsGebruiker();
    });


  it('Ophalen van Profiel Gegevens door profiel pagina ', () =>  
  {  
    InloggenAlsGebruiker();
    cy.visit(ProfielPagina);
    cy.intercept(ApiOphalenProfiel).as("GebruikerGegevens")
    cy.wait("@GebruikerGegevens").then((interception) => {
      expect(interception.response.statusCode).equal(200)
      expect(interception.response.body).to.have.keys('naam','omschrijving',"id",'geboortedatum','email')
    });
});


it('Profiel Gegevens bewerken door profiel pagina ', () =>  
{  
  let NieuweGegevens = {Geboortedatum: (1910+Math.floor(Math.random() * 100)+"-11-01"), Omschrijving: "Nieuwe omschrijving"+Math.random(), Naam:"Test"+Math.random()};
  InloggenAlsGebruiker();
  cy.visit(ProfielPagina);
  Object.keys(NieuweGegevens).forEach(Key=>{
    cy.get("#"+Key).clear().type(NieuweGegevens[Key]);
  })

  cy.intercept('PUT',ProfielPaginaMetId).as("Opslaan");
  cy.get("#GegevensWijzigen").click();
  cy.wait("@Opslaan").then((interception) => {
   cy.get("body").should("contain", "Opgeslagen")
    expect(interception.response.statusCode).equal(204);
    cy.visit(ProfielPagina);

    Object.keys(NieuweGegevens).forEach(Key=>{
      cy.get("#"+Key).should("have.value",NieuweGegevens[Key]);
    })
    
  });
 
});

})

