const boton = document.getElementById("startBtn") // Obtenemos elemento por ID
boton.addEventListener("click", contadorRegresivo) // Añadimos elemento
const historial = new Map // Creamos el Map para guardar el historial
let contadorHistorial = 0 // Inicializamos contador

    function fecha() {
    let diaSemana = new Date().getDay().toString()
    let hora = new Date().getHours().toString()
    let minutos = new Date().getMinutes().toString()
    const diasDeLaSemana = ["0", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    return `Hoy es ${diasDeLaSemana[diaSemana]}, a las ${hora}:${minutos}. Nos vemos mañana`
}

function contadorRegresivo() {
    let segundos = parseInt(prompt("Ingresa los segundos: "))
    while(isNaN(segundos) || segundos <= 0 || segundos === null) { //Bucle do-while para que se ejecute mientras no se cumpla la condición que se pide
        segundos = parseInt(prompt("Ingresa los segundos en el formato correcto: "))
    }
    const guardarSegundos = segundos // Para el map guardamos los segundos originales
    const intervalo = setInterval(() => {
        console.log(segundos)
        segundos--
        if (segundos === 0) // Paramos el interval cuando los segundos son 0
        {
            clearInterval(intervalo)
            const segundosAleatorios = parseInt(Math.random()*4)+1
            console.log(`Son ${segundosAleatorios} segundos aleatorios`)
            setTimeout(() => {
                alert(fecha())
                contadorHistorial++
                historial.set(contadorHistorial, `Cuenta atrás: ${guardarSegundos}s y segundos aleatorios: ${segundosAleatorios}s`)
            },segundosAleatorios*1000)
        }
    },1000)
}