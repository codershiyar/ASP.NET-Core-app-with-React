
import {InloggenApi,Gebruiker } from '../fixtures/TestGegevens.json'


// om cypress te starten ./node_modules/.bin/cypress open

let InloggenHeader = {  
    method: 'POST',
    url: InloggenApi,
    headers: {'Content-Type': 'application/json'  },
    body: JSON.stringify(Gebruiker)
  };

  export let InloggenAlsGebruiker = ()=>{
    cy.request(InloggenHeader).then((Response) => {
      expect(Response.body).to.have.keys('naam','roles','accessToken')
      cy.setCookie('IngelogdeGebruiker', JSON.stringify(Response.body), "/")
  });
}