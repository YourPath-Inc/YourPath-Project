const REPETICIONES = 3;
const SAMPLETITLE = "Bootcamp en aprender a escribir Hola Mundo", SAMPLELOCATION = "Cuenca, Cuenca, ClM, España", SAMPLEDATE = "Hoy";
const SAMPLETEXT = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam dolorum officiis voluptas eaque. Ut dolor ea nam culpa repellat inventore nemo recusandae quasi ratione quidem, asperiores, aspernatur quibusdam eum.";
var isStart = true, isVisible = false;

function generateDiv(timelineType) {
    for(var i = 0; i < REPETICIONES; i++) {
        var container = document.createElement("div"), 
            date = document.createElement("div"), 
            content = document.createElement("div"), 
            h2 = document.createElement("h2"), 
            h3 = document.createElement("h3"),  
            p = document.createElement("p");
        
        container.id = "point_" + timelineType + "_" + (i + 1);
        if (isStart) { container.className = "container left" }
        else { container.className = "container right" }

        content.className = "content";
        
        date.className = "date";
        date.innerHTML = SAMPLEDATE;
        
        h2.innerHTML = SAMPLETITLE;
        h2.className = "lineUp child_of_point_" + timelineType + "_" + (i + 1);
        h3.innerHTML = SAMPLELOCATION;
        h3.className = "lineUp child_of_point_" + timelineType + "_" + (i + 1);
        
        p.innerHTML = SAMPLETEXT;
        p.className = "lineUp child_of_point_" + timelineType + "_" + (i + 1);

        isStart = !isStart;

        content.appendChild(h2);
        content.appendChild(h3);
        content.appendChild(p);
        

        container.appendChild(date);
        container.appendChild(content);

        document.getElementById(timelineType).appendChild(container);
        document.getElementById(timelineType).style.transition = "height " + REPETICIONES + "s";
    }
}

function changeVisibilityDivs(num, timeline) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve(document.getElementById("point_" + timeline + "_" + num))
        }, 1000 * num);
    })
}

function changeChildVisiivility(num, timeline) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve(document.getElementsByClassName("child_of_point_" + timeline + "_" + num))
        }, (1000 * num) + 1000);
    })
}

function showTimeline (timeline) { 
    document.getElementById(timeline).style.visibility = "visible";
    var heigtSum = 0;
    for (let i = 0; i < REPETICIONES; i++) {
        var obj = document.getElementById("point_" + timeline + "_" + (i + 1));
        if(obj.offsetHeight) { heigtSum += obj.offsetHeight; } 
        else { heigtSum += obj.style.pixelHeight; }
    }
    for (var i = 0; i < REPETICIONES; i++) {  
        changeVisibilityDivs((i + 1), timeline).then((datos) => {
            datos.style.visibility = "visible";
            datos.style.width = "50%";
        });
        changeChildVisiivility((i + 1), timeline).then((datos) => {
            for (var i = 0; i < datos.length; i++) {
                datos[i].style.visibility = "visible";
            }
        });
    }
    document.getElementById(timeline).style.height = (heigtSum) + "px";
}

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

generateDiv("timeline");
generateDiv("timeline_c");
generateDiv("timeline_f");