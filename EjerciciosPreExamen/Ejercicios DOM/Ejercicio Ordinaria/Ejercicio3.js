let productos = new Map()
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
        productos.set(element.id,`${element.nombre} - ${element.precio}€`)
    });

    productos.forEach((e, i) => {
    let hijo = document.createElement("option")
    let recuperarLista = document.getElementById("productSelect")
    hijo.innerHTML = e
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
    console.log(e.target.value)
    let producto = document.getElementById("productSelect").querySelector(`option[value="${e.target.value}"]`).text;
    let recuperarLista = document.getElementById("productoList")
    let hijo = document.createElement("li")
    hijo.innerHTML = producto
    hijo.classList.add("summary")
    recuperarLista.appendChild(hijo)
})