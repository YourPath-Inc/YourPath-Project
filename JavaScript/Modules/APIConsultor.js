const API_TEST_URL = "https://api.chucknorris.io/jokes/random";
const API_URL = "";

const HTMLResponse = document.querySelector("#app");

async function getPoints() { 
    var result;
    await fetch(API_TEST_URL)
    .then((response) => response.json())
    .then((random) => {
        var c = new Chuck(random.id, random.url, random.value)
        result = c;
    });
    return result;
}

function getPsswrdByEmail(email) {
    getUser();
}

function addPoint(p) {}

function addUser(user) {}

function updateUserByEmail(email) {
    getUser();
    // 
}

function getUser(email) {}

getPoints().then((result) => console.log(result));

class Chuck {
    constructor(id, date, url) {
        this.id = id;
        this.date = date;
        this.url = url;
    }
}
