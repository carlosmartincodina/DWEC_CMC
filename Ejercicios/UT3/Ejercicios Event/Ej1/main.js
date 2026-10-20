document.getElementById("botonCambiarColor").addEventListener("click", function (e) {
    e.stopPropagation();
    document.body.style.backgroundColor = colorAleatorio()
})

document.addEventListener("click", fondoBlanco)

function fondoBlanco(e) {
    document.body.style.backgroundColor = "white"
}


function colorAleatorio() {
    let rojo = Math.random()*255
    let verde = Math.random()*255
    let azul = Math.random()*255
    return `rgb(${rojo},${verde},${azul})`
}