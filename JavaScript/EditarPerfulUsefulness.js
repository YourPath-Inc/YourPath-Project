import {addPoint, addUser, getUserByEmail, updateUserById} from "./Modules/APIConsultor.js"
import { User } from "./Modules/UserClass.js"
import { Point } from "./Modules/PointClass.js"

var email = "email@email.com"; //Cambiar esto por los datos que se pasen
var psswrd, id;
getUserByEmail(email).then((data) => {
    document.getElementById("name").value = data.nombre;
    document.getElementById("surname").value = data.apellido;
    document.getElementById("email").value = data.email;
    document.getElementById("telf").value = data.tel;
    document.getElementById("ubi").value = data.ubicacion;
    document.getElementById("fecha_nacimiento").value = data.fecha_nacimiento;
    document.getElementById("user-description").value = data.descripcion;
    document.getElementById("linkedin").value = data.link;
    document.getElementById("git").value = data.github;
    psswrd = data.psswrd;
    id = data.id;
});

$("#userForm").submit(function (e) { 
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("telf").value;
    var ubi = document.getElementById("ubi").value;
    var date = document.getElementById("fecha_nacimiento").value;
    var description = document.getElementById("user-description").value;
    var link = document.getElementById("linkedin").value;
    var git = document.getElementById("git").value;
    var u = new User(id, email, name, surname, psswrd, tel, ubi, date, description, git, link);
    updateUserById(id, u);
    changePage();
    return false;
});

$("#pointForm").submit(function (e) { 
    var titulo = document.getElementById("titulo").value;
    var ubi = document.getElementById("location").value;
    var dateI = document.getElementById("init_date").value;
    var dateE = document.getElementById("end_date").value;
    var ubi = document.getElementById("ubi").value;
    var descripcion = document.getElementById("point-description").value;
    var state;
    if (document.getElementById("state_done").checked) { state = document.getElementById("state_done").value; }
    else if (document.getElementById("state_doing").checked) { state = document.getElementById("state_doing").value; }
    else if (document.getElementById("state_todo").checked) { state = document.getElementById("state_todo").value; }
    var p = new Point(id, titulo, dateI, dateE, descripcion, state, ubi);
    console.log(p);
    addPoint(p);
    changePage();
    return false;
});

function changePage() {
    //Falta Cambiar de Pagina
}