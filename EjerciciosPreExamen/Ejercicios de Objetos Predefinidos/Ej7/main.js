/* Crea un programa, que te muestre una página llena de cuadrados. El html base, es proporcionado por
el profesor. */

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