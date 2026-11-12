let numero = parseInt(prompt("Introduce un número entero: "))

for (let i = 1; i < numero + 1; i++) {
    let hola = ""
    for (let j = 0; j < i; j++) {
        hola+="*"
    }
    console.log(hola)
}