let productos = new Map()
let informacion = new Map()
let contador = 0
//Parte JSON
fetch("productos.json")
.then((respuesta) => {
    if (!respuesta.ok) {
        throw new Error("No se ha podido leer el fichero")
    }
    return respuesta.json()
})
.then((datos) => {
    datos.productos.forEach(element => {
        productos.set(element.id,[element.nombre,element.precio])
    });

    productos.forEach((e, i) => {
    let hijo = document.createElement("option")
    let recuperarLista = document.getElementById("productSelect")
    hijo.innerHTML = e[0]+" - "+e[1]+"€"
    hijo.value = i
    recuperarLista.appendChild(hijo)
})
})
.catch((error) => {
    console.log(error)
})
//FIN PARTE JSON

//Event listener para meter los estos
document.getElementById("productSelect").addEventListener("change", (e) => {
    quitarRojo()
    let idProducto = parseInt(e.target.value) //Pasamos el value a int porque si no luego no lo lee
    let recuperarLista = document.getElementById("productoList")
    let hijo = document.createElement("li")
    hijo.classList.add("product-item")
    hijo.classList.add("nuevo-producto-rojo")
    hijo.id = contador
    let nuevoDiv = document.createElement("div")
    nuevoDiv.classList.add("product-info")
    let nombre = document.createElement("span")
    nombre.classList.add("product-name")
    let precio = document.createElement("span")
    precio.classList.add("product-price")
    let producto = productos.get(idProducto)
    nombre.innerHTML = producto[0]
    precio.innerHTML = producto[1]+"€"
    nuevoDiv.appendChild(nombre)
    nuevoDiv.appendChild(precio)
    hijo.appendChild(nuevoDiv)
    recuperarLista.appendChild(hijo)
    agregarAlResumen(producto[0],producto[1])
})

function quitarRojo() {
    let li = document.querySelectorAll("li")
    li.forEach((e) => {
        e.classList.remove("nuevo-producto-rojo")
    })
}

function agregarAlResumen(a,b) {
    informacion.set(contador,[a,b])
    contador++
    let sumaPrecios = 0
    informacion.forEach((a) => {
        sumaPrecios+=a[1]
    })
    document.getElementById("totalProductos").innerHTML = informacion.size
    document.getElementById("importeTotal").innerHTML = sumaPrecios
    
}

document.getElementById("productoList").addEventListener("click", (e) => {
    informacion.delete(parseInt(e.target.id))
    e.target.replaceChildren()
    e.target.remove()
    let sumaPrecios = 0
    informacion.forEach((a) => {
        sumaPrecios+=a[1]
    })
    document.getElementById("totalProductos").innerHTML = informacion.size
    document.getElementById("importeTotal").innerHTML = sumaPrecios
})