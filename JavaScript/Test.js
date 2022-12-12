import { encriptPsswrd } from "./Modules/EncryptModule.js";
const EMAIL = "a@a", PSSWRD = "%31%32%33%34";

$("#submit-btn").click(() => {
    var psswrdCorrect = PSSWRD == encriptPsswrd(document.getElementById("user-password").value);
    var emailCorrect = EMAIL == document.getElementById("user-email").value;
    if (psswrdCorrect && emailCorrect) {
        console.log("Todo Bien Crack");
    } else {
        console.log("Todo Mal Crack");
    }
});