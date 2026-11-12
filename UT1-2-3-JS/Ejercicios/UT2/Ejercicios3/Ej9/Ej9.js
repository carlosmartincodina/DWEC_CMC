const inventario = ["Laptop", "Mouse", "Teclado", "Monitor", "Tablet", "Mouse", "Auriculares"];

//Comprobación de que es array
console.log(`¿Es un array? ${Array.isArray(inventario)}`)
//Comprobacion de si incluye tablet
console.log(`¿Incluye tablet el array? ${inventario.includes("Tablet")}`)
// Comprobar la posición de Mouse
console.log(`¿En qué posición está Mouse? ${inventario.indexOf("Mouse")}`)
// Buscar desde la posicion 2 la palabra mouse
console.log(`¿En qué posición está la palabra Mouse desde la posicion 2? ${inventario.lastIndexOf("Mouse")}`)
