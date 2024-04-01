class Servicios {
    constructor() {
        this.servicios = [];
    }
    agregarServicio(servicio) {
        this.servicios = [...this.servicios, servicio];
    }
    editarServicio(servicioActualizado) {
        this.servicios = this.servicios.map(servicio => servicio.id === servicioActualizado.id ? servicioActualizado : servicio);
    }
    eliminarServicio(id) {
        this.servicios = this.servicios.filter(servicio => servicio.id !== id);
    }
}

export default Servicios;
