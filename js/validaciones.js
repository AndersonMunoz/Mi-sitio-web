let nombreUsuario = document.getElementById("nombreUsuario");
let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function(){
    if (nombreUsuario.value.length === 0){
        alert("El nombre es usuario es un campo obligatorio");
    } else {
        alert("Bienvenido");
    }
})