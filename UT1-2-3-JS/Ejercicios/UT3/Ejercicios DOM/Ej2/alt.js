let insertarElemento = () => {
    // Generamos nuevo numero aleatorio
    let numAle = Math.random();
    //Seleccionamos la primera etiqueta <ul>
    let padre = document.querySelector("ul");
    //Creamos un elemento HTML <li>>
    let nuevoHijo = document.createElement("li");
    //Cambiamos el valor de nuevoHijo y ponemos el numero aleatorio
    nuevoHijo.innerHTML = String(numAle)
    //Añadimos un hijo a la clase padre (li a ul)
    padre.appendChild(nuevoHijo)
}

let boton = document.getElementById("idBoton").addEventListener("click",insertarElemento)