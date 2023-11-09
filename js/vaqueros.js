let rango = document.getElementById("rango");
let recorrido = document.querySelector(".recorrido");
let imgFondo = document.querySelector(".img-fondo");
let position = 0;
let direction = 0;
let jumping = false;

function move() {
    if (direction === 1 && position < window.innerWidth - rango.offsetWidth) {
        position += 5;
        rango.style.transform = "scaleX(1)";
    } else if (direction === -1 && position > 0) {
        position -= 5;
        rango.style.transform = "scaleX(-1)";
    }

    rango.style.left = position + "px";
    imgFondo.style.backgroundPositionX = -(position * 2) + "px"; 
}

function jump() {
    if (!jumping) {
        jumping = true;
        rango.style.bottom = "100px";
        setTimeout(function() {
            rango.style.bottom = "0px";
            jumping = false;
        }, 500);
    }
}

window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        direction = 1;
    } else if (event.key === "ArrowLeft") {
        direction = -1;
    } else if (event.key === " ") {
        jump();
    }
});

window.addEventListener("keyup", function(event) {
    if (event.key === "ArrowRight" && direction === 1) {
        direction = 0;
    } else if (event.key === "ArrowLeft" && direction === -1) {
        direction = 0;
    }
});

setInterval(move, 20);


