import { addUser } from "./Modules/APIConsultor.js"
import { User } from "./Modules/UserClass.js"

$("#userForm").submit(function (e) { 
    var email = document.getElementById("user-email").value;
    var psswrd = document.getElementById("user-password").value;
    var u = new User(0, email, psswrd, null, null, null, null, null, null, null, null);
    addUser(u);
    //changePage
    return false;
});