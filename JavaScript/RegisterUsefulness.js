import { addUser, getAllUsers } from "./Modules/APIConsultor.js"
import { User } from "./Modules/UserClass.js"
import { store } from "./Modules/LocalStorage.js"

var users = await getAllUsers();
var countInit = users.length;
users = null; 
console.log(countInit);
$("#userForm").submit(function (e) { 
    var email = document.getElementById("user-email").value;
    var psswrd = document.getElementById("user-password").value;
    var name = document.getElementById("user-name").value;
    var surname = document.getElementById("user-surname").value;
    var u = new User(0, email, name, surname, psswrd, null, null, null, null, null, null);
    getAllUsers().then((results) => {
        var flag = true;
        for (var i = 0; i < results.length && flag; i++) {
            if (results[i].email == email) { flag = false; }
        }
        if (flag) {
            addUser(u);
            store(email);
            window.location.replace("../HTML/editarPerfil.html");
        } else {
            alert("ERROR: Email ya registrado");
        }
    });
    return false;
});