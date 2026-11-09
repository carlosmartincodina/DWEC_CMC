let inputOrigen = document.getElementById("origen").value
let inputDestino = document.getElementById("destino").value
let inputFechaIda = document.getElementById("fechaIda")
let inputFechaVuelta = document.getElementById("fechaVuelta")
const formulario = document.getElementById('travelForm');
let checkboxSoloIda = document.getElementById("soloIda")

//Si el checkbox está marcado, se desactiva el campo fecha vuelta
checkboxSoloIda.addEventListener("change", (e) => {
    if (checkboxSoloIda.checked) {
        inputFechaVuelta.disabled = true
    } else {
        inputFechaVuelta.disabled = false
    }
})
//Intercambiar valores de origen y destino
document.getElementById("swapButton").addEventListener("click", () => {
    let valorCampoOrigen = document.getElementById("origen").value
    let valorCampoDestino = document.getElementById("destino").value
    document.getElementById("origen").value = valorCampoDestino
    document.getElementById("destino").value = valorCampoOrigen
})

//Validacion de campos

formulario.addEventListener("submit", (e) => {
    inputOrigen = document.getElementById("origen").value
    inputDestino = document.getElementById("destino").value
    inputFechaIda = document.getElementById("fechaIda")
    inputFechaVuelta = document.getElementById("fechaVuelta")

    e.preventDefault()
    //Comprobacion de que campo origen y destino no estén vacios.
    if (inputOrigen.trim() === "" || inputDestino.trim() === "") {
        alert("Los campos origen y/o destino no pueden estar vacios.")
        return
    }
    //Comprobar que si checkbox no está marcado haya fecha de vuelta
    if (inputFechaVuelta.value.trim() === "" && !checkboxSoloIda.checked) {
        alert("Introduce fecha de vuelta")
        return
    }
    //Comprobar que fecha vuelta no sea inferior a fecha ida
    if (inputFechaVuelta.value < inputFechaIda.value && !checkboxSoloIda.checked) {
        alert("No hacemos viajes al pasado.")
    }
    document.getElementById("resOrigen").innerHTML = inputOrigen
    document.getElementById("resDestino").innerHTML = inputDestino
    document.getElementById("resFechaIda").innerHTML = inputFechaIda.value
    document.getElementById("resFechaVuelta").innerHTML = inputFechaVuelta.value
    if (checkboxSoloIda.checked) {
        document.getElementById("resSoloIda").innerHTML = "Si"
        document.getElementById("resFechaVuelta").innerHTML = "-"
    } else {
        document.getElementById("resSoloIda").innerHTML = "No"
    }
})