document.addEventListener("mousemove", (e) => {
    let Y = e.clientY
    let X = e.clientX
    document.getElementById("idInfoY").innerHTML = Y
    document.getElementById("idInfoX").innerHTML = X
})