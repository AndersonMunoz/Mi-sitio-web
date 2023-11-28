let numero = document.querySelectorAll('.numero');
let barra = document.querySelectorAll('.main_bar');
let boton = document.getElementById('boton');
let valor_por = document.querySelectorAll('.valor_por');
let votos_totales = document.getElementById('votos_totales')

boton.addEventListener('click', function () {
    let total = 0;

    for (let i = 0; i < numero.length; i++) {
        if (numero[i].value === null || numero[i].value === "") {
            numero[i].value = 0;
        }
        total = total + parseFloat(numero[i].value);
    }
    votos_totales.innerHTML = total.toString();

    for (let k = 0; k < numero.length; k++) {
        if (numero[k].value === null || numero[k].value === "" || parseFloat(numero[k].value) === 0) {
            valor_por[k].innerHTML = 0;
            barra[k].style.borderRadius = "5px";
            barra[k].style.backgroundColor = "rgb(17, 197, 197)";
            barra[k].style.width = porcentaje + "%";
        } else {
            let porcentaje = (parseFloat(numero[k].value) * 100) / total;
            valor_por[k].innerHTML = Math.round(porcentaje).toString();
            barra[k].style.borderRadius = "5px";
            barra[k].style.backgroundColor = "rgb(17, 197, 197)";
            barra[k].style.width = porcentaje + "%";
        }
    }
});

function soloNumeros(e) {
    var key = window.Event ? e.which : e.keyCode;
    return (key >= 48 && key <= 57);
}
