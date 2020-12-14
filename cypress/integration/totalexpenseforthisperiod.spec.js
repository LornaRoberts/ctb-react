describe("Total Exense for this Period Component", function () {

    it("Displays the heading text", function() {
        cy.visit('http://localhost:3000/expenses');
        cy.get('#tetp').should('contain', 'The total expenses for this period: £');
    })
    it("Displays the total value", function() {
        cy.visit('http://localhost:3000/expenses');
        cy.get('#tetp-value').should('contain', '.');
    })

})
