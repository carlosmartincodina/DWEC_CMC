document
  .querySelector(".opciones")
  .addEventListener("click", mostrarInformacion);

let backend = [];
let frontend = [];
let listaFrameworks = document.querySelector(".framework-lista");
let idLista = document.getElementById("idLista");
let crearHijo = document.createElement("li");
crearHijo.classList.add("framework-elemento");

fetch("frameworks.json")
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status}`);
    }
    return respuesta.json();
  })
  .then((datos) => {
    datos.forEach((element) => {
      if (element.ambito === "Frontend") {
        frontend.push(`${element.framework} [${element.lenguaje}]`);
      }
      if (element.ambito === "Backend") {
        backend.push(`${element.framework} [${element.lenguaje}]`);
      }
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

function mostrarInformacion(e) {
    let valor = e.target.value
    crearHijo.innerHTML=""
    if (valor === "Frontend") {
        crearHijo.innerHTML = `${frontend[0]}
            ${frontend[1]}
            ${frontend[2]}
        `
    }
    idLista.appendChild(crearHijo)
}
