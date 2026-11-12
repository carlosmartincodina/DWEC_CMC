function esBisiesto(anyo) {

    let anyoString = String(anyo)
    let anyoUltimo = anyoString[3]
    let anyoPenultimo = anyoString[2]
    
    if (anyo % 4 != 0) {
        return 0;
    } else if (anyoUltimo === "0" && anyoPenultimo === "0" && anyo != 2000 && anyo != 2400 && anyo % 400 != 0) {
            return 0;
    } else if (anyo % 4 === 0) {
        return 1;
    }
    return 0;
}
esBisiesto(2100)