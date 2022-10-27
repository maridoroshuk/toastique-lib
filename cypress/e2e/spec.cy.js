describe('Interface', () => {
  beforeEach(() => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=toast--default&viewMode=story',
    );
  });

  it('should have a button', () => {
    cy.get('.sc-gswNZR').click();
  });

  it('should have a toast message after click', () => {
    cy.get('.sc-gswNZR').click();
    cy.get('.sc-dkrFOg').should('exist');
  });

  it('shoul have three toasts messages after three click', () => {
    cy.get('.sc-gswNZR').click();
    cy.get('.sc-gswNZR').click();
    cy.get('.sc-gswNZR').click();
    cy.get('.sc-dkrFOg').should('exist');
    cy.get('.sc-pyfCe > :nth-child(2)').should('exist');
    cy.get('.sc-pyfCe > :nth-child(3)').should('exist');
  });

  it('toast should close after close button click', () => {
    cy.get('.sc-gswNZR').click();
    cy.get('.sc-dkrFOg').should('exist');
    cy.get(
      ':nth-child(1) > .sc-eDvSVe > .sc-jSUZER',
    ).click();
    cy.get('.sc-dkrFOg').should('not.exist');
  });
});
