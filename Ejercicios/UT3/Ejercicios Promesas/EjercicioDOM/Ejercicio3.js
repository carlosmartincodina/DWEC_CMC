const elementos = document.getElementById("productSelect")

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

elementos.addEventListener("select", anadirAcompra)


function anadirAcompra(e) {
    let hijo = document.createElement("li")
    hijo.innerHTML = `${e.textContent}`
    document.getElementById("productoList").appendChild(hijo)
}