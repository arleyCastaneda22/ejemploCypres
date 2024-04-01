describe("Valida el formulario", () => {
    it("Submit al formulario y mostrar la alerta de error", () => {
        //. Decirle a donde se va a conectar
        cy.visit('/index.html');

        //. seleccionar el formulario o el botón de submit
        cy.get("[data-cy='formulario']").submit();

        //. seleccionar la alerta
        cy.get("[data-cy='alerta']")
            .invoke("text")
            .should("equal", "Todos los campos son Obligatorios"); //* verificando el texto de la alerta 

        /// Asegurarse que tiene la clase correcta
        cy.get("[data-cy='alerta']")
            .should('have.class', 'alert-danger'); //. have.class es para verificar una clase del elemento
    });
});
