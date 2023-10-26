let rango = document.getElementById("rango");

window.addEventListener("keydown",function(event){
    if(event.key =="ArrowRight"){
        rango.classList.add("rango-movimiento")
        rango.classList.remove("rango")
        rango.classList.remove("rango-alreves")
        rango.classList.add("rango-derecho")
    } else if(event.key =="ArrowLeft"){
        rango.classList.add("rango-alreves")
        rango.classList.remove("rango-movimiento")
        rango.classList.add("rango")
        rango.classList.remove("rango-derecho")
    } 
    
})