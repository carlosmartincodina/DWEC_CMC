// Almacenar en todo momento los elementos de la lista y su precio
const elementos = [
    ["platanos" , 1.99]
]
let contador = 1
// Almacenar en todo momentos las estadísticas de la lista
const estadisticas = new Map()
estadisticas.set("total-unidades" , 0)
estadisticas.set("total-precio" , 0)

//Almacenar en todo momento la lista de productos sin repetir



document.getElementById("add-btn").addEventListener("click", anadirElemento)
let listaProductos = document.getElementById("product-list")
let input =  document.getElementById("product-input")

//Borrar elemento
document.getElementById("product-list").addEventListener("click", (e) => {
    
    if (e.target.classList.contains("delete-btn")) {
        const idBoton = e.target.id;
        console.log("Has pulsado el botón con ID:", idBoton);
        e.target.closest("li").remove();
    }
    console.log(e.target)
});


function anadirElemento(){
        let productoYprecio = input.value.split(",")
        productoYprecio[1] = productoYprecio[1].trim()
        console.log(productoYprecio[1])
        if (productoYprecio.length == 2 && !isNaN(productoYprecio[1])) {
        console.log("Array de producto: "+productoYprecio)
        let recuperarUl = document.querySelector("#product-list")
        console.log(recuperarUl)
        let crearHijo = document.createElement("li")
        crearHijo.innerHTML = `
                    <span>${productoYprecio[0]}</span>
                    <span>${parseFloat(productoYprecio[1])} €</span>
                    <button class="delete-btn" id="valor${contador}">Eliminar</button>  
                </li>`
        crearHijo.id = `item${contador}`
        recuperarUl.appendChild(crearHijo)
        contador++
        } else {
            alert("Has introducido algun valor inválido.")
        }
}

function calcularTotalPrecio(precio){

}

function calcularTotalUnidades(unidades){

}

