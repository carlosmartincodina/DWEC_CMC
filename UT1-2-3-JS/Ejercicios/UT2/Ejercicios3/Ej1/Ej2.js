let tictac = document.getElementById("tic")
let fiveseconds = document.getElementById("5segundos")
let idOcultar = window.setTimeout(()=> (fiveseconds.style.display = 'none'),5000)


let tic = window.setInterval(()=> tictac.style.display = 'none',200)
let tac = window.setInterval(()=> tictac.style.display = 'block',300)


// Añadir que a los 7 segundos que cambie de color cada segundo

let generarColor = () => {
        let rojo=parseInt(Math.random()*255);
        let verde=parseInt(Math.random()*255);
        let azul=parseInt(Math.random()*255);
        return `rgb(${rojo},${verde},${azul})`
}

let segundosParpadeo = () => {
let cambiarColorFondo = window.setInterval(() => (document.body.style.backgroundColor = generarColor()), 1000)
}

setTimeout(segundosParpadeo,7000)