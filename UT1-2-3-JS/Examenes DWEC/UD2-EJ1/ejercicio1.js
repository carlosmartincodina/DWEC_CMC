let arrayNumeros = []
let arraySumado = []
// Genera el número del 1 al 10.

function numAle() {
    return parseInt(Math.random()*10+1)
}

secuenciaAcumulada()
function secuenciaAcumulada() {
    for (let i = 0; i<10;i++) {
        arrayNumeros[i] = numAle()
    }
    console.log(arrayNumeros)
    sumaArray()
}

function sumaArray() {
    let suma = 0
    arrayNumeros.forEach((e,i) => {
        suma+=e
        arraySumado[i]=suma
    })
    console.log(arraySumado)
} 