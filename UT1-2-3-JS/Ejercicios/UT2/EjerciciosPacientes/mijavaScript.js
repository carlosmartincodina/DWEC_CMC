// Matriz de pacientes
const pacientes = [
    ["Antonio", "Perez Garcia", 44, "85kg", "12345678A"],
    ["Maria", "Lopez Martinez", 32, "62kg", "87654321B"],
    ["Carlos", "Gonzalez Ruiz", 28, "78kg", "23456789C"],
    ["Laura", "Rodriguez Sanchez", 51, "68kg", "34567890D"],
    ["Pedro", "Fernandez Diaz", 39, "92kg", "45678901E"],
    ["Ana", "Torres Jimenez", 25, "58kg", "56789012F"],
    ["Javier", "Moreno Alvarez", 47, "88kg", "67890123G"],
    ["Elena", "Navarro Romero", 36, "65kg", "78901234H"],
    ["David", "Hernandez Castro", 29, "76kg", "89012345I"],
];

// calcular edad Promedio
let informacion = new Map()

function mostrar() {

    // Inicializamos variables
    informacion.set("edadSum", 0)
    informacion.set("total", pacientes.length)
    informacion.set("edadMin", 999)
    informacion.set("edadMax", -1)
    informacion.set("pesoTotal", 0)
    // Lógica de negocio
    //Suma edad
    let edadSum=0;
    for (let i = 0; i<pacientes.length;i++) {
        edadSum+=pacientes[i][2];
    }
    informacion.set("edadSum", edadSum)
    //Fin suma edad
    //Edad minima y máxima
    let edadMaxima = 0;
    let edadMinima = 100;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i][2] > edadMaxima) {
            edadMaxima = pacientes[i][2];
        }
        if (pacientes[i][2] < edadMinima) {
            edadMinima = pacientes[i][2];
        }
    }
    informacion.set("edadMin", edadMinima);
    informacion.set("edadMax", edadMaxima);
    //Fin edad minima y máxima
    //Empiezo de peso total
    let sumaPeso=0;
    pacientes.forEach((paciente) => {
        let separadorPeso = paciente[3].split("k");
        sumaPeso+= parseInt(separadorPeso[0]);
    })
    informacion.set("pesoTotal",sumaPeso/pacientes.length);
    //Final peso total
    // Mostrar resultados en la página
    idEdadProm.innerHTML = ` <strong> Edad promedio :</strong> ${informacion.get("edadSum") / pacientes.length}`
    idTotal.innerHTML = ` <strong> Total pacientes: :</strong> ${informacion.get("total")}`
    idEdadMin.innerHTML = ` <strong> Edad mínima: :</strong> ${informacion.get("edadMin")}`
    idEdadMax.innerHTML = ` <strong> Edad máxima: :</strong> ${informacion.get("edadMax")}`
    idPesoProm.innerHTML = ` <strong> Peso promedio: :</strong> ${informacion.get("pesoTotal")} kg`
}

function ordenado() {
    pacientes.sort((a,b) => {
        return a[2]-b[2];
    })

    let pacientesOrdenados="";
    pacientes.forEach((pac) =>
    pacientesOrdenados += `${pac[1]}, ${pac[0]}. Edad: ${pac[2]}
    `
    )
    alert(pacientesOrdenados)
}


document.getElementById("btnMostrar").addEventListener("click",mostrar)
document.getElementById("btnOrdenado").addEventListener("click",ordenado)