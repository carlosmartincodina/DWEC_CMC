let sueldo = parseInt(prompt("Ingrese su sueldo:"));
let antiguedad = parseInt(prompt("Ingrese su antigüedad en años:"));

if (sueldo >= 500) {
    console.log("Cobras lo mismo, no hay aumento.");
} else if (sueldo < 500 && antiguedad < 10) {
    sueldo *= 2;
    console.log(`Tu nuevo sueldo es: ${sueldo}€`);
} else if (sueldo < 500 && antiguedad >= 10) {
    sueldo *= 3;
    console.log(`Tu nuevo sueldo es: ${sueldo}€`);
}