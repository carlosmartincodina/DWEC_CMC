/* Crea un <div> con un mensaje que desaparezca automáticamente después de 5 segundos. Usa
setTimeout para modificar el estilo display o visibility del elemento. */
let caja = document.createElement("div")
caja.id = "caja"
caja.innerHTML = "Te estoy observando"
document.body.appendChild(caja)

contador = 0

let timer = window.setInterval(() => {
    if (contador==0) {
    let ocultar = document.getElementById("caja").style = 'display: none'
    contador++
    } else {
    let mostrar = document.getElementById("caja").style = 'display: block'
    contador--
    }
},7000)