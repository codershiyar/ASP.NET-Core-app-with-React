

// om cypress te starten ./node_modules/.bin/cypress open 
// Of npx cypress open
import {InloggenApi,InloggenGebruikers,GeblokkeerdeGebruiker,InloggenInDashboard } from './../fixtures/TestGegevens.json'

export let InloggenApiRequestInhoud = {
  method: 'POST',
  url: InloggenApi,
  failOnStatusCode: false,
  headers: {'Content-Type': 'application/json'  }
}

// We kunnen inloggen niet met inloggen pagina wegens Google reCaptcha daarom ga ik inloggen apis testen :)
describe('Inloggen Tests', () => {
  InloggenGebruikers.forEach(Gebruiker =>{
        it(`Inloggen als ${Gebruiker.Role}`, () => {
          InloggenApiRequestInhoud.body = JSON.stringify({Email: Gebruiker.Email, Password: Gebruiker.Wachtwoord})
          cy.request(InloggenApiRequestInhoud).then((Response) => {
          expect(Response.body).to.have.keys('naam','roles','accessToken')
          expect(Response.body.roles).include(Gebruiker.Role)
          });
      }) 
    }) 

 
  it('Gebruiker kan niet inloggen zonder dat hij zich kan bewijzen dan hij geen robot is', () => {
    cy.visit(InloggenInDashboard);
    cy.get("#Email").type("tester@gmail.com")
    cy.get("#Wachtwoord").type("1234@Ab")
    cy.get("#InloggenKnop").click();
    cy.get('body').should('be.visible').and("contain", `Inlogpoging is mislukt, u moet zich eerst verifieren dat u geen robot bent`)
    });
  })

  it(`Error 400 bij verkeerd inloginvoer & Gebruiker wordt geblockeerd na 3 fout inlogenpogins`, () => {

  cy.request({
    method: 'POST',
    url:InloggenApi,
    failOnStatusCode: false,
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(GeblokkeerdeGebruiker)
  }).then((Response) => {
    expect(Response.status).equal(400)
    expect(Response.body).has.property("message",'U account is geblokkerd, neem contact met Theater Laak')
  });

})

