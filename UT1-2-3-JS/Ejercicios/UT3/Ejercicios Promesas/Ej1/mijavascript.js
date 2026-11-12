const conteneder = document.getElementById("product-list")

fetch("productos.json")
    .then((respuesta) => {
        console.log(respuesta)
        if (!respuesta.ok) {
            throw new Error(`HTTP error, estado = ${respuesta.status}`)
        }


        return respuesta.json()

    }).then((data) => {
        console.log("Ejecutaré mi código JS. ")


        data.products.forEach(element => {
            let hijo = document.createElement("li")
            hijo.innerHTML=`Nombre: ${element.Name}, precio: ${element.Price}, ubicacion: ${element.Location}`
            conteneder.appendChild(hijo)
        })



    })
.catch((error) => {
    console.log(error)
})