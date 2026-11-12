let coleccion = new Set()

const parrafo1 = {
    titulo: "Primer bloque de párrafos",
    hijos: ["Este es el primer párrafo", "Este es el segundo párrafo", "Este es el tercer párrafo"]
};

const parrafo2 = {
    titulo: "Segundo bloque de párrafos 2",
    hijos: ["Este es el primer párrafo", "Este es el segundo párrafo", "Este es el tercer párrafo"]
};

coleccion.add(parrafo1)
coleccion.add(parrafo2)

coleccion.forEach((elemento, index) => {
    let titulo = document.createElement("h1")
    let parrafos = document.createElement("p")
    parrafos.id= "titulos"
    console.log(index.titulo)
    document.body.appendChild(titulo)
    titulo.textContent = index.titulo

    for(let i = 0; i<index.hijos.length;i++) {
        let hijo = document.createElement("p")
        hijo.innerHTML = index.hijos[i]
        console.log(hijo)
        titulo.after(hijo)
    }
})
