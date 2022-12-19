const API_ROOT_URL = "http://localhost:8080/api";
const GET_ALL_POINTS_URL = "/puntos?user_id=";
const GET_USER = "/user?email=";
const ADD_PUNTO = "/addPunto";
const ADD_USER = "/addUser";
const GET_ALL_USERS = "/allUsers";
const UPDATE_USER = "/updateUser?user_id=";

export function getPointsByIdUser(id) { return getQuery(API_ROOT_URL + GET_ALL_POINTS_URL + id); }

export function getUserByEmail(email) { return getQuery(API_ROOT_URL + GET_USER + email); }

export function getAllUsers() { return getQuery(API_ROOT_URL + GET_ALL_USERS); }

export function addPoint(p) { setQuery(API_ROOT_URL + ADD_PUNTO, p); }

export function addUser(u) { setQuery(API_ROOT_URL + ADD_USER, u); }

export function updateUserById(id, u) { setQuery(API_ROOT_URL + UPDATE_USER + id, u); }

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