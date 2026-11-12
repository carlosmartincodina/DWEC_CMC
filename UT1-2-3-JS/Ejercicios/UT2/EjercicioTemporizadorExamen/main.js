let boton = document.querySelector(".boton")

boton.addEventListener("click", pedirTiempo)
let tiempoAcabado = false
function pedirTiempo() {
    let tiempoIntroducido = parseInt(prompt("Introduce el número para la cuenta atrás"))
    console.log(tiempoIntroducido)
    let id = window.setInterval(() => {
        if (tiempoIntroducido < 3) {
            let esperaAle = parseInt((Math.random()*4)+1)
            window.clearInterval(id)
            let id1 = window.setInterval(() => {
                esperaAle-=1
                console.log("Espera: "+esperaAle)
                if(esperaAle===0) {
                window.clearInterval(id1)
                console.log(fecha())
            }
            },1000)

        }
        tiempoIntroducido-=1
        console.log(tiempoIntroducido)
    },1000)
}

function fecha() {
    let fechaActual = new Date()
    let diaSemana = fechaActual.getDay()
    const diasDeLaSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
    diaSemana = diasDeLaSemana[diaSemana]
    let hora = fechaActual.getHours()
    let minuto = fechaActual.getMinutes()
    return `Hoy es ${diaSemana} a las ${hora}:${minuto}. Nos vemos mañana`
}