let boton = document.getElementById("boton");
let star = document.querySelectorAll(".star");
let valor = document.getElementById("valor");

boton.addEventListener('click', function(){
    let valorNumerico = parseFloat(valor.value);
    let starLargo = star.length
    if (isNaN(valorNumerico) || valorNumerico < 0 || valorNumerico > 5) {
        alert("Ingrese un valor válido entre 0 y 5");
    } else {
        star.forEach(st => {
            st.classList.remove("fa-regular", "fa-star-half-stroke", "fa-solid", "fa-star");
            st.classList.add("fa-regular", "fa-star");
        });
        if (valorNumerico >= 0 && valorNumerico <0.3 ){
            for (let i=0;i<=starLargo;i++){
                star[i].classList.add("fa-regular", "fa-star");
                star[i].classList.remove("fa-solid", "fa-star-half-stroke");
            }
        }
        if (valorNumerico >= 0.3 && valorNumerico < 0.8) {
            star[0].classList.remove("fa-regular", "fa-star");
            star[0].classList.add("fa-solid", "fa-star-half-stroke");
        } else if (valorNumerico >= 0.8 && valorNumerico < 1.3) {
            star[0].classList.remove("fa-regular", "fa-star");
            star[0].classList.add("fa-solid", "fa-star");
        } else if (valorNumerico >= 1.3 && valorNumerico < 1.8) {
            star[0].classList.remove("fa-regular", "fa-star");
            star[0].classList.add("fa-solid", "fa-star");
            star[1].classList.remove("fa-regular", "fa-star");
            star[1].classList.add("fa-solid", "fa-star-half-stroke");
        } else if (valorNumerico >= 1.8 && valorNumerico < 2.3) {
            star[0].classList.remove("fa-regular", "fa-star");
            star[0].classList.add("fa-solid", "fa-star");
            star[1].classList.remove("fa-regular", "fa-star");
            star[1].classList.add("fa-solid", "fa-star");
        } else if (valorNumerico >= 2.3 && valorNumerico < 2.8) {
            star[0].classList.remove("fa-regular", "fa-star");
            star[0].classList.add("fa-solid", "fa-star");
            star[1].classList.remove("fa-regular", "fa-star");
            star[1].classList.add("fa-solid", "fa-star");
            star[2].classList.remove("fa-regular", "fa-star");
            star[2].classList.add("fa-solid", "fa-star-half-stroke");
        } else if (valorNumerico >= 2.8 && valorNumerico < 3.3) {
            star[0].classList.remove("fa-regular", "fa-star");
            star[0].classList.add("fa-solid", "fa-star");
            star[1].classList.remove("fa-regular", "fa-star");
            star[1].classList.add("fa-solid", "fa-star");
            star[2].classList.remove("fa-regular", "fa-star");
            star[2].classList.add("fa-solid", "fa-star");
        } else if (valorNumerico >= 3.3 && valorNumerico < 3.8) {
            star[0].classList.remove("fa-regular", "fa-star");
            star[0].classList.add("fa-solid", "fa-star");
            star[1].classList.remove("fa-regular", "fa-star");
            star[1].classList.add("fa-solid", "fa-star");
            star[2].classList.remove("fa-regular", "fa-star");
            star[2].classList.add("fa-solid", "fa-star");
            star[3].classList.remove("fa-regular", "fa-star");
            star[3].classList.add("fa-solid", "fa-star-half-stroke");
        } else if (valorNumerico >= 3.8 && valorNumerico < 4.3) {
            star[0].classList.remove("fa-regular", "fa-star");
            star[0].classList.add("fa-solid", "fa-star");
            star[1].classList.remove("fa-regular", "fa-star");
            star[1].classList.add("fa-solid", "fa-star");
            star[2].classList.remove("fa-regular", "fa-star");
            star[2].classList.add("fa-solid", "fa-star");
            star[3].classList.remove("fa-regular", "fa-star");
            star[3].classList.add("fa-solid", "fa-star");
        } else if (valorNumerico >= 4.3 && valorNumerico < 4.8) {
            star[0].classList.remove("fa-regular", "fa-star");
            star[0].classList.add("fa-solid", "fa-star");
            star[1].classList.remove("fa-regular", "fa-star");
            star[1].classList.add("fa-solid", "fa-star");
            star[2].classList.remove("fa-regular", "fa-star");
            star[2].classList.add("fa-solid", "fa-star");
            star[3].classList.remove("fa-regular", "fa-star");
            star[3].classList.add("fa-solid", "fa-star");
            star[4].classList.remove("fa-regular", "fa-star");
            star[4].classList.add("fa-solid", "fa-star-half-stroke");
        } else {
            star.forEach(st => {
                st.classList.remove("fa-regular", "fa-star");
                st.classList.add("fa-solid", "fa-star");
            });
        }
    }
});


