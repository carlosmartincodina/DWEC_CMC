// --- VARIABLE GLOBAL ---
const historico = new Map();

// --- SELECTORES ---
const btnIniciar = document.getElementById('btnIniciar');
const inputInicial = document.getElementById('valorInicial');
const inputFinal = document.getElementById('valorFinal');
const estadoTexto = document.getElementById('estado');

// Contador para el Map
let identificador = 0

// --- LÓGICA ---

btnIniciar.addEventListener("click", () => {
    let auxInputInicial = parseInt(inputInicial.value)
    let auxInputFinal = parseInt(inputFinal.value)

    if (auxInputInicial >= auxInputFinal) {
        console.log("Error")
    } else {
        let idContador = window.setInterval(() => {
            console.log(auxInputInicial)
            auxInputInicial+=1
            if (auxInputInicial === auxInputFinal+1) {
                //Cancela el setInterval
                window.clearInterval(idContador)
                //Muestra la alerta despues de 3 segundos
                window.setTimeout(alertaAcabado,3000)
                // Agrega los resultados al map
                historico.set(identificador, [String(new Date().getHours()).padStart(2,"0")+":"+String(new Date().getMinutes()).padStart(2,"0"),inputInicial.value,inputFinal.value])
                identificador++
            }
        },1000)
    }
})

function alertaAcabado() {
    alert("¡Proceso completado con éxito!")
}