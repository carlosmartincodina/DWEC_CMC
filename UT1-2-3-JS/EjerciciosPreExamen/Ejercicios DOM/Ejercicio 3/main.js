/* Hacer un programa que permita crear checkbox de forma dinámica al pulsar el botón.
• El número de checkbox, debe ser especificado en un campo de tipo texto(input). */

const boton = document.getElementById("idBoton")
const lista = document.getElementById("lista")
const numeroCheckbox = document.getElementById("idInput")

boton.addEventListener("click", (() => {
    for (let i = 0; i < numeroCheckbox.value; i++) {
    let nombre = document.createElement("label")
    let checkbox = document.createElement("input")
    let br = document.createElement("br")
    nombre.innerHTML = String(Math.random())
    checkbox.type = "checkbox"
    checkbox.name = "nombreCheckbox"
    nombre.appendChild(checkbox)
    lista.appendChild(nombre)
    lista.appendChild(br)
    }
}))