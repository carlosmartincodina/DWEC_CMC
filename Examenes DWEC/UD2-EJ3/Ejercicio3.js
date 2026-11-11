// 1. Selección de elementos del DOM
const valX = document.getElementById('val-x');
const valY = document.getElementById('val-y');
const zonaDibujo = document.getElementById('zona-dibujo');

// 2. Variables de estado
let valorX = 0
let valorY = 0
let desbloqueado = false;
const TARGET_X = 500;
const TARGET_Y = 500;

// --- LÓGICA ---

document.addEventListener("mousemove", ((e) => {
    valorX = e.clientX
    valorY = e.clientY
    valX.innerHTML = valorX
    valY.innerHTML = valorY

    if ((valorX === TARGET_X) && (valorY === TARGET_Y)) {
        //Cambiar color cuando esta en 500 y 500
        zonaDibujo.style.borderColor = "#2a9d8f"
        zonaDibujo.style.backgroundColor = "#f0fdf4"
        //Cuando esta en 500 y 500, recoge las teclas pulsadas
        document.addEventListener("keydown", ((e) => {
            let letra = document.createElement("span")
            letra.innerHTML = e.key
            letra.classList = "letra-dibujada"
            zonaDibujo.appendChild(letra)
        }))
    } else {
        // Cambiamos color cuando no este en 500 y 500
        zonaDibujo.style.border = "2px dashed #ccc"
        zonaDibujo.style.backgroundColor = "white"
        zonaDibujo.innerHTML = "" 
    }
}))