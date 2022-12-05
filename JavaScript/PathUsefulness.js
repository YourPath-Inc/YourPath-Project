import { showTimeline } from './Modules/PathAnimation.js';
import { generateDiv } from './Modules/PathContentGenerator.js';
import { Point } from './Modules/PointClass.js';

const REPETICIONES = 3;
const SAMPLETITLE = "Bootcamp en aprender a escribir Hola Mundo", SAMPLELOCATION = "Cuenca, Cuenca, ClM, España", SAMPLEDATE = "Hoy";
const SAMPLETEXT = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam dolorum officiis voluptas eaque. Ut dolor ea nam culpa repellat inventore nemo recusandae quasi ratione quidem, asperiores, aspernatur quibusdam eum.";

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

var arrayPoints = new Array(3);

for (var i = 0; i < REPETICIONES; i++) {
    var p = new Point(SAMPLETITLE, SAMPLELOCATION, SAMPLETEXT, SAMPLEDATE);
    arrayPoints[i] = p;
}

generateDiv("timeline", arrayPoints);
generateDiv("timeline_c", arrayPoints);
generateDiv("timeline_f", arrayPoints);