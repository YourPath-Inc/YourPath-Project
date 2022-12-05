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

export function showTimeline (timeline) { 
    var rep = document.getElementById(timeline).childElementCount;
    document.getElementById(timeline).style.visibility = "visible";
    var heigtSum = 0;
    for (let i = 0; i < rep; i++) {
        var obj = document.getElementById("point_" + timeline + "_" + (i + 1));
        if(obj.offsetHeight) { heigtSum += obj.offsetHeight; } 
        else { heigtSum += obj.style.pixelHeight; }
    }
    for (var i = 0; i < rep; i++) {  
        changeVisibilityDivs((i + 1), timeline).then((datos) => {
            datos.style.visibility = "visible";
            datos.style.width = "50%";
        });
        changeChildVisiivility((i + 1), timeline).then((datos) => {
            for (var i = 0; i < datos.length; i++) {
                datos[i].className = datos[i].className + " lineUp";
                datos[i].style.visibility = "visible";
            }
        });
    }
    document.getElementById(timeline).style.height = (heigtSum) + "px";
}