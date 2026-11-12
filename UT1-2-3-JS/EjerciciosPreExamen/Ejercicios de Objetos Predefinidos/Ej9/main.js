/* Tienes un inventario de productos en una tienda: */
const inventario = ["Laptop", "Mouse", "Teclado", "Monitor", "Tablet", "Mouse", "Auriculares"];
/* Realiza las siguientes operaciones utilizando los métodos de búsqueda y comprobación: */
/* • [ isArray ] Verificar tipo: Comprueba si inventario es realmente un array */

console.log("¿Es un array? "+Array.isArray(inventario))

/* • [ includes ]Buscar producto: Verifica si el producto "Tablet" está disponible en el inventario */

console.log("¿Incluye el producto tablet? "+inventario.includes("Tablet"))

/* • [ indexof ]Encontrar posición: Encuentra la primera posición donde aparece "Mouse" en el inventario */

console.log("Posicion del primer mouse: "+inventario.indexOf("Mouse"))

/* • [ ???? ]Buscar desde posición: Encuentra la segunda aparición de "Mouse" buscando desde la posición 2*/
let inventarioIndex2 = inventario.slice(2)
console.log("Posicion del último mouse: "+inventarioIndex2.indexOf("Mouse"))
