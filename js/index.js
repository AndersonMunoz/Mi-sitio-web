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

document.addEventListener('DOMContentLoaded', function () {
    let cvItem = document.getElementById('cvItem');
    let cvEnglish = document.getElementById('cvEnglish');
    let cvSpanish = document.getElementById('cvSpanish');

    cvItem.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    cvEnglish.addEventListener('click', function () {
        abrirVistaPreviaPDF('pdf/english_cv_anderson_munoz.pdf','English CV');
    });
    
    cvSpanish.addEventListener('click', function () {
        abrirVistaPreviaPDF('pdf/spanish_cv_anderson_munoz.pdf','Spanish CV');
    });

    function abrirVistaPreviaPDF(ruta, tituloVentana) {
        let nuevaVentana = window.open('', '_blank', 'width=800,height=600');

        nuevaVentana.document.title = tituloVentana;

        var elementoEmbed = document.createElement('embed');
        elementoEmbed.src = ruta;
        elementoEmbed.type = 'application/pdf';
        elementoEmbed.width = '100%';
        elementoEmbed.height = '100%';

        nuevaVentana.document.body.appendChild(elementoEmbed);
    }
});

let form = document.getElementById("form");
let mailTo = document.getElementById("mailTo")

form.addEventListener("submit",handleSubmit)

function handleSubmit(event){
    event.preventDefault();
    const formObje= new FormData(this)
    console.log(formObje.get('name'))
    mailTo.setAttribute('href',`mailto:anderson180@hotmail.es?subject=${formObje.get('name')}'s job offer from your portfolio &body=${formObje.get('message')}`)
    mailTo.click();
}

let year = new Date().getFullYear();
document.getElementById("current_date").innerHTML = year;

