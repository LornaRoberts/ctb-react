describe("Total SPend for this Period Component", function () {

    it("Displays the heading text", function() {
        cy.visit('http://localhost:3000/');
        cy.get('#tstp').should('contain', 'The total spend this period: £');
    })
    it("Displays the total value", function() {
        cy.visit('http://localhost:3000/');
        cy.get('#tstp-value').should('contain', '.');
    })

})