import { addUser } from "./Modules/APIConsultor.js"
import { User } from "./Modules/UserClass.js"
import { store } from "./Modules/LocalStorage.js"

$("#userForm").submit(function (e) { 
    var email = document.getElementById("user-email").value;
    var psswrd = document.getElementById("user-password").value;
    var name = document.getElementById("user-name").value;
    var surname = document.getElementById("user-surname").value;
    var u = new User(0, email, name, surname, psswrd, null, null, null, null, null, null);
    addUser(u);
    store(email);
    window.location.replace("../HTML/editarPerfil.html");
    return false;
});