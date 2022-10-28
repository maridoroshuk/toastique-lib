describe('Stories', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/');
  });

  it('should have variant panel', () => {
    cy.contains('variant').should('exist');
    cy.get('[for="control-variant-0"]').should(
      'have.text',
      'info',
    );
    cy.get('[for="control-variant-1"]').should(
      'have.text',
      'warning',
    );
    cy.get('[for="control-variant-2"]').should(
      'have.text',
      'error',
    );
    cy.get('[for="control-variant-3"]').should(
      'have.text',
      'success',
    );
  });

  it('should have position panel', () => {
    cy.contains('position').should('exist');
    cy.get('[for="control-position-0"]').should(
      'have.text',
      'top',
    );
    cy.get('[for="control-position-1"]').should(
      'have.text',
      'bottom',
    );
  });

  it('should have autoCloseTime panel', () => {
    cy.contains('autoCloseTime').should('exist');
    cy.get('[for="control-autoCloseTime-0"]').should(
      'have.text',
      '3000',
    );
    cy.get('[for="control-autoCloseTime-1"]').should(
      'have.text',
      '5000',
    );
    cy.get('[for="control-autoCloseTime-2"]').should(
      'have.text',
      '10000',
    );
  });

  it('should have animation panel ', () => {
    cy.contains('animation').should('exist');
    cy.get('[for="control-animation-0"]').should(
      'have.text',
      'from bottom',
    );
    cy.get('[for="control-animation-1"]').should(
      'have.text',
      'from right side',
    );
  });

  it('should have gap panel ', () => {
    cy.contains('gap').should('exist');
    cy.get('[for="control-gap-0"]').should(
      'have.text',
      'small',
    );
    cy.get('[for="control-gap-1"]').should(
      'have.text',
      'medium',
    );
    cy.get('[for="control-gap-2"]').should(
      'have.text',
      'large',
    );
  });

  it('should have heading panel ', () => {
    cy.contains('heading').should('exist');
    cy.get('#control-heading').should('exist');
  });

  it('should have content panel ', () => {
    cy.contains('content').should('exist');
    cy.get('#control-content').should('exist');
  });

  it('should have color panel ', () => {
    cy.contains('color').should('exist');
    cy.get('#control-color').should('exist');
  });
});

describe('Make a custom success toast ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/');
  });

  it('should have success variant', () => {
    cy.get('#control-variant-3').check();
  });

  it('should have bottom position', () => {
    cy.get('#control-position-1').check();
  });

  it('should have 3000 ms autoclose time', () => {
    cy.get('#control-autoCloseTime-0').check();
  });

  it('should have from right side animation', () => {
    cy.get('#control-animation-1').check();
  });

  it('should have large gap', () => {
    cy.get('#control-gap-2').check();
  });

  it('should have custom heading', () => {
    cy.get('#control-heading')
      .type('Test heading')
      .should('have.value', 'Test heading');
  });

  it('should have custom content', () => {
    cy.get('#control-content')
      .type('Test body content')
      .should('have.value', 'Test body content');
  });

  it('should have custom color', () => {
    cy.get('#control-color')
      .type('#8bff93')
      .should('have.value', '#8bff93');
  });
});
