describe("Simple new spend page", function (){

  it("Loads up with form to be filled in", function(){
    cy.visit('http://localhost:3000/spends');
    cy.get('#add').click()
    cy.get('#addModal').get('form').find('[type="date"]');
    cy.get('form').find('[type="text"]');
    cy.get('form').find('[type="number"]');
    cy.get('form').find('#categories');
    cy.get('form').find('[type="submit"]')
  });

  it("All the fields can be used and the spend can be send", function(){
    cy.visit('http://localhost:3000/spends');
    cy.get('#add').click()
    cy.get('#addModal').get('form').find('[type="date"]').type('2020-01-01').should('have.value', '2020-01-01');
    cy.get('form').find('[type="text"]').type('Example Spend').should('have.value', 'Example Spend');
    cy.get('form').find('[type="number"]').type('0.95').should('have.value', '0.95');
    cy.get('form').find('#categories').select("Sports").should('have.value', 'Sports');
    cy.get('form').find('[type="submit"]').click();
    cy.on('window:alert', (str) => {
    expect(str).equal(`New Spend added!`)})

  });

  it("All the fields are required", function(){
    cy.visit('http://localhost:3000/spends');
    cy.get('#add').click()
    cy.get('input:invalid');
    cy.get('form').find('[type="submit"]').click();
    cy.get('form').find('[type="date"]').then(($input) => {
    expect($input[0].validationMessage).equal('Please fill in this field.')
  })
  });

})
