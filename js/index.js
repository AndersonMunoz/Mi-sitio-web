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

    // Agregar manejador de clic al elemento principal
    cvItem.addEventListener('click', function (event) {
        // Detener la propagación del clic para evitar que se active el manejador de clic en los elementos secundarios
        event.stopPropagation();
    });

    // Agregar manejadores de clic a los elementos secundarios
    cvEnglish.addEventListener('click', function () {
        abrirVistaPreviaPDF('pdf/english_cv_anderson_munoz.pdf','English CV');
    });
    
    cvSpanish.addEventListener('click', function () {
        abrirVistaPreviaPDF('pdf/spanish_cv_anderson_munoz.pdf','Spanish CV');
    });

    // Función para abrir una vista previa del PDF en una nueva ventana
    function abrirVistaPreviaPDF(ruta, tituloVentana) {
        // Abrir una nueva ventana
        let nuevaVentana = window.open('', '_blank', 'width=800,height=600');

        // Establecer el título de la nueva ventana
        nuevaVentana.document.title = tituloVentana;

        // Crear un elemento <embed> para cargar el PDF en la nueva ventana
        var elementoEmbed = document.createElement('embed');
        elementoEmbed.src = ruta;
        elementoEmbed.type = 'application/pdf';
        elementoEmbed.width = '100%';
        elementoEmbed.height = '100%';

        // Agregar el elemento <embed> a la nueva ventana
        nuevaVentana.document.body.appendChild(elementoEmbed);
    }
});