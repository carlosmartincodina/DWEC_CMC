let deporte = document.getElementById("idDeporte")
let serie = document.getElementById("idSerie")
let pelicula = document.getElementById("idPelicula")
let botonEnviar = document.getElementById("idEnviar").addEventListener("click",prueba)

function prueba() {
    let aficiones = {"deporte": deporte, "serie": serie, "pelicula": pelicula}

    for (let i = 0; i<aficiones.length;i++) {
            if (aficiones[i] != "") {
            let lista = document.querySelector(`#lista${aficiones[i].value}`)
            let nuevoElemento = document.createElement("a")
            nuevoElemento.innerHTML = "<br>"+aficiones[i]
            lista`${aficiones[i]}`.appendChild(nuevoElemento)
            }
    }
    
}