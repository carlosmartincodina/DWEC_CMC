// Adivino de número del 1 al 100, se pregunta al usuario por el número, si escribe algo que no es un número se indica que lo acertó y se finaliza el juego
// Si lo acierta, finaliza el juego. Si no, le pregunta si es mayor o menor y vuelve a preguntar. Si se cancela cualquier cuadro, se finaliza indicando cancelado.
// Si ha finalizado correctamente, se indica el número de intentos que han pasado.

let Adivino = () => {
    let continuar = false
    do {
        let numIntentos = 0
        let numAle = parseInt(Math.random()*100)+1
        let acertado = false
    do {
        console.log(numAle)
        numIntroducido = prompt("Indica un número para empezar del 1 al 100")
        numIntentos+=1
            if (isNaN(numIntroducido) || numIntroducido === null) {
                alert("No tengo tiempo...")
                break
            } else if (numIntroducido < 1 || numIntroducido > 100) {
            alert("Numero fuera de rango.")
            numIntentos-=1
            } else if (numIntroducido < numAle) {
                alert("El número es mayor")
            } else if (numIntroducido > numAle) {
                alert("El número es menor")
            } else {
                alert(`Has acertado el número! Era el ${numAle} y has tardado ${numIntentos} intentos en adivinarlo.`)
                acertado=true
            }
        } while (!acertado || numIntroducido === null)
            continuar = confirm("¿Quieres continuar?")
        } while (continuar)
}