let insertarElemento = () => {
    let numAle=String(Math.random())
    let ul = document.querySelector("ul")
    let newli = document.createElement("li")
    newli.innerHTML=numAle
    let aux = ul.appendChild(newli)
}














let boton = document.getElementById("idBoton").addEventListener("click",insertarElemento)