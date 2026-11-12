
let generarColor = () => {
    let numAle = Math.random(999999)
    numAle*=1000000
    numAle = parseInt(numAle)
    console.log(numAle)
    return `#${numAle}`
}

document.body.style.background = generarColor()