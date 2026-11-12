let imagenes = document.querySelectorAll(".imagen")

imagenes.forEach((imagen, index) => {
    let url = `imagenes/pic${index+1}.jpg`
    console.log(url)
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error, estado = ${response.status}`)
        }
        return response.blob()
    })
    .then(imagen.src = url)

    .catch((error) => {
        imagen.title = `Imagen no cargada ${error.message}`
    })
}) 


function anadirEstilo(e) {
    for (const imagen in imagenes) {
        imagen.className = "imagen oscurecer"
    }
    e.target.className = "expandir"
}
function reducir(e) {
    for (const imagen of imagenes) {
        imagen.className = "imagen"
    }
}

imagenes.forEach((e) => {
    e.addEventListener("click", anadirEstilo)
    e.addEventListener("dblclick", reducir)
})
