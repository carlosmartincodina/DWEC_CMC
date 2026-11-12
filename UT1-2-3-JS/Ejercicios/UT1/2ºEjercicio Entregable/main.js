// Seleccionamos los elementos del DOM que queremos modificar
const boton = document.getElementById('miBoton');
const titulo = document.getElementById('titulo');

// Creamos una variable para llevar el control del estado
let cambiado = false;

// Añadimos un evento de tipo 'click' al botón
boton.addEventListener('click', function() {
    if (!cambiado) {
        titulo.textContent = '¡Has hecho clic en el botón!';
        boton.textContent = 'Restablecer';
        cambiado = true;
    } else {
        titulo.textContent = '¡Hola, Carlos!';
        boton.textContent = 'Haz clic aquí';
        cambiado = false;
    }
});

let empleados = [
    { "nombre": 'Alberto', "edad": 45, "puesto": 'Gerente' },
    { "nombre": 'Beatriz', "edad": 30, "puesto": 'Desarrolladora' },
    { "nombre": 'Carlos', "edad": 25, "puesto": 'Diseñador' },
    { "nombre": 'Diana', "edad": 28, "puesto": 'Analista' }
];

let manera1 = document.getElementById('manera1');
manera1.innerHTML = "Hola mundo!"