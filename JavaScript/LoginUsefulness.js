import { getUserByEmail } from "./Modules/APIConsultor.js";
import { store } from "./Modules/LocalStorage.js"

(".form").submit(() => {
    var email = document.getElementById("user-email").value;
    getUserByEmail(email).then((data) => {
        var psswrd = document.getElementById("user-password").value;
        if (data.email == email && data.psswrd == psswrd) {
            console.log("happy");
            store(email);
            //cambio de pagina
        } else { errorAlert(); }
    }).catch((error) => { errorAlert(); });
    return false;
});

function errorAlert() { 
    //Alert
    console.log("Algo ha salido mal :(") 
}