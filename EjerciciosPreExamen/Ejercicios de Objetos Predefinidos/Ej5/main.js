/* Crea un contador regresivo que comience en 10 y disminuya cada segundo. Cuando llegue a 0, debe
mostrar un mensaje "¡Tiempo terminado!" y detenerse. */

let tiempo = 10
let caja = document.createElement("div")
caja.id = "caja"
document.body.appendChild(caja)

let timer = window.setInterval(() => {
    document.getElementById("caja").innerHTML = tiempo
    tiempo--
    if (tiempo === -2) {
        document.getElementById("caja").innerHTML = "¡Tiempo terminado!"
        window.clearInterval(timer)
    }
},1000)