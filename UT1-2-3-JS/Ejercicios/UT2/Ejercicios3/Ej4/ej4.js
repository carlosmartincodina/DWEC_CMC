let colores = () => {
    let color1 = setInterval(document.body.style.backgroundColor = '#FFE4C4',2000)
    let color2 = setInterval(document.body.style.backgroundColor = '#8A2BE2',2000)
    let color3 = setInterval(document.body.style.backgroundColor = '#5F9EA0',2000)
}

let color1 = window.setInterval(() => document.body.style.backgroundColor = '#FFE4C4',1000)
let color2 = window.setInterval(() => document.body.style.backgroundColor = '#8A2BE2',3000)
let color3 = window.setInterval(() => document.body.style.backgroundColor = '#5F9EA0',2000)

colores()