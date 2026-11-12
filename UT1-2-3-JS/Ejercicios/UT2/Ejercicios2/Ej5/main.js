const numCuadrados = 100
let generarCuadrados = () => {
    for(let i=1;i<=numCuadrados;i++){
        let rojo=parseInt(Math.random()*255);
        let verde=parseInt(Math.random()*255);
        let azul=parseInt(Math.random()*255);

        let left=parseInt(Math.random()*100)
        let top=parseInt(Math.random()*100)

        document.body.innerHTML+=
        `<div style='background-color:`+
        `rgb(${rojo},${verde},${azul});`+
        `left:${left};top:${top}'> </div>`
        ;
    }
}

let id = setInterval(generarCuadrados,1000)