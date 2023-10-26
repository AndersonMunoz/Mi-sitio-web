const paisesCaja = document.querySelector(".cada-pais");
const buscar = document.querySelector(".buscar");
const oscuro = document.querySelector(".oscuro-tema");
const header = document.querySelector(".header");
const desplegar = document.getElementById("desplegar");
const listaCont = document.getElementById("listaCont");
const nombreContienente = document.querySelectorAll(".nombre-continente");

console.log(nombreContienente);

async function obtenerPais() {
    const url = await fetch("https://restcountries.com/v2/all");
    const res = await url.json();
    console.log(res);
    res.forEach(pais => mostrarPais(pais));
}

obtenerPais();

function mostrarPais(data) {
    const pais = document.createElement("div");
    pais.classList.add("paises");
    pais.innerHTML = `
    <img class="bandera1" src="${data.flag}">
    <p class="title">${data.name}</p><br>
    <p class="subtitle">Población:</p><p>${data.population}</p><br>
    <p class="subtitle region">Contienente:</p><p>${data.region}</p><br>
    <p class="subtitle">Capital:</p><p>${data.capital}</p>`;
    paisesCaja.appendChild(pais);
    pais.addEventListener("click",()=>{
        mostrarPaisDetalle(data);
    })
}

desplegar.addEventListener("click", () => {
    if (listaCont.classList.contains("despliegue")) {
        listaCont.classList.add("despliegue-hidden");
        listaCont.classList.remove("despliegue");
    } else {
        listaCont.classList.remove("despliegue-hidden");
        listaCont.classList.add("despliegue");
    }
});

nombreContienente.forEach(pais => {
    pais.addEventListener("click", () => {
        const continenteElegido = pais.textContent.toLowerCase();
        const paises = document.querySelectorAll(".paises");
        paises.forEach(pais => {
            const region = pais.querySelector(".region").nextElementSibling.textContent.toLowerCase();
            if (continenteElegido === "todos" || continenteElegido === region) {
                pais.style.display = "grid";
            } else {
                pais.style.display = "none";
            }
        });
    });
});


buscar.addEventListener("input", () => {
    const valorBusqueda = buscar.value.toLowerCase();
    const paises = document.querySelectorAll(".paises");
    paises.forEach(pais => {
        const nombrePais = pais.querySelector(".title").textContent.toLowerCase();
        const nombreContienenteBuscar = pais.querySelector(".region").nextElementSibling.textContent.toLowerCase();
        if (nombrePais.includes(valorBusqueda) || nombreContienenteBuscar.includes(valorBusqueda)) {
            pais.style.display = "grid";
        } else {
            pais.style.display = "none";
        }
    });
});

oscuro.addEventListener("click", () => {
    document.body.classList.toggle("oscuro-tema");
    const despliegue = document.querySelector(".despliegue");
    const despliegueHidden = document.querySelector(".despliegue-hidden");
    if (despliegue) despliegue.classList.toggle("oscuro-tema");
    if (despliegueHidden) despliegueHidden.classList.toggle("oscuro-tema");
});



const paisSolo=document.querySelector(".pais-solo");
function mostrarPaisDetalle(data){
    paisSolo.classList.toggle("mostrar")
    paisSolo.innerHTML=`
    <button class="atras">Atrás</button>
        <div class="principal">
            <div class="princi-izquierda">
                <img class="princi-img" src="${data.flag}" alt="">
            </div>
            <div class="princi-derecha">
                <h1 class="titulo-pais">${data.name}</h1>
                <div class="info-todo">
                    <div class="informacion-izquierda interno">
                        <p class="subtitle">Nombre Nativo:&nbsp; ${data.nativeName}</p><br>
                        <p class="subtitle region">Población:&nbsp; ${data.population}</p><br>
                        <p class="subtitle">Continente:&nbsp; ${data.region}</p><br>
                        <p class="subtitle">Sub-region:&nbsp; ${data.subregion}</p><br>
                        <p class="subtitle region">Capital:&nbsp; ${data.capital}</p><br>
                    </div>
                    <div class="informacion-derecha interno">
                        <p class="subtitle">Dominio de internet:&nbsp; ${data.topLevelDomain.map(pai=>pai)}</p><br>
                        <p class="subtitle">Moneda:&nbsp; ${data.currencies.map(pai=>pai.name)}</p><br>
                        <p class="subtitle">Idiomas:&nbsp; ${data.languages.map(elem=>elem.name)}</p>
                    </div>
                </div>
                
            </div>
        </div>
    `
    const atras=paisSolo.querySelector(".atras");
    atras.addEventListener("click",()=>{
    paisSolo.classList.toggle("mostrar")
})
};



