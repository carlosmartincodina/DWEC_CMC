const parrafo1 = {
    "titulo": "primer parrafo",
    "hijos": ["primer contenido", "segundo contenido"]
}

const parrafo2 = {
    "titulo": "segundo parrafo",
    "hijos": ["primer contenido", "segundo contenido"]
}


console.log(parrafo1)
console.log(parrafo1.titulo)
console.log(parrafo1.hijos[0])

let informacion= new Set()

informacion.add(parrafo1)
informacion.add(parrafo2)

console.log("foreach aqui")

informacion.forEach((e) => {
    let titulo = document.createElement("h1")
    titulo.innerHTML = e.titulo

    document.body.appendChild(titulo)
    
    e.hijos.forEach((hijo) => {
        let hijoObjeto = document.createElement("p")
        hijoObjeto.innerHTML=hijo
        console.log(hijoObjeto)
        document.body.appendChild(hijoObjeto)
    })

}
)