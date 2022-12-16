export class Point {
    constructor(user_id, titulo, init_date, end_date, descripcion, state, location) {
        this.user_id = user_id;
        this.titulo = titulo;
        this.init_date = init_date;
        this.end_date = end_date;
        this.descripcion = descripcion;
        this.state = state;
        this.location = location;
    }

    getTitulo() { return this.titulo; }
    getInit_date() { return this.init_date; }
    getEnd_date() { return this.end_date; }
    getDescripcion() { return this.descripcion; }
    getState() { return this.state; }
    getLocation() { return this.location; }
}