// Cambiar la extensión del archivo a .mjs

// Importar las clases y los selectores
import Citas from './classes/Citas.mjs';
import UI from './classes/UI.mjs';

// Importar los selectores del nuevo formulario
import {
    nombreServicioInput,
    duracionInput,
    precioInput,
    formulario
} from './selectores.mjs';

// Crear instancias de las clases
const administrarCitas = new Citas();
const ui = new UI(administrarCitas);

// Variable para indicar si se está editando una cita
let editando = false;

// Objeto para almacenar los datos del servicio
const servicioObj = {
    nombreServicio: '',
    duracion: '',
    precio: ''
};

// Función para actualizar el objeto con los datos del formulario
export function datosServicio(e) {
    servicioObj[e.target.name] = e.target.value;
}

// Función para agregar un nuevo servicio
export function nuevoServicio(e) {
    e.preventDefault();

    const { nombreServicio, duracion, precio } = servicioObj;

    // Validar los campos del formulario
    if (nombreServicio === '' || duracion === '' || precio === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    if (editando) {
        // Editar el servicio existente
        // Implementa la lógica para editar un servicio en tu clase Citas si es necesario
        // administrarCitas.editarServicio({ ...servicioObj });
        ui.imprimirAlerta('Guardado correctamente');
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Servicio';
        editando = false;
    } else {
        // Generar un ID único (puedes utilizar Date.now() u otra estrategia)
        servicioObj.id = Date.now();
        // Agregar el nuevo servicio
        administrarCitas.agregarServicio({ ...servicioObj });
        ui.imprimirAlerta('Servicio agregado correctamente');
    }

    // Actualizar la lista de servicios en el HTML
    ui.imprimirServicios(administrarCitas);

    // Reiniciar el objeto del servicio
    reiniciarObjeto();

    // Reiniciar el formulario
    formulario.reset();
}

// Función para reiniciar el objeto del servicio
export function reiniciarObjeto() {
    servicioObj.nombreServicio = '';
    servicioObj.duracion = '';
    servicioObj.precio = '';
}

// Función para eliminar un servicio
export function eliminarServicio(id) {
    administrarCitas.eliminarServicio(id);
    ui.imprimirServicios(administrarCitas);
}

// Función para cargar la edición de un servicio (opcional)
// Implementa esta función si necesitas editar un servicio existente
// export function cargarEdicion(servicio) {
//     const { nombreServicio, duracion, precio, id } = servicio;
//     // Actualizar el objeto del servicio
//     servicioObj.nombreServicio = nombreServicio;
//     servicioObj.duracion = duracion;
//     servicioObj.precio = precio;
//     servicioObj.id = id;
//     // Llenar los campos del formulario con los datos del servicio
//     nombreServicioInput.value = nombreServicio;
//     duracionInput.value = duracion;
//     precioInput.value = precio;
//     // Cambiar el texto del botón de enviar a "Guardar Cambios"
//     formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
//     // Actualizar la variable de edición
//     editando = true;
// }
