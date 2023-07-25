it('Displays error for incorrect email format', () => {
    cy.visit('https://b2c.btoprod.com/');
    cy.contains('Create Account for free').click();
  
    cy.get('input[name="email"]').type('invalid_email_format');
    cy.get('button[type="submit"]').click();
  
    // Assert that an error message related to email format is displayed
    cy.contains('Invalid email format').should('be.visible');
  });
  