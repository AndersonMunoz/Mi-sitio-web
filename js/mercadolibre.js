class Automovil{
    constructor(marca,modelo,precio,anyo,ciudad,Kilometros,imagen){
        this.marca= marca;
        this.modelo=modelo;
        this.precio=precio;
        this.anyo=anyo;
        this.ciudad=ciudad;
        this.Kilometros=Kilometros;
        this.imagen=imagen;
    }
}

let auto1 = new Automovil("Toyota","Prado", 350000000, 2015, "Isnos - Huila", 1000,"img/toyota.png");
let auto2 = new Automovil("Ford", "Mustang", 300000000, 2018, "Bogotá - Cundinamarca", 5000,"img/mustang.jpg");
let auto3 = new Automovil("Chevrolet", "Camaro", 320000000, 2019, "Medellín - Antioquia", 3000,"img/camaro.jpeg");
let auto4 = new Automovil("Honda", "Civic", 270000000, 2017, "Cali - Valle del Cauca", 7000,"img/civichonda.png");
let auto5 = new Automovil("Nissan", "Altima", 280000000, 2020, "Cartagena - Bolívar", 4000,"img/nissan.jpeg");
let auto6 = new Automovil("Hyundai", "Elantra", 260000000, 2016, "Barranquilla - Atlántico", 6000,"img/hiunday.jpeg");
let auto7 = new Automovil("Kia", "Optima", 290000000, 2021, "Santa Marta - Magdalena", 2000,"img/kia.jpeg");
let auto8 = new Automovil("Mazda", "3", 275000000, 2017, "Pereira - Risaralda", 5500,"img/mazda.jpg");
let auto9 = new Automovil("Subaru", "Impreza", 310000000, 2018, "Bucaramanga - Santander", 3500,"img/subaru.jpeg");
let auto10 = new Automovil("Volkswagen", "Golf", 295000000, 2019, "Cúcuta - Norte de Santander", 4500,"img/volkswagen.jpeg");

var carArrays = [auto1, auto2, auto3,auto4, auto5, auto6, auto7, auto8, auto9, auto10];
//let marcaAutomovil = auto1.modelo;

let inputBusqueda = document.getElementById("busqueda");

inputBusqueda.addEventListener("keydown", function(event){
    mainContent.innerHTML ="";
    if (event.key == "Enter") {
        carArrays.forEach(function(auto, indice) {
            console.log("Auto " + (indice + 1) + ":");

            
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
        imgAuto.setAttribute("src",auto.imagen);
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

        txtMarca.innerHTML = auto.marca


        //-------------------------------------
        let txtModelo = document.createElement("label");
        boxInfo.appendChild(txtModelo);
        txtModelo.innerHTML = " " +auto.modelo;
        
        //Precio
        let precioFormat = new Intl.NumberFormat("de-DE").format(auto.precio)
        let txtPrecio = document.createElement("label")
        boxInfo.appendChild(txtPrecio);
        txtPrecio.innerHTML = " "+ precioFormat;

        /*kilometraje y procedencia*/
        let boxProcedencia = document.createElement("div");
        boxInfo.appendChild(boxProcedencia);
        boxProcedencia.setAttribute("class", "box-procedencia");

        let txtanyo = document.createElement("label");
        boxProcedencia.appendChild(txtanyo);
        txtanyo.innerHTML = auto.anyo + " · ";

        let txtKilometros = document.createElement("label");
        boxProcedencia.appendChild(txtKilometros);
        let txtKilometrosFormat = new Intl.NumberFormat("de-DE").format(auto.Kilometros);
        txtKilometros.innerHTML = txtKilometrosFormat + " km  · ";

        let txtciudad = document.createElement("label");
        boxProcedencia.appendChild(txtciudad);
        txtciudad.innerHTML = auto.ciudad;

        let boxLineaDiv = document.createElement("div");
        mainContent.appendChild(boxLineaDiv);
        boxLineaDiv.setAttribute("class", "box-linea-div");
        }
        )
}})