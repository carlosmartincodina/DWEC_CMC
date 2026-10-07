let deporte = document.getElementById("idDeporte")
let serie = document.getElementById("idSerie")
let pelicula = document.getElementById("idPelicula")
let botonEnviar = document.getElementById("idEnviar").addEventListener("click",prueba)

function prueba() {
    let aficiones = [deporte.value, serie.value, pelicula.value]

    for (let i = 0; i<aficiones.length;i++) {
            if (aficiones[i] != "") {
            let lista = document.querySelector(`#lista${aficiones[i]}`)
            let nuevoElemento = document.createElement("a")
            nuevoElemento.innerHTML = "<br>"+aficiones[i]
            listadeporte.appendChild(nuevoElemento)
            }
    }
    
}