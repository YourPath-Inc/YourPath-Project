import { Point } from "./PointClass.js";
import { User } from "./UserClass.js";

const API_ROOT_URL = "http://localhost:8080/api";
const GET_ALL_POINTS_URL = "/puntos?user_id=";
const GET_USER = "/user?email=";
const ADD_PUNTO = "/addPunto";
const ADD_USER = "/addUser";

export function getPointsByIdUser(id) { return getQuery(API_ROOT_URL + GET_ALL_POINTS_URL + id); }

export function getUserByEmail(email) { return getQuery(API_ROOT_URL + GET_USER + email); }

function getQuery(url) {
    return fetch(url)
    .then((response) => response.json())
}

function setQuery(url, data) {
    fetch(url, {
        method: 'SET',
        body: data
    }).then((result) => {
        console.log('Success:', result) });
}
function addPoint(p) { setQuery(API_ROOT_URL + ADD_PUNTO, p); }

function addUser(u) { setQuery(API_ROOT_URL + ADD_USER, u); }

//addPoint(new Point(1, "Titulo", "2001-12-12", "2001-12-12", "Description", "State", "Location"));
//getPointsByIdUser(1).then((data) => console.log(data));
addUser(new User("Name", "Surname", "1234@12345.es", "1234", 123456789, "Location", "2001-12-12", "Description", "Git", "linkedin"))

