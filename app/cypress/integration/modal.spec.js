/// <reference types="cypress" />
context('Testing Window Open', () => {
    beforeEach(() => {
        cy.visit('../../modal.html');
    });
    it('. Tester l’ouverture de la fênetre modale au clique sur display.', () => {
        cy.get('button').contains('Display').click();
        cy.get('[data-cy=modalwindow]').should('be.visible');
    });
    it('3. Tester la fermeture de la fênetre modale au clique en dehors de la modale.', () => {
        cy.get('button').contains('Display').click();
        cy.get('body').click(100,100);
    });
    it('Tester que la fênetre modale contient un <h2></h2> contenant Lorem Ipsum.', () => {
        cy.get('button').contains('Display').click();
        cy.get('[data-cy=modalwindow]').contains('Lorem Ipsum')
    });
   }); 

