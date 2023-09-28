class Automovil {
    constructor(marca,modelo,precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}

let auto1 = new Automovil("Susuki","2024","5.000.000");
let marcaAutomovil = auto1.modelo;

let inputBusqueda = document.getElementById("busqueda");

inputBusqueda.addEventListener("keydown", function(event){
    
    if (event.key == "Enter") {
        let mainContent = document.getElementById("mainContent");
        let boxAuto = document.createElement("div");

        mainContent.appendChild(boxAuto);
        boxAuto.setAttribute("class","box-auto")

        //Crear contenedor para la imagen
        //Crear contenedor para e la informacion

        let boxInfo = document.createElement("div");
        boxAuto.appendChild(boxInfo);

        //Crear información para el texto
        let txtMarca = document.createElement("label");
        boxInfo.appendChild(txtMarca);
        boxInfo.setAttribute("class","box-info")

        //Crear información para el texto

        txtMarca.innerHTML = auto1.marca


        //-------------------------------------
        let txtModelo = document.createElement("label");
        boxInfo.appendChild(txtModelo);
        txtModelo.innerHTML = " " +auto1.modelo;

        let txtprecio = document.createElement("label");
        boxInfo.appendChild(txtprecio);
        txtprecio.innerHTML = " " +auto1.precio ;
    }
})