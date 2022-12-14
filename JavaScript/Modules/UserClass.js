export class User {
    constructor(user_id, email, nombre, apellido, psswrd, tel, ubicacion, fecha_nacimiento, descripcion, link, github) {
        this.user_id = user_id;
        this.email = email;
        this.nombre = nombre;
        this.apellido = apellido;
        this.psswrd = psswrd;
        this.tel = tel;
        this.ubicacion = ubicacion;
        this.fecha_nacimiento = fecha_nacimiento;
        this.descripcion = descripcion;
        this.link = link;
        this.github = github;
    }

    getName() { return this.nombre; }
    getapellido() { return this.apellido; }
    getEmail() { return this.email; }
    getPsswrd() { return this.psswrd; }
    getTel() { return this.tel; }
    getubicacion() { return this.ubicacion; }
    getBirthDate() { return this.fecha_nacimiento; }
    getdescripcion() { return this.descripcion; }
    getLinkedin() { return this.link; }
    getgithub() { return this.github; }
}