document.getElementById("soloIda").addEventListener("change", soloIda)
document.getElementById("travelForm").addEventListener("submit", buscarTrayectos);

function soloIda() {
    let checkBoxSoloIda = document.getElementById("soloIda")
    let campoFechaVuelta = document.getElementById("fechaVuelta")
    //Si se el checkbox de soloIda está marcado, se desactiva el campoFechaVuelta
    campoFechaVuelta.disabled = checkBoxSoloIda.checked;
}

function buscarTrayectos(event) {

    let campoOrigen = document.getElementById("origen")
    let campoDestino = document.getElementById("destino")
    console.log("HE ENTRADO EN buscarTrayectos");
    campoOrigen.required = true
    campoDestino.required = true

    if (campoOrigen.value.trim() === "") {
        alert("Debes introducir el origen")
        console.log("Si has introducido el espacio en blanco, bien (origen)")
        event.preventDefault()
    }
        if (campoDestino.value.trim() === "") {
        alert("Debes introducir el destino")
        console.log("Si has introducido el espacio en blanco, bien (destino)")
        event.preventDefault()
    }

    let campoFechaIda = document.getElementById("fechaIda")
    let campoFechaVuelta = document.getElementById("fechaVuelta")
    campoFechaIda = campoFechaIda.value.split("-")
    const campoFechaIdaFormat = 
    campoFechaVuelta = campoFechaVuelta.value.split("-")

    //Inicio traduccion de fechas
    let diaActual = new Date().getDate().toString().padStart(2, '0');
    let mesActual = new Date().getMonth().toString();
    mesActual = parseInt(mesActual)+1
    mesActual = String(mesActual).padStart(2, '0')
    let anyoActual = new Date().getFullYear().toString();
    console.log(`${diaActual} ${mesActual} ${anyoActual}`)
    //Fin traduccion de fechas
    const fechaActual = `${diaActual}-${mesActual}-${anyoActual}`

    

    let checkBoxSoloIda = document.getElementById("soloIda")

  }