context('Testing scroll to top', () => {
    beforeEach(() => {
        cy.visit('../../smart-tag.html');
    });
    it('2. Tester l’apparition du tag au survol du bouton "See more".', () => {
        cy.get('[data-cy=seemore]').trigger('mouseover');
        cy.get('[data-cy=popup]').should('be.visible');
    });
    it('Tester la disparition du tag à la sortie du survol du bouton "See more"', () => {
        cy.get('[data-cy=seemore]').trigger('mouseover');
        cy.get('body').click(100,100);
        cy.get('[data-cy=popup]').should('be.hidden');
    });
}); 