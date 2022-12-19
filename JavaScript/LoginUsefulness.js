import { getUserByEmail } from "./Modules/APIConsultor.js";
import { store } from "./Modules/LocalStorage.js"
import { encriptPsswrd } from "./Modules/EncryptModule.js"

$(".form").submit(() => {
    var email = document.getElementById("user-email").value;
    getUserByEmail(email).then((data) => {
        var psswrd =  document.getElementById("user-password").value;
        if (data.email == email && data.psswrd == encriptPsswrd(psswrd)) {
            console.log("happy");
            store(email);
            window.location.replace("../HTML/perfil.html");
        } else { errorAlert(); }
    }).catch((error) => { errorAlert(); });
    return false;
});

function errorAlert() { 
    alert("ERROR: Algunos datos se han intoducido de maner erronea");
    console.log("Algo ha salido mal :(") 
}