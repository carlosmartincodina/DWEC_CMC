/* Realiza las siguientes operaciones utilizando los métodos de array: */
const estudiantes = [ "Ana García",
"Luis Martínez",
"María López",
"Carlos Rodríguez",
"Elena Sánchez",
"Pedro Hernández"
];


/* • [ slice ] Extraer un grupo : Crea un array derivado con los estudiantes desde la posición 2 hasta la 4
(sin modificar el array original) */

const estudiantesSlice = estudiantes.slice(2,5)

/* • [ join ] Generar lista : Convierte el array completo de estudiantes en una cadena de texto, separando
los nombres con " | " */

let listaCompleta = estudiantes.join(" | ")

/* • [ split ] Dividir información: Toma el primer estudiante del array y sepáralo en un array que contenga
[nombre, apellido] usando el espacio como separador */

    let estudiante1 = estudiantes[0].split(" ")