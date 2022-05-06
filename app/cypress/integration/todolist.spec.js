context('Testing scroll to top', () => {
    beforeEach(() => {
        cy.visit('../../todolist.html');
    });
    it('. Tester l’ajout de quatre todos', () => {
        cy.get('input').type('first')
        cy.get('button').first().click()
        cy.get('input').type('second')
        cy.get('button').first().click()
        cy.get('input').type('third')
        cy.get('button').first().click()
        cy.get('input').type('fourth')
        cy.get('button').first().click()

    });
    it('puis la suppression de la deuxième todo au clique sur la croix associée', () => {
        cy.get('input').type('first')
        cy.get('button').first().click()
        cy.get('input').type('second')
        cy.get('button').first().click()
        cy.get('input').type('third')
        cy.get('button').first().click()
        cy.get('input').type('fourth')
        cy.get('button').first().click();
        cy.get('[data-cy=todo]').get('button').eq(2).click();
        cy.get('[data-cy=todo]').should('have.length', 3);
    });
    it('Tester le fait qu’il ne reste plus que 3 todos. ', () => {
        cy.get('input').type('first')
        cy.get('button').first().click()
        cy.get('input').type('second')
        cy.get('button').first().click()
        cy.get('input').type('third')
        cy.get('button').first().click()
        cy.get('input').type('fourth')
        cy.get('button').first().click();
        cy.get('[data-cy=todo]').get('button').eq(2).click();
        cy.get('[data-cy=todo]').should('have.length', 3);
    });
}); 
