/* Realizar un programa que pasados 20 segundos, nos muestre una vez la fecha actual del sistema.
[SetTimeOut + Date + console.log] */

let fecha = new Date().toLocaleDateString('es-ES')
function devuelvoFecha() {
    console.log(fecha)
}

let timer = window.setTimeout(devuelvoFecha,1000)