it('Displays error for existing email', () => {
    cy.visit('https://b2c.btoprod.com/');
    cy.contains('Create Account for free').click();
  
    // Fill in the form with valid details, but use an email that is already registered
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="email"]').type('existing_user@example.com');
    cy.get('input[name="password"]').type('strongPassword');
    cy.get('button[type="submit"]').click();
  
    // Assert that an error message related to existing email is displayed
    cy.contains('Email already in use').should('be.visible');
  });
  