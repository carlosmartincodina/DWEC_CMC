const lista = document.querySelector("ul")
let contador = 1
let boton = document.getElementById("boton")
boton.addEventListener("click", organizar)


// Inicializamos array vacío para que se almacenen los ids de los items que se eliminan para que no puedan coincidir los ids
// por el contador
let idsEliminados = []
// Eliminar elemento de la lista
lista.addEventListener("click", (e) => {
    // Cogemos el valor del item sobre el que se ha hecho click
    let item = e.target;
    //Añadimos al array el id que se ha eliminado
    idsEliminados.push(item.id)
    //Eliminamos el elemento
    lista.removeChild(item)
});


// Añadir elemento de la lista
function organizar(event) {
    //Evitamos que la página se recargue al darle al botón
    event.preventDefault()
    // Cogemos el valor del campo de texto
    let campoText = document.getElementById("campoTexto").value
    // Creamos el hijo de li
    let crearHijo = document.createElement("li")
    // Le damos el valor del campo de texto al hijo
    crearHijo.innerHTML = campoText
    //Comprobamos si el array está vacío.
    //En caso de que lo esté, coge el número del contador para agregarselo al ID
    //En caso contrario, coge el valor del último elemento añadido y lo elimina
    if (idsEliminados.length === 0) {
        crearHijo.id = `item-${contador}`
        contador++
    } else {
        crearHijo.id = idsEliminados.pop()
    }
    // Agregamos a la lista el nuevo item
    lista.appendChild(crearHijo)
}