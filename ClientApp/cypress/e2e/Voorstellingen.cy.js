import {VoorstellingenPagina,VoorstellingenApi,TestVoorstelling} from './../fixtures/TestGegevens.json'

describe('Voorstellingen pagina', () => {
  it('Bezoek pagina', () => {
    cy.visit(VoorstellingenPagina);
  });

  it('Ophalen van voorstellingen vanuit api', () => {
    cy.visit(VoorstellingenPagina);
    cy.intercept(VoorstellingenApi).as("Voorstellingen")
    cy.wait("@Voorstellingen").then((interception) => {
      expect(interception.response.statusCode).equal(200)
    });
  });


  it('Toevoegen een nieuwe voorstelling', () => {
    cy.visit(VoorstellingenPagina);
    cy.get("#Toevoegen").click();
    Object.keys(TestVoorstelling).forEach(Key=>{
      cy.get("#"+Key).type(TestVoorstelling[Key]);
    })
    cy.get("#Opslaan").click();
    
  });


  it('Verwijderen van een het toegevoegde voorstelling', () => {
    cy.visit(VoorstellingenPagina);
    cy.get("tr").contains(TestVoorstelling.Omschrijving).parent("tr").find("button").click()
    cy.get("tr",{ timeout: 3000 }).contains(TestVoorstelling.Omschrijving).should('not.exist')
  });

})

