/* Realizar una página web para gestionar el evento click del ratón:
• Si es pulsado el botón, la página cambiará de color(color aleatorio).
• Si es pulsado cualquier otra parte del documento, el color de la página debe volver a blanco. */

let boton = document.getElementById("boton")

boton.addEventListener("click", (e) => {
    document.body.style.backgroundColor = colorAleatorio()
    e.stopPropagation()
})

function colorAleatorio() {
    let rojo = ((Math.random()*255)+1)
    let verde = ((Math.random()*255)+1)
    let blue = ((Math.random()*255)+1)

    return `RGB(${rojo},${verde},${blue})`
}

document.body.addEventListener("click", () => {
    document.body.style.backgroundColor = "white"
})