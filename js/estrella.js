let boton = document.getElementById("boton");
let valor = document.getElementById("valor");
let estrella1 = document.getElementById("estrella1");
let estrella2 = document.getElementById("estrella2");
let estrella3 = document.getElementById("estrella3");
let estrella4 = document.getElementById("estrella4");
let estrella5 = document.getElementById("estrella5");
boton.addEventListener('click', function(){
    //let valorNum = to(valor.value) 
    console.log(valor.value)
    if (valor.value <0 || valor.value>5) {
        
        alert("Ingrese un valor válido valores entre 0 y 5")
    }
    if (valor.value >=0.3 && valor.value<1) {
        estrella1.classList.remove("fa-star");
        estrella1.classList.remove("fa-regular");
        estrella1.classList.add("fa-solid");
        estrella1.classList.add("fa-star-half-stroke");
        estrella1.classList.add("fa-star-half-stroke");
        estrella2.classList.remove("fa-solid");
        estrella3.classList.remove("fa-solid");
        estrella4.classList.remove("fa-solid");
        estrella5.classList.remove("fa-solid");
    }
    if (valor.value >=1 && valor.value<1.3) {
        estrella1.classList.remove("fa-regular");
        estrella1.classList.add("fa-solid");
        estrella2.classList.remove("fa-star");
        estrella2.classList.remove("fa-regular");
        estrella2.classList.add("fa-solid");
        estrella2.classList.add("fa-star-half-stroke");
        estrella2.classList.add("fa-star-half-stroke");
    }   
})