let rango = document.getElementById("rango");
let recorrido = document.querySelector(".recorrido");
let position = 100;

window.addEventListener("keydown", function(event) {
    const recorridoWidth = recorrido.clientWidth;
    const rangoWidth = rango.clientWidth;

    if (event.key === "ArrowRight") {
        position += 20; 
        rango.style.transform = "scaleX(1)";
    } else if (event.key === "ArrowLeft") {
        position -= 20; 
        rango.style.transform = "scaleX(-1)"; 
    }

    position = Math.max(0, Math.min(recorridoWidth - rangoWidth, position));


    rango.style.left = position + "px";
});
