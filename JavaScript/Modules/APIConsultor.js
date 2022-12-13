import { User } from './UserClass.js';
import { Point } from './PointClass.js';

const API_ROOT_URL = "http://localhost:8080/api";
const GET_ALL_POINTS_URL = "/puntos?user_id=";

function getPoints(id) { 
    var queryResults = getQuery(API_ROOT_URL + GET_ALL_POINTS_URL + id);
    var finalResult = [];
    for (let id = 0; id < queryResults.length; id++) {
        var element = queryResults[i];
        finalResult.push(new Point(element.titulo, element.init_date, element.end_date, element.descripcion, element.state, element.location));
    }
    return finalResult;
}

function getPsswrdByEmail(email) {
    var result
}

async function getQuery(url) {
    console.log(url);
    var result;
    await fetch(url, { mode: "no-cors" })
    .then((response) => response.json())
    .then((random) => {
        result = c;
    });
    return result;
}

function addPoint(p) {}

function addUser(user) {}

function getUser(id) {

}

getPoints(1);


