import { User } from './UserClass.js';
import { Point } from './PointClass.js';

const API_ROOT_URL = "http://localhost:8080/api";
const GET_ALL_POINTS_URL = "/puntos?user_id=";
/*
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
    await fetch(url, {
        mode: "no-cors"
      })
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
*/
const URL = API_ROOT_URL + GET_ALL_POINTS_URL + 1;
const URL2 = 'http://localhost:8080/api/allUsers';


const data = {
    optPost: 'myAPI',
    message: 'We make a research of fetch'
};

async function displayItems()
{

    await fetch(URL2, {
        'Accept':'application/json',
        'Content-Type':'application/json', mode: 'no-cors'
    }
   ).then(function (response) {
	// The API call was successful!
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
}

displayItems();