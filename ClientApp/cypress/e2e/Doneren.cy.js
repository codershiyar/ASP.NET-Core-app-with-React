
import {DonerenPagina} from './../fixtures/TestGegevens.json'

describe('Donderen', () => {

  it('Pagina is toegankelijk voor Bezoekers ', () => { 
    cy.visit(DonerenPagina)
    cy.get("body").should("contain", "donatie")
  });
  
})

