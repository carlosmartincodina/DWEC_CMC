/* Realizar un programa en javascript que abra una ventana al pasar 7 segundos, con el mensaje :
“Hola, te estoy observando” */

let timer = window.setInterval(observando,7000)

function observando() {
    alert("Te estoy observando")
}