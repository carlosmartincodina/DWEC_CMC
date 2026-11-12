let nota = prompt("Ingrese las notas separadas por ;");
let algunDiez = false;
nota = nota.split(";")

for (let i = 0; i < nota.length; i++) {
    let notaActual = parseInt(nota[i]);
    if (notaActual === 10) {
        algunDiez = true;
    }
}

if (algunDiez) {
    console.log("Felicidades, tienes un 10 en alguna materia.");
} else {
    console.log("No tienes un 10 en ninguna materia.");
}