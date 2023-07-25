it('Displays error for empty fields', () => {
    cy.visit('https://b2c.btoprod.com/');
    cy.contains('Create Account for free').click();
  
    cy.get('button[type="submit"]').click();
  
    // Assert that error messages for empty fields are displayed
    cy.contains('First Name is required').should('be.visible');
    cy.contains('Last Name is required').should('be.visible');
    cy.contains('Email is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });
  