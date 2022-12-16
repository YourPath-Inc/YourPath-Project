import { showTimeline } from './Modules/PathAnimation.js';
import { generateDiv } from './Modules/PathContentGenerator.js';
import { Point } from './Modules/PointClass.js';
import { getPointsByIdUser, getUserByEmail } from "./Modules/APIConsultor.js"
import { show } from "./Modules/LocalStorage.js"

const STATES = ["DONE", "DOING", "TODO"];

console.log(show());
var email = show();
var u = await getUserByEmail(email);
var points = await getPointsByIdUser(u.id);
var timelinePoints = [], timelinePointsC = [], timelinePointsF = [];

for (var i = 0; i < points.length; i++) {
    var point = points[i];
    var p = new Point(point.user_id, point.titulo, point.init_date, point.end_date,  point.descripcion, point.state, point.location)
    switch(points[i].state) {
        case STATES[0]:
            timelinePoints.push(p);
            break;
        case STATES[1]:
            timelinePointsC.push(p);
            break;
        case STATES[2]:
            timelinePointsF.push(p);
            break;
    }
}

generateDiv("timeline", timelinePoints);
generateDiv("timeline_c", timelinePointsC);
generateDiv("timeline_f", timelinePointsF);

document.getElementById("nameUser").innerHTML = u.nombre;
document.getElementById("dateUser").innerHTML = u.fecha_nacimiento;
document.getElementById("telUser").innerHTML = u.tel;
document.getElementById("emailUser").innerHTML = u.email;

setTimeout(() => { 
    showTimeline("timeline");
}, 0);
setTimeout(() => { 
    showTimeline("timeline_c");
}, timelinePoints.length * 1000);
setTimeout(() => { 
    showTimeline("timeline_f");
}, timelinePoints.length * 1000 + timelinePointsC.length * 1000);
