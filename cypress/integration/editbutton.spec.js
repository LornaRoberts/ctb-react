describe("Spend edit functionality", function (){

  it("Loads up with form to be filled in", function(){
    cy.visit('http://localhost:3000/spends');
    cy.get('#list').find('#edit').click()
    cy.get('#delete').click();
  });



})
