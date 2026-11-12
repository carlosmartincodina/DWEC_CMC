document.getElementById("idEnviar").addEventListener("click",prueba)


function prueba() {
    let aficiones = new Map()
    let deporte = document.querySelector("#idDeporte").value
    let serie = document.querySelector("#idSerie").value
    let pelicula = document.querySelector("#idPelicula").value

    if (deporte.length != 0) {
    aficiones.set("deporte", deporte)
    }
    if (serie.length != 0) {
    aficiones.set("serie", serie)
    }
    if (pelicula.length != 0) {
    aficiones.set("pelicula", pelicula)
    }
    
    aficiones.forEach((valorInput, clave) => {
        let crearHijo = document.createElement("a")
        crearHijo.innerHTML = "<br>"+valorInput
        let recuperarPadre = document.querySelector(`#lista${clave}`);
        if (recuperarPadre) {
            recuperarPadre.appendChild(crearHijo);
        }
        
    })    
}