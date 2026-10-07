let cantidad = document.getElementById("idInputCantidad")
let contenedor = document.getElementById("idContenedorCheckbox")

document.getElementById("idEnviar").addEventListener("click", crearCheckBox)

function numAle() {
    return Math.random()
}

function crearCheckBox(){

    for (let i = 0; i<cantidad.value; i++) {
    let nombre = document.createElement("label")
    nombre.innerHTML = numAle()
    //Crear elemento a nivel de js
    let elemento = document.createElement("input")
    elemento.type="checkbox"
    elemento.name="checkboxes"
    elemento.value="hola"

    nombre.appendChild(elemento)
    //Añadir elemento al html
    contenedor.appendChild(nombre)
    }
}