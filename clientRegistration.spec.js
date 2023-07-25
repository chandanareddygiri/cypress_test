describe('Client Registration', () => {
    it('Completes client registration process', () => {
      // Visit the login page
      cy.visit('https://b2c.btoprod.com/');
  
      // Find and click the 'Create Account for free' button
      cy.contains('Create Account for free').click();
  
      // Assert that we are now on the registration page
      cy.url().should('include', '/register-c/get-started');
      cy.get('input[name="email"]').type('chandanareddy.giri@gmail.com');
      cy.get('button[type="Get Started"]').click();
  
      // Fill in the registration form
      cy.url().should('include', '/register-c/password');
      cy.get('input[name="password"]').type('Xpassword_123');
      cy.get('button[type="Looks Good"]').click();
  
      cy.url().should('include', '/register-c/names-b');
      cy.get('input[name="firstName"]').type('Chandana');
      cy.get('input[name="lastName"]').type('Reddy');
      cy.get('input[class="mat-checkbox-label"]').check();
      cy.get('button[type="Next"]').click();
  
      cy.url().should('include', '/register-c/mobile-verification-b');
      describe('Dropdown Interaction', () => {
        beforeEach(() => {
        it('Should select an option from the dropdown', () => {
          cy.get('#myDropdown').should('have.value', 'option2');
        });
      });
      describe('Enter Mobile Number', () => {
        beforeEach(() => {
        it('Should enter a mobile number', () => {
          const mobileNumber = '1234567890';
          cy.get('.mobile-number-input').should('have.value', mobileNumber);
        });
      });
      cy.get('input[name="input_verification"]').type(otp);
      cy.get('button[type="All Set!"]').click();
  
  
  
  
  
  
  
      // Submit the registration form
      cy.get('button[type="submit"]').click();
  
      // Assert that we have completed the registration process
      cy.url().should('include', '/onboarding-c/household/');
    });
  });
  