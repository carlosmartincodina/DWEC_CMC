let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");
let num3 = prompt("Ingrese el tercer número:");

let nombre = prompt("Ingrese su nombre completo: ")
nombre = nombre.split(" ")

console.log(`Hola ${nombre[0]} ${nombre[1]} ${nombre[2]}`);
console.log(`La suma de los tres números es: ${parseInt(num1) + parseInt(num2) + parseInt(num3)}`);
console.log(`La multiplicación de los tres números es: ${parseInt(num1) * parseInt(num2) * parseInt(num3)}`);
console.log(`La división del primer y tercer número es : ${parseInt(num1) / parseInt(num3)}`);