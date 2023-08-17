let barraMenu = document.getElementById("barraMenu");
let mainMenu = document.getElementById("mainMenu");

barraMenu.addEventListener("click",function() {
    if (mainMenu.classList.contains("mainMenu")) {
        mainMenu.classList.add("main-menu-visible");
        mainMenu.classList.remove("mainMenu");
    } else {
        mainMenu.classList.remove("main-menu-visible");
        mainMenu.classList.add("mainMenu");
    }; 

});

let fuente = document.getElementById("fuente");
let submainMenu = document.getElementById("submainMenu");

fuente.addEventListener("click",function() {
    if (submainMenu.classList.contains("submainMenu")) {
        submainMenu.classList.add("submainMenu-visible");
        submainMenu.classList.remove("submainMenu");
    } else {
        submainMenu.classList.remove("submainMenu-visible");
        submainMenu.classList.add("submainMenu");
    }; 

});