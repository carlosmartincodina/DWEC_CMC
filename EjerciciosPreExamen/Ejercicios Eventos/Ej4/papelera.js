let papelera = document.getElementById("papelera")
let bola = document.getElementById("bola")
let zonaTrabajo = document.querySelector(".zona-trabajo")

document.addEventListener("dragend", ((e) => {

    if (e.target.id === "bola") {
        zonaTrabajo.removeChild(bola)
        papelera.src = "papeleraLLena.jpg"
    }
}))

document.body.addEventListener("dblclick", () => {
    console.log("DOBLE CLICK OK")
    papelera.src = "papeleraVacia.jpg"
})

