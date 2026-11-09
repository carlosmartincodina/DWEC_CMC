/* Haz un programa que cuando se pulse un botón “InsertarAleatorio”, añada un elemento con un número
aleatorio a una lista desordenada (elemento UL). */

// Generar aleatorio
function aleatorio() {
    return Math.random()
}
const lista = document.getElementById("lista")
const boton = document.getElementById("idBoton")

// Añadimos event listener
boton.addEventListener("click", (() => {
    let nuevoHijo = document.createElement("li")
    nuevoHijo.innerHTML = `Nuevo elemento: ${aleatorio()}`
    lista.appendChild(nuevoHijo)
}))