//Boton
const boton = document.getElementById("boton")
//Array aficiones
const aficciones = ["Deporte","Serie","Pelicula"]
boton.addEventListener("click", (e) => {
    //Bucle foreach para recorrer las aficciones
    aficciones.forEach((e, i) => {
        //Obtenemos el valor input
        let inputAficcion = document.getElementById(`input${e}`).value
        let idAficcion = document.getElementById(`id${aficciones[i]}`)
        document.querySelectorAll("p[id]").forEach(parrafo => {
        parrafo.style.color = "red"; // <--- Forzar la herencia
        });

        console.log(idAficcion) //Para insertar
        if (inputAficcion.trim() !== "") {
            idAficcion.style.color = "green"
            let crearHijo = document.createElement("a")
            crearHijo.style.color = "blue"
            crearHijo.innerHTML = inputAficcion
            idAficcion.appendChild(crearHijo)
        }
        
        
    })
})