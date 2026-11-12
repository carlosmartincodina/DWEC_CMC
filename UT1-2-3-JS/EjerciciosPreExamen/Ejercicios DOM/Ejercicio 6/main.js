let boton = document.getElementById("add")

//Añadir hijo
boton.addEventListener("click", () => {
    let campoTexto = document.getElementById("campoTexto").value
    let recuperarPadre = document.querySelector(".lista-compra")
    let crearHijo = document.createElement("li")
    crearHijo.innerHTML = campoTexto
    recuperarPadre.appendChild(crearHijo)
})

// Borrar hijo
document.querySelector(".lista-compra").addEventListener("click", (e) => {
    if (document.querySelector(".lista-compra").childElementCount > 0) {
    e.target.remove()
}
})