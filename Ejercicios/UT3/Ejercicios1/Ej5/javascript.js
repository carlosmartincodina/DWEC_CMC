document.getElementById("soloIda").addEventListener("change", soloIda)
document.getElementById("submit", "OK")
function soloIda() {
    let checkBoxSoloIda = document.getElementById("soloIda")
    let campoFechaVuelta = document.getElementById("fechaVuelta")
    //Si se el checkbox de soloIda está marcado, se desactiva el campoFechaVuelta
    campoFechaVuelta.disabled = checkBoxSoloIda.checked;
}

function buscarTrayectos() {
    let campoOrigen = document.getElementById("origen")
    let campoDestino = document.getElementById("destino")
    let campoFechaIda = document.getElementById("fechaIda")
    let campoFechaVuelta = document.getElementById("fechaVuelta")
    let checkBoxSoloIda = document.getElementById("soloIda")
}