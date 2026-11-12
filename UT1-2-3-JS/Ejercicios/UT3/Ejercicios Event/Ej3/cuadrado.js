let X = 0
let Y = 0


document.addEventListener("keydown", (e) => {
    let caja = document.getElementById("idCaja")
    switch(e.key) {
        case 'ArrowDown':
        case '2':
        X+=5
        caja.style.top = X+"px"
        break;

        case 'ArrowUp':
        case '8':
        X-=5
        caja.style.top = X+"px"
        break;
        
        case 'ArrowRight':
        case '6':
        Y+=5
        caja.style.left = Y+"px"
        break;

        case 'ArrowLeft':
        case '4':
        Y-=5
        caja.style.left = Y+"px"
        break;
    }
})