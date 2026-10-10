document.getElementById("soloIda").addEventListener("change", soloIda)
document.getElementById("travelForm").addEventListener("submit", buscarTrayectos);

function soloIda() {
    let checkBoxSoloIda = document.getElementById("soloIda")
    let campoFechaVuelta = document.getElementById("fechaVuelta")
    //Si se el checkbox de soloIda está marcado, se desactiva el campoFechaVuelta
    campoFechaVuelta.disabled = checkBoxSoloIda.checked;
}

function buscarTrayectos(event) {
    event.preventDefault()
    let campoOrigen = document.getElementById("origen")
    let campoDestino = document.getElementById("destino")
    console.log("HE ENTRADO EN buscarTrayectos");
    campoOrigen.required = true
    campoDestino.required = true

    if (campoOrigen.value.trim() === "") {
        alert("Debes introducir el origen")
        return;
    }
        if (campoDestino.value.trim() === "") {
        alert("Debes introducir el destino")
        console.log("Si has introducido el espacio en blanco, bien (destino)")
        return;
    }

    //Inicio de captura de fechas
    let campoFechaIda = document.getElementById("fechaIda")
    let campoFechaVuelta = document.getElementById("fechaVuelta")
    campoFechaIda = campoFechaIda.value.split("-")
    let campoFechaIdaFormat = `${campoFechaIda[0]}-${campoFechaIda[1]}-${campoFechaIda[2]}`
    campoFechaVuelta = campoFechaVuelta.value.split("-")
    let campoFechaVueltaFormat = `${campoFechaVuelta[0]}-${campoFechaVuelta[1]}-${campoFechaVuelta[2]}`
    // Fin de captura de fechas
    //Inicio traduccion de fechas
    let diaActual = new Date().getDate().toString().padStart(2, '0');
    let mesActual = new Date().getMonth().toString();
    mesActual = parseInt(mesActual)+1
    mesActual = String(mesActual).padStart(2, '0')
    let anyoActual = new Date().getFullYear().toString();
    let fechaActual = `${anyoActual}-${mesActual}-${diaActual}`
    //Fin traduccion de fechas
    //Inicio comprobación de que fecha de ida no sea anterior a la actual, y viceversa
    let checkBoxSoloIda = document.getElementById("soloIda")
    if (campoFechaIdaFormat < fechaActual || (!checkBoxSoloIda.checked && campoFechaVueltaFormat < campoFechaIdaFormat)) {
        alert("Se ha introducido una fecha anterior. A no ser que tengas una máquina del tiempo, no se puede hacer el viaje.")
        return;
    }
    // Si salta al else porque todo está bien, capturamos los campos de form-resultados para mostrarlos
    else {
        // Capturamos todos los datos
        const resOrigen = document.getElementById("resOrigen")
        const resDestino = document.getElementById("resDestino")
        const resFechaIda = document.getElementById("resFechaIda")
        const resFechaVuelta = document.getElementById("resFechaVuelta")
        const resSoloIda = document.getElementById("resSoloIda")

        // Hacemos un innerHTML de los campos para mostrar los datos
        resOrigen.innerHTML = campoOrigen.value
        resDestino.innerHTML = campoDestino.value
        resFechaIda.innerHTML = campoFechaIdaFormat
        // Si hay fecha de vuelta, la ponemos

        if (!checkBoxSoloIda.checked && campoFechaVueltaFormat != "") { 
        resFechaVuelta.innerHTML = campoFechaVueltaFormat
        }
        //Comprobamos si el checkbox está marcado o no.
        if (checkBoxSoloIda.checked) {
            resSoloIda.innerHTML = "Sí"
        } else {
            resSoloIda.innerHTML = "No"
        }
    }
  }