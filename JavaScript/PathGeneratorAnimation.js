const REPETICIONES = 10;
const SAMPLETITLE = "Sample Title", SAMPLETEXT = "Hola mundo guapo mucho bonito";
var isStart = true, isVisible = false;

function generateDiv() {
    for(var i = 0; i < REPETICIONES; i++) {
        var div = document.createElement("div"), h2 = document.createElement("h2"), p = document.createElement("p");
        
        div.id = "point_"+ (i + 1);
        if (isStart) { div.className = "point start" }
        else { div.className = "point end" }
        h2.innerHTML = SAMPLETITLE;
        p.innerHTML = SAMPLETEXT;

        isStart = !isStart;

        div.appendChild(h2);
        div.appendChild(p);
        document.getElementById("pathContent").appendChild(div);
    }
}

function changeVisibilityDivs(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve(document.getElementById("point_" + num))
        }, 1000 * num);
    })
}

$("#showPath").click(() => {
        document.getElementById("pathContent").style.visibility = "visible";
        document.getElementById("pathContent").style.height = (REPETICIONES * 100) + "px";
        for (var i = 0; i < REPETICIONES; i++) {  
            changeVisibilityDivs(i + 1).then((datos) => {
                datos.style.visibility = "visible";
                datos.style.width = "50%"; 
            });
        }
});

generateDiv();

