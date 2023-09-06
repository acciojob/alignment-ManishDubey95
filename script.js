//your JS code here. If required.
cy.get('#t13 .right').should('exist');
cy.get('td').should('have.css', 'padding', '1px').should('have.css', 'border-style', 'solid');
