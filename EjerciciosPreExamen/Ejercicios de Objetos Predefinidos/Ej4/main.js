/* Haz que el color de fondo de la página cambie cada 2 segundos entre al menos 3 colores diferentes (ej:
rojo, verde, azul). Usa un array de colores y un índice que se actualice con setInterval. */

let contador = 0
let colores = ['red','blue','green']

let timer = window.setInterval(() => {
    if (contador === 3) {
        contador=0
        document.body.style.backgroundColor =  colores[0]
        contador++
    } else {
        document.body.style.backgroundColor =  colores[contador]
        contador++
    }
},1000)