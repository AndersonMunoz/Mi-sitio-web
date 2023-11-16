let rango = document.getElementById("rango");
let heno = document.querySelector(".heno");
let imgFondo = document.querySelector(".img-fondo");
let position = 0;
let direction = 0;
let jumping = false;
let score = 0;
let gameStarted = false;
let henoPosition = window.innerWidth;



function jump() {
    if (!jumping) {
        jumping = true;
        rango.style.bottom = "200px";
        setTimeout(function() {
            rango.style.bottom = "0px";
            jumping = false;
            checkCollision();
        }, 500);
    }
}
function move() {
    if (!gameStarted) return;
    if (direction === 1 && position < window.innerWidth) {
        position += 5;
        rango.style.transform = "scaleX(1)";
    } else if (direction === -1 && position > -rango.offsetWidth) {
        position -= 5;
        rango.style.transform = "scaleX(-1)";
    }
    if (position >= window.innerWidth) {
        position = -rango.offsetWidth;
    } else if (position <= -rango.offsetWidth) {
        position = window.innerWidth;
    }
    rango.style.left = position + "px";
    imgFondo.style.backgroundPositionX = -(position * 2) + "px";

    henoPosition -= 5;
    if (henoPosition < -heno.offsetWidth) {
        henoPosition = window.innerWidth;
    }
    heno.style.left = henoPosition + "px";

    checkCollision();
}

function checkCollision() {
    let rangoRect = rango.getBoundingClientRect();
    let henoRect = heno.getBoundingClientRect();
    if (rangoRect.x < henoRect.x + henoRect.width &&
        rangoRect.x + rangoRect.width > henoRect.x &&
        rangoRect.y < henoRect.y + henoRect.height &&
        rangoRect.y + rangoRect.height > henoRect.y) {
        if (!jumping) {
            alert("¡Has perdido!");
            resetGame();
        } else {
            score++;
            if (score === 5) {
                alert("¡Has ganado!");
                resetGame();
            }
        }
    }
}


function resetGame() {
    score = 0;
    gameStarted = false;
    position = 0;
    henoPosition = window.innerWidth;
}

window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        direction = 1;
    } else if (event.key === "ArrowLeft") {
        direction = -1;
    } else if (event.key === " ") {
        if (!gameStarted) {
            gameStarted = true;
            heno.style.display = "block";
        }
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

