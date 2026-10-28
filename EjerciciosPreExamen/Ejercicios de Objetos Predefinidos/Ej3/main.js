/* Crea un <div> con un mensaje que parpadee continuamente, alternando entre visible y no visible cada
segundo. Usa setInterval para cambiar periódicamente la propiedad visibility o display del elemento. */

let caja = document.createElement("div")
caja.id = "caja"
caja.innerHTML = "COMPRAME"
document.body.appendChild(caja)
let contador = 0

let timer = window.setInterval(() => {
    if (contador === 0) {
        document.getElementById("caja").style.display = "none"
        contador++
    } else {
        document.getElementById("caja").style.display = "block"
        contador--
    }
},1000)