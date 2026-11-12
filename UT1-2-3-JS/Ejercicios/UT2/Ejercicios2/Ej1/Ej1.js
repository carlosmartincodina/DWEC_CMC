let numero = num => {
    num = parseInt(num)
    if (isNaN(num)){
        console.log(`${num} no es un número.`)
    } else {
        console.log(`${num} es un número`)
    }
}