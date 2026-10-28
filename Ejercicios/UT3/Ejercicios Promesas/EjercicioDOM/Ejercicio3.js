const elementos = document.getElementById("productSelect")
const listaCompra = new Map()

fetch("productos.json")
.then((respuesta) => {
    if (!respuesta.ok) {
            throw new Error(`HTTP error, estado = ${respuesta.status}`)
    }
    return respuesta.json()
}).then((data) => {
    data.productos.forEach(element => {
        let hijo = document.createElement("option")
        hijo.value = element.id
        hijo.textContent = `${element.nombre} - ${element.precio}€`
        elementos.appendChild(hijo)
    })
}).catch((error) => {
    console.log(error.message)
})

//Si se selecciona un objeto se añade
elementos.addEventListener("change", (e) => {
    //Obtenemos el valor del option seleccionado
    let producto = elementos.querySelector(`option[value="${e.target.value}"]`).text;
    //Si no es la primera opción, se cumple el if.
    if (producto !== "-- Selecciona un producto --") {
    let hijo = document.createElement("li")
    hijo.innerHTML = `${producto}`
    document.getElementById("productoList").appendChild(hijo)
    } else{
        return;
    }
    anadirAlMap(producto)
})


function anadirAlMap(producto) {
    //Separamos por el guion a un array
    let productoSplit = producto.split("-")
    //Eliminamos espacio
    productoSplit[0] = productoSplit[0].trim()
    //Quitamos el simbolo del euro y el espacio
    productoSplit[1] = productoSplit[1].replace("€","").trim()
    //Añadimos el producto y el precio a la lista
    listaCompra.set(productoSplit[0]+Math.round(Math.random()*100,4), productoSplit[1])
    anadirHTML()
}
function anadirHTML() {
    //Obtenemos el valor que tiene el Map y lo ponemos en el resumen
    document.getElementById("totalProductos").innerHTML = listaCompra.size
    //Hacemos una variable para ir sumando todos los precios que hay
    let p=0
    listaCompra.forEach((precio) => {
        //Lo pasamos a float
        p+=parseFloat(precio)
    })

    document.getElementById("importeTotal").textContent = p
}

//Doble click para borrar tanto map como lista de la compra
document.body.addEventListener("key", () => {
    //Limpiamos map
    listaCompra.clear()
    //Restablecemos el valor del resumen de la compra
    document.getElementById("totalProductos").innerHTML = 0
    document.getElementById("importeTotal").innerHTML = 0
    //Eliminamos todos los hijos de la lista de la compra
    document.getElementById("productoList").replaceChildren()
})
document.getElementById("productoList").addEventListener("dblclick",((e) => {
    e.target.innerHTML = ""
}))