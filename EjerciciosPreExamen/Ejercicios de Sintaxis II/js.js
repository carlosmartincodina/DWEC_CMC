/*1º Crea una página web que pida al usuario un número a través de un cuadro de lectura(prompt).
Mostrar en consola el mensaje indicando si realmente era un número o no. */

// if (isNaN(prompt("Introduce un número"))) {
//     console.log("No es un número")
// } else {
//     console.log("Es un numero")
// }

// 2º Crear una página web que muestre un color de fondo aleatorio cada vez que entremos en ella
/* let rojo = (Math.random()*255)+1
let verde = (Math.random()*255)+1
let azul = (Math.random()*255)+1
document.body.style.backgroundColor = 'RGB('+rojo+verde+azul+')' */

/* 3º Haz una página web que implemente un juego de encontrar un número aleatorio bajo las premisas
que se explican a continuación:
• La página calculará un número del 1 al 100.
• Luego preguntará al usuario por el número.
• Si el usuario escribe algo que no es un número, se indica el mensaje “No tengo tiempo” y
finalizaremos el juego.
• Si el número escrito por el usuario es correcto, se indica que se acertó y finalizaremos el
juego.
• Si no, le dice si el número es menor o mayor y vuelve a preguntar cuál es.
• Si se cancela cualquier cuadro, el juego termina indicando que se canceló el juego.
• Al final, si ha finalizado correctamente el juego se indica el número de intentos.
• Se permite volver a jugar al usuario mediante un cuadro de confirmación */

/* let numero = parseInt((Math.random()*100)+1)
console.log(numero)
let numIntroducido = prompt("Introduce un número")
if (isNaN(numIntroducido)) {
    alert("No tengo tiempo")
} else {
    if (numIntroducido === numero) {
        alert(`Has acertado! El numero era ${numIntroducido}`)
    }
    
    else {
        do {
            numeroIntroducido = prompt("Introduce un número")
            if (isNaN(numIntroducido)) {
            alert("No tengo tiempo")
            break
            } else if (numIntroducido > numero) {
                alert("El número es menor")
            } else if (numIntroducido < numero) {
                alert("El número es mayor")
            } else {
                alert(`Has acertado! El numero era ${numIntroducido}`)
            }
        } while (numIntroducido !== numero || isNaN(numero))
        }
    } */

//El numero 4º no se hace por ser un ejercicio para calcular factorial.
/* Crear una aplicación web que muestre 2000 cuadrados de color aleatorio de 50x50 píxeles. La
posición de cada cuadrado en la página también será aleatoria. */

const cuadrado = document.createElement('div');
function numAleColor() {
    let rojo = (Math.random()*255)+1
    let verde = (Math.random()*255)+1
    let azul = (Math.random()*255)+1
    return `RGB(${rojo},${verde},${azul})`
}
function numRandom100() {
    return (Math.random()*100)+1
}

for (let i = 0 ;i < 2000;i++) {
    let nuevoCuadrado = document.createElement('div')
    nuevoCuadrado.style.position = 'fixed'
    nuevoCuadrado.style.width = '50px';
    nuevoCuadrado.style.height = '50px';
    nuevoCuadrado.style.backgroundColor = numAleColor()
    nuevoCuadrado.style.right = numRandom100()+"vw"
    nuevoCuadrado.style.bottom =numRandom100()+"vh"
    document.body.appendChild(nuevoCuadrado)
}