//Ejercicio 1
document.getElementById("anadirTarea").addEventListener("click",addTarea)
function addTarea() {
    let input = document.getElementById("tarea").value
    if (input.trim() !== "") {
    let nuevaTarea = document.createElement("li")
    let recuperarPadre = document.querySelector("#listaTareas")
    nuevaTarea.innerHTML = input
    recuperarPadre.appendChild(nuevaTarea)
    } else {
        alert("Por favor, introduce la tarea.")
    }
}
//Ejercicio 2
document.getElementById("generarNumero").addEventListener("click", generarNumero)
document.getElementById("borrarNumeros").addEventListener("click", borrarNumeros)
function generarNumero() {
    let numAle = parseInt((Math.random()*100)+1)
    let listaNumeros = document.getElementById("listaNumeros")
    let nuevoNumero = document.createElement("ul")
    nuevoNumero.innerHTML = numAle
    listaNumeros.append(nuevoNumero)
}
function borrarNumeros() {
    document.getElementById("listaNumeros").replaceChildren()
}

//Ejercicio 3
document.getElementById("crearCheckbox").addEventListener("click", crearCheckbox)
function crearCheckbox() {
    let input = parseInt(document.getElementById("cantidad").value)
    if (input > 1 || !input.isNan()) {
        let recuperarPadre = document.getElementById("contenedorCheckbox")
        let checkbox = document.createElement("input")
        checkbox.type= "checkbox"
        for (let i = 1; i < input+1; i++) {
            let checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.id = i
            recuperarPadre.appendChild(checkbox)
        }
    }
}

//Ejercicio 4

document.getElementById("anadirAsignatura").addEventListener("click", anadirAsignatura)
let setAsignaturas = new Set()

function anadirAsignatura() {
    let asignatura = document.getElementById("asignatura").value
    let nota = document.getElementById("nota").value

    if (asignatura.trim() !== "" && !isNaN(nota)) {
        setAsignaturas.add(`Asignatura: ${asignatura}\n Nota: ${nota}`)
        console.log(setAsignaturas)

    }
}