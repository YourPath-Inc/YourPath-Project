export function encriptPsswrd(psswrd) {
    var encodedPsswrd = "";

    for (var i = 0; i < psswrd.length; i++) { encodedPsswrd += '%'+ psswrd.charCodeAt(i).toString(16); }

    return encodedPsswrd;
}

