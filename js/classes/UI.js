import { eliminarServicio, cargarEdicionServicio } from '../funciones.js';
import { contenedorServicios, heading } from '../selectores.js';

class UI {
    constructor({ servicios }) {
        this.textoHeading(servicios);
    }

    imprimirAlerta(mensaje, tipo) {
        const alertaPrevia = document.querySelector('.alert');

        if (alertaPrevia) {
            alertaPrevia.remove();
        }

        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        /// Si es de tipo error agrega una clase
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        //! Agregar data-cy
        divMensaje.dataset.cy = 'alerta';

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
        document
            .querySelector('#contenido')
            .insertBefore(divMensaje, document.querySelector('.agregar-servicio'));

        // Quitar el alert después de 3 segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    imprimirServicios({ servicios }) {
        // Se puede aplicar destructuring desde la función...

        this.limpiarHTML();

        this.textoHeading(servicios);

        servicios.forEach((servicio) => {
            const {
                nombre,
                duracion,
                precio,
                id,
            } = servicio;

            const divServicio = document.createElement('div');
            divServicio.classList.add('servicio', 'p-3');
            divServicio.dataset.id = id;

            // SCRIPTING DE LOS ELEMENTOS...
            const nombreParrafo = document.createElement('h2');
            nombreParrafo.classList.add('card-title', 'font-weight-bolder');
            nombreParrafo.innerHTML = `${nombre}`;

            const duracionParrafo = document.createElement('p');
            duracionParrafo.innerHTML = `<span class="font-weight-bolder">Duración: </span> ${duracion}`;

            const precioParrafo = document.createElement('p');
            precioParrafo.innerHTML = `<span class="font-weight-bolder">Precio: </span> ${precio}`;

            // Agregar un botón de eliminar...
            const btnEliminar = document.createElement('button');
            btnEliminar.onclick = () => eliminarServicio(id); // añade la opción de eliminar

            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');

            //! Dataset de Cypress
            btnEliminar.dataset.cy = 'btn-eliminar';

            btnEliminar.innerHTML =
                'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

            // Añade un botón de editar...
            const btnEditar = document.createElement('button');
            btnEditar.onclick = () => cargarEdicionServicio(servicio);

            btnEditar.classList.add('btn', 'btn-info');

            //! Dataset de Cypress
            btnEditar.dataset.cy = 'editar';

            btnEditar.innerHTML =
                'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';

            // Agregar al HTML
            divServicio.appendChild(nombreParrafo);
            divServicio.appendChild(duracionParrafo);
            divServicio.appendChild(precioParrafo);
            divServicio.appendChild(btnEliminar);
            divServicio.appendChild(btnEditar);

            contenedorServicios.appendChild(divServicio);
        });
    }

    textoHeading(servicios) {
        if (servicios.length > 0) {
            heading.textContent = 'Administra tus Servicios';
        } else {
            heading.textContent = 'No hay Servicios, comienza agregando uno';
        }
    }

    limpiarHTML() {
        while (contenedorServicios.firstChild) {
            contenedorServicios.removeChild(contenedorServicios.firstChild);
        }
    }
}

export default UI;
