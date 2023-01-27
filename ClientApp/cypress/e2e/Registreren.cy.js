import {Gebruiker,RegistrerenPagina,RegistrerenApi} from './../fixtures/TestGegevens.json'

describe('Registreren', () => {
  it('Wachtwoord Validatie', () => {
    cy.visit(RegistrerenPagina);
    cy.get("#Wachtwoord").type("1234@Ab")
    cy.get('.GeldigInvoer').should('be.visible').should('have.length', 9)
  });

  it('Gebruiker kan niet zich registreren zonder dat hij zich kan bewijzen dan hij geen robot is', () => {
    cy.visit(RegistrerenPagina);
    cy.get("#Email").type(Gebruiker.Email)
    cy.get("#Wachtwoord").type(Gebruiker.Password)
    cy.get("#Naam").type(Gebruiker.Naam)
    cy.get("#Registreren").click();
    cy.get('body').should('contain',"Inlogpoging is misgelukt, u moet zich eerst verifieren dat u geen robot bent")
  });


  it('Melding "Gebruiker bestaat al" bij registreren met een bestaan email', () => {
    cy.request({
      method: 'POST',
      url: RegistrerenApi,
      failOnStatusCode: false,
      headers: {'Content-Type': 'application/json'  },
      body: JSON.stringify(Gebruiker)
    }).then((Response) => {
      expect(Response.body).has.property("message",'Gebruiker bestaat al')
  });
  });

})

