// Calcular factorial

calcularFactorial = () => {
let numero = parseInt(prompt("Introduce el número para calcular su factorial."))
let aux = 1
for (let i = 1;i<numero + 1;i++) {
    aux*=i
}
console.log(`El factorial de ${numero} es ${aux}`)
}

// 1x2x3x4x5
