function esPrimo(num) {
    if (num === 0 || num === 1) {
        return false;
    }
    for (let i=1;i<num+1;i++) {
        if (num%i === 0 && num != i && i != 1) {
            return true;
        }
    }
    return false;
}

esPrimo(2)

//con funcion flecha

let esPrimoFlecha = (num) => {
    if (num <= 1 || num >= 10000) {
        return alert(`Valor ${num} fuera de rango.`)
    }
    for (let i = 1; i<num; i++) {
        if (num%i === 0 && num != i && i!= 1){
            return true
        }
    }
    return false;
}