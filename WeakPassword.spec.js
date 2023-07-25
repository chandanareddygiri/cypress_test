it('Displays error for weak password', () => {
    cy.visit('https://b2c.btoprod.com/');
    cy.contains('Create Account for free').click();
  
    cy.get('input[name="password"]').type('weak');
    cy.get('button[type="submit"]').click();
  
    // Assert that an error message related to weak password is displayed
    cy.contains('Password must be at least 8 characters long').should('be.visible');
  });
  