import { datosServicio, nuevaSolicitud } from '../funciones.js';
import { 
    nombreServicioInput, 
    duracionInput, 
    precioInput, 
    formulario 
} from '../selectores.js';

class App {

    constructor() {
        this.initApp();
    }

    initApp() {
        nombreServicioInput.addEventListener('change', datosServicio);
        duracionInput.addEventListener('change', datosServicio);
        precioInput.addEventListener('change', datosServicio);

        // Formulario para nuevas solicitudes de servicio
        formulario.addEventListener('submit', nuevaSolicitud);

    }

}

export default App;
