// Almacenar en todo momento los elementos de la lista y su precio
const elementos = [
    ["platanos" , 1.99]
]
let contador = 1
// Almacenar en todo momentos las estadísticas de la lista
const estadisticas = new Map()
estadisticas.set("total-unidades" , 1)
estadisticas.set("total-precio" , 1.99)

//Almacenar en todo momento la lista de productos sin repetir



document.getElementById("add-btn").addEventListener("click", anadirElemento)
let listaProductos = document.getElementById("product-list")
let input =  document.getElementById("product-input")

document.getElementById("add-btn", anadirElemento)


function anadirElemento(e){   
     e.preventDefault()
     let producto = document.getElementById("product-input").value
     producto = producto.split(",")
     if (producto.length !== 2) {
        alert("Se han introducido de manera incorrecta los items.")
        return;
     } else {
        //Añadimos elementos al array
        elementos.push([producto[0],producto[1]])
        // Hacemos innerHTML
        listaProductos.innerHTML+= `<li>
        <span>${producto[0]}</span>
        <span>${producto[1]} €</span>
        <button class="delete-btn" id="boton${contador}">Eliminar</button>  
        </li>`
        contador++
     }
     calcularTotalPrecio(producto[1])
     calcularTotalUnidades()
}

function calcularTotalPrecio(precioProducto){
    let precioActual = estadisticas.get("total-precio")
    estadisticas.set("total-precio", precioActual+parseFloat(precioProducto))
    document.getElementById("total-price").innerHTML = estadisticas.get("total-precio")
}

function calcularTotalUnidades(){
    let productosActuales = parseInt(estadisticas.get("total-units")) || 0
    estadisticas.set("total-units", productosActuales+1)
    document.getElementById("total-units").innerHTML = estadisticas.get("total-units")
}

document.querySelector('.delete-btn').addEventListener("click",eliminarProducto)
function eliminarProducto(e) {
    e.preventDefault()
    console.log()

}