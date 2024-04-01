describe('Llena los campos para editar servicio', () => {
    it('Campos de editar servicio', () => {
        //! De esta forma estamos seguras de que el usuario que esta viendo este proyecto va a ver los que teníamos en mente y lo que queríamos mostrar

        cy.visit('/index.html');

        cy.get("[data-cy='nombre-servicio']").type('Corte de pelo'); /// Aca le pones lo que quieres escribir

        cy.get("[data-cy='duracion']").type('1 hora');

        cy.get("[data-cy='precio']").type('50');

        //* Enviar cita
        cy.get("[type='submit']").click();

        //. verificar el texto de citas
        cy.get('[id="administra"]')
            .invoke('text') //* Vamos a seleccionar el texto
            .should('equal', 'Administrar Servicios '); //. Resultado: nos dice que si se encuentra ese texto nuevo

        //. Seleccionar la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');

        /// Asegurarse de que tenga la clase correcta
        cy.get('[data-cy="alerta"]').should('have.class', 'alert-success');

        /// Edita la cita
        //* Haciendo el segundo test aca
        cy.get('[data-cy="editar"]').click();

        cy.get("[data-cy='nombre-servicio']")
            .clear() /// Limpia lo que esté escrito en el input
            .type('Nuevo Corte de Pelo'); /// Aca le pones lo que quieres escribir

        cy.get("[type='submit']").click();

        //. Seleccionar la alerta para asegurarnos que se mostró
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente');

        /// Asegurarse de que tenga la clase correcta
        cy.get('[data-cy="alerta"]').should('have.class', 'alert-success');
    });

    /// Este segundo test me esta presentando error
    // it('Edita la cita', () => {
    //     // cy.get('[data-cy="editar"]').click();
    // });
});
