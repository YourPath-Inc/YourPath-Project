import { addUser, getAllUsers } from "./Modules/APIConsultor.js"
import { User } from "./Modules/UserClass.js"
import { store } from "./Modules/LocalStorage.js"
import { encriptPsswrd } from "./Modules/EncryptModule.js"

var users = await getAllUsers();
var countInit = users.length;
users = null; 

$("#userForm").submit(function (e) { 
    var email = document.getElementById("user-email").value;
    var psswrd = document.getElementById("user-password").value;
    var name = document.getElementById("user-name").value;
    var surname = document.getElementById("user-surname").value;
    encriptPsswrd(psswrd)
    var u = new User(0, email, name, surname, encriptPsswrd(psswrd), null, null, null, null, null, null);
    if (psswrd == document.getElementById("user-password-confirm").value) {
        getAllUsers().then((results) => {
            var flag = true;
            for (var i = 0; i < results.length && flag; i++) { 
                if (results[i].email == email) { flag = false; } 
            }
            if (flag) {
                addUser(u);
                store(email);
                window.location.replace("../HTML/editarPerfil.html");
            } else { alert("ERROR: email en uso"); }
    });
    } else { alert("ERROR: Las contraseñas no son identicas"); }
    return false;
});