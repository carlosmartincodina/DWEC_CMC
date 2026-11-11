// ==========================================
// VARIABLES GLOBALES
// ==========================================
let informacion = []; // Almacena los datos del JSON
let frameworkLista = document.querySelector(".framework-lista");
let contador = 0
// Map con las dos claves fijas para el histórico
const historicoMap = new Map([
  ["me-gusta", 0],
  ["no-gusta", 0],
]);

// Referencias al DOM
const listaUL = document.querySelector(".framework-lista");
const radioButtons = document.querySelectorAll('input[name="tipo-ambito"]');
const spanGustan = document.getElementById("contador-gustan");
const spanNoGustan = document.getElementById("contador-no-gustan");
let recuperarLista = document.querySelector(".framework-lista");
//Promesa JSON

fetch("frameworks.json")
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error("No se ha podido cargar el archivo.");
    }
    return respuesta.json();
  })
  .then((datos) => {
    datos.forEach((element) => {
      informacion.push(element);
    });
  })
  .catch((error) => {
    console.log(error);
  });

let arrayLista = [];
radioButtons.forEach((e) => {
  e.addEventListener("change", () => {
    let framework = e.value; //Valor del radio button
    arrayLista = [];
    informacion.forEach((e) => {
      let ambito = e.ambito; //Leer el ambito de lo que está pasando en el forEach
      if (framework === ambito) {
        arrayLista.push(e);
      }
    });
    construirLista();
  });
});

function construirLista() {
  //Limpiamos lista
  recuperarLista.replaceChildren();
  // e es el elemento e i el indice
  arrayLista.forEach((e, i) => {
    let elemento = document.createElement("li");
    elemento.innerHTML = `${e.framework} [${e.lenguaje}]`;
    elemento.classList.add("framework-elemento");
    recuperarLista.appendChild(elemento);
  });  
}

frameworkLista.addEventListener("click", (e) => gustaOno(e));
frameworkLista.addEventListener("contextmenu", (e) => eliminarElemento(e))

function gustaOno(e) {
    contador++
    let clickado = e.target.textContent;
    clickado = clickado.split(" ")
    let gusta = prompt(`¿Te gusta ${clickado[0]}? (s/n)`);
    if (gusta !== null) {
    if (gusta.charAt(0) === "s") {
        e.target.classList.add("gusta");
    } else if (gusta.charAt(0) === "n") {
        e.target.classList.add("no-gusta");
    } else {
        alert("Caracter incorrecto.")
    }
    addMap(gusta)
}
}

function eliminarElemento(e) {
    e.preventDefault()
    e.target.remove()
}

function addMap(gusta) {
    if (gusta.charAt(0) === "s") {
        let contador = historicoMap.get("me-gusta")
        contador++
        historicoMap.set("me-gusta", contador)
        document.getElementById("contador-gustan").innerHTML = contador
    } else if (gusta.charAt(0) === "n") {
        let contador = historicoMap.get("no-gusta")
        contador++
        historicoMap.set("no-gusta", contador)
        document.getElementById("contador-no-gustan").innerHTML = contador
    }
    contador--
}