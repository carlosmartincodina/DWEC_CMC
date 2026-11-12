let caja = document.getElementById("idCaja")
let X = 0
let Y= 0
document.addEventListener("keydown", (e) => {
    switch(e.key) {

    case "ArrowDown":
    if (X >= 0) {
    X+=0.5
    caja.style.top =X+"em"
    }
    
    break;

    case "ArrowUp":
    X-=0.5
    caja.style.top =X+"em"
    break;

    case "ArrowLeft":

    Y-=0.5
    caja.style.left =Y+"em"
    break;
    case "ArrowRight":
    Y+=0.5
    caja.style.left =Y+"em"
    break;
    }
})