let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");
let num3 = prompt("Ingrese el tercer número:");

if (parseInt(num1) > 10 || parseInt(num2) > 10 || parseInt(num3) > 10) {
    console.log("Alguno de los números ingresados es mayor a 10");
} else {
    console.log("Todos los números ingresados son menores o iguales a 10");
}