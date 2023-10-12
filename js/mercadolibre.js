class Automovil{
    constructor(marca,modelo,precio,anyo,ciudad,Kilometros){
        this.marca= marca;
        this.modelo=modelo;
        this.precio=precio;
        this.anyo=anyo;
        this.ciudad=ciudad;
        this.Kilometros=Kilometros;
    }
}

let auto1 = new Automovil("Toyota","Prado", 350000000, 2015, "Isnos - Huila", 1000);
let marcaAutomovil = auto1.modelo;

let inputBusqueda = document.getElementById("busqueda");

inputBusqueda.addEventListener("keydown", function(event){
    
    if (event.key == "Enter") {
        let mainContent = document.getElementById("mainContent");
        let boxAuto = document.createElement("div");
        mainContent.appendChild(boxAuto);
        boxAuto.setAttribute("class","box-auto")

        let boxImg= document.createElement("div");

        //Crear contenedor para el corazon

        let boxCorazon = document.createElement("div");
        boxImg.appendChild(boxCorazon);
        boxCorazon.setAttribute("class","box-corazon");
        let corazon =document.createElement("div");
        boxCorazon.appendChild(corazon);
        corazon.setAttribute("class","corazon");

        //Crear contenedor para la imagen

        let iconHearth = document.createElement("i");
        corazon.appendChild(iconHearth);
        iconHearth.setAttribute("class","icon-style-hearth fa-regular fa-heart");

        boxAuto.appendChild(boxImg);
        let imgAuto = document.createElement("img");
        boxImg.appendChild(imgAuto);
        boxImg.setAttribute("class","box-img");
        imgAuto.setAttribute("src","img/toyota.png");
        imgAuto.setAttribute("class","img-auto")
        //Crear contenedor para e la informacion

        let boxInfo = document.createElement("div");
        boxAuto.appendChild(boxInfo);

        

        //Cargando ícono corazón
        



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
        
        //Precio
        let precioFormat = new Intl.NumberFormat("de-DE").format(auto1.precio)
        let txtPrecio = document.createElement("label")
        boxInfo.appendChild(txtPrecio);
        txtPrecio.innerHTML = " "+ precioFormat;

        /*kilometraje y procedencia*/
        let boxProcedencia = document.createElement("div");
        boxInfo.appendChild(boxProcedencia);
        boxProcedencia.setAttribute("class", "box-procedencia");

        let txtanyo = document.createElement("label");
        boxProcedencia.appendChild(txtanyo);
        txtanyo.innerHTML = auto1.anyo + " · ";

        let txtKilometros = document.createElement("label");
        boxProcedencia.appendChild(txtKilometros);
        let txtKilometrosFormat = new Intl.NumberFormat("de-DE").format(auto1.Kilometros);
        txtKilometros.innerHTML = txtKilometrosFormat + " km  · ";

        let txtciudad = document.createElement("label");
        boxProcedencia.appendChild(txtciudad);
        txtciudad.innerHTML = auto1.ciudad;

        let boxLineaDiv = document.createElement("div");
        mainContent.appendChild(boxLineaDiv);
        boxLineaDiv.setAttribute("class", "box-linea-div");
    }
})