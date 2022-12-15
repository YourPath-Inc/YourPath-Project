function store() {        
        /*Captura de datos escrito en los inputs*/        
        var nom = document.getElementById("nombretxt").value;
        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("Nombre", nom);
        /*Limpiando los campos o inputs*/
        document.getElementById("nombretxt").value = "";
    };   

function show(){                    
        /*Obtener datos almacenados*/
        var nombre = localStorage.getItem("Nombre");
        /*Mostrar datos almacenados*/      
        document.getElementById("nombre").innerHTML = nombre;
    };