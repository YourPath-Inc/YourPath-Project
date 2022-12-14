import { showTimeline } from './Modules/PathAnimation.js';
import { generateDiv } from './Modules/PathContentGenerator.js';
import { Point } from './Modules/PointClass.js';
import { getPointsByIdUser } from "./Modules/APIConsultor.js"

const REPETICIONES = 3;
const SAMPLETITLE = "Bootcamp en aprender a escribir Hola Mundo", SAMPLELOCATION = "Cuenca, Cuenca, ClM, España", SAMPLEDATE = "Hoy";
const SAMPLETEXT = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam dolorum officiis voluptas eaque. Ut dolor ea nam culpa repellat inventore nemo recusandae quasi ratione quidem, asperiores, aspernatur quibusdam eum.";
const STATES = ["DONE", "DOING", "TODO"];

$(".triangulo").hover(() => {
    setTimeout(() => { 
        showTimeline("timeline");
    }, 0);
    setTimeout(() => { 
        showTimeline("timeline_c");
    }, 4000);
    setTimeout(() => { 
        showTimeline("timeline_f");
    }, 8000);
});

var points = await getPointsByIdUser(1);
console.log(points);
var timelinePoints = [], timelinePointsC = [], timelinePointsF = [];

for (var i = 0; i < points.length; i++) {
    var point = points[i];
    var p = new Point(point.user_id, point.titulo, point.init_date, point.end_date, point.state, point.location)
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
if (timelinePointsC[0] != undefined) { generateDiv("timeline_c", timelinePointsC); }

generateDiv("timeline_f", timelinePointsF);