//funcion normal
function perimetroRectangulo(a,b) {
    return 2*(a+b)
}
//funcion anonima

let perimetroAnonimo = function (a,b) {
    return 2*(a+b)
}

//funcion flecha con dos parámetros
let perimetroFlecha = (a,b) => 2*(a+b)

//funcion flecha con un parametro
let doblar = (num) => 2*num