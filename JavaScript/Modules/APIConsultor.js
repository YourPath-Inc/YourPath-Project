const API_ROOT_URL = "http://localhost:8080/api";
const GET_ALL_POINTS_URL = "/puntos?user_id=";
const GET_USER = "/user?email=";
const ADD_PUNTO = "/addPunto";
const ADD_USER = "/addUser";

export function getPointsByIdUser(id) { return getQuery(API_ROOT_URL + GET_ALL_POINTS_URL + id); }

export function getUserByEmail(email) { return getQuery(API_ROOT_URL + GET_USER + email); }

export function addPoint(p) { setQuery(API_ROOT_URL + ADD_PUNTO, p); }

export function addUser(u) { setQuery(API_ROOT_URL + ADD_USER, u); }

function getQuery(url) {
    return fetch(url)
    .then((response) => response.json())
}

function setQuery(url, data) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => {
        console.log('Success:', result) });
}

//addPoint(new Point(1, "Titulo", "2001-12-12", "2001-12-12", "Description", "State", "Location"));

//Los GETS Funcionan correctamente
//getPointsByIdUser(1).then((data) => console.log(data));

//Los SETS no
//var u = new User("a@a.com", "name", "surname", "1234", 123456789, "Location", "2001-12-12", "Description", "Git", "linkedin");
//console.log(u);