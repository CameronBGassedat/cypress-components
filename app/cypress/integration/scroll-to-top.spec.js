context('Testing scroll to top', () => {
    beforeEach(() => {
        cy.visit('../../scroll-to-top.html');
    });
    it('Tester l’apparition du bouton "scroll-to-top" en bas à droite lorsqu’on scroll vers le bas.', () => {
        cy.get('button').contains('Scroll').click();
        cy.get('[data-cy=scrollup]').should('be.visible');
    });
    it('Tester le retour en haut de la page et la disparition du bouton "scroll-to-top" lors du clique sur celui-ci. ', () => {
        cy.get('button').contains('Scroll').click();
        cy.get('[data-cy=scrollup]').click();
        cy.get('[data-cy=scrollup]').should('be.visible');
    });
}); 