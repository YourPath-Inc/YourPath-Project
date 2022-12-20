var isStart = true;

export function generateDiv(timelineType, arrayPoints) {
    for(var i = 0; i < arrayPoints.length; i++) {
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
        date.innerHTML = arrayPoints[i].getInit_date() + " - " + arrayPoints[i].getEnd_date();
        
        h2.innerHTML = arrayPoints[i].getTitulo();
        console.log(arrayPoints[i].getTitulo());
        h2.className = "child_of_point_" + timelineType + "_" + (i + 1);

        h3.innerHTML = arrayPoints[i].getLocation();
        h3.className = "child_of_point_" + timelineType + "_" + (i + 1);
        
        p.innerHTML = arrayPoints[i].getDescripcion();
        p.className = "child_of_point_" + timelineType + "_" + (i + 1);

        isStart = !isStart;

        content.appendChild(h2);
        content.appendChild(h3);
        content.appendChild(p);

        container.appendChild(date);
        container.appendChild(content);

        document.getElementById(timelineType).appendChild(container);
        document.getElementById(timelineType).style.transition = "height " + arrayPoints.length + "s";
    }
}