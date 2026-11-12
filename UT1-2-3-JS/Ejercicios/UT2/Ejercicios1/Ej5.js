let nota = prompt("Ingrese las notas separadas por ;");
nota = nota.split(";");

for (let i = 0; i < nota.length; i++) {
    let notaActual = parseFloat(nota[i]);
    if (notaActual > 0 && notaActual < 3) {
        console.log(`Nota ${i} = Muy deficiente`)
    }
    else if (notaActual >= 3 && notaActual < 5) {
        console.log(`Nota ${i} = Insuficiente`)
    }
    else if (notaActual >= 5 && notaActual < 6) {
        console.log(`Nota ${i} = Bien`)
    }
    else if (notaActual >= 6 && notaActual < 9) {
        console.log(`Nota ${i} = Notable`)
    }
    else if (notaActual >= 9 && notaActual <= 10) {
        console.log(`Nota ${i} = Sobresaliente`)
    }
    else {
        console.log(`Nota ${i} no es válida`)
    }

}