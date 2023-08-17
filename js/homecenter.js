let lupaCel = document.getElementById("lupaCel");
let seekerCellID = document.getElementById("seekerCellID");
let xSalid = document.getElementById("xSalid");
let mensajeAyuda = document.getElementById("mensajeAyuda");
let ana = document.getElementById("ana");
let mujerYAna = document.getElementById("mujerYAna");
let ayudaBox = document.getElementById("ayudaBox");
let xCircle = document.getElementById("xCircle");

lupaCel.addEventListener("click",function(){
    seekerCellID.classList.add("seekerCell-hidden");
    seekerCellID.classList.remove("seeker-cell");
})

xSalid.addEventListener("click",function(){
    seekerCellID.classList.remove("seekerCell-hidden");
    seekerCellID.classList.add("seeker-cell");
})
ana.addEventListener("click",function(){
    if(mensajeAyuda.classList.contains("mensaje-ayuda")) {
        mensajeAyuda.classList.remove("mensaje-ayuda");
        mensajeAyuda.classList.add("mensaje-ayuda-hidden");
        mujerYAna.classList.remove("mujer-y-ana");
        mujerYAna.classList.add("mujer-y-ana-hidden");
        ayudaBox.classList.remove("ayuda");
        ayudaBox.classList.add("ayuda-new");
        ana.classList.add("asistente-new");
        ana.classList.remove("asistente");
        xCircle.classList.add("x-circle-hidden");
        xCircle.classList.remove("x-circle");
    } else {
        mensajeAyuda.classList.add("mensaje-ayuda");
        mensajeAyuda.classList.remove("mensaje-ayuda-hidden");
        mujerYAna.classList.add("mujer-y-ana");
        mujerYAna.classList.remove("mujer-y-ana-hidden");
        ayudaBox.classList.add("ayuda");
        ayudaBox.classList.remove("ayuda-new");
        ana.classList.remove("asistente-new");
        ana.classList.add("asistente");
        xCircle.classList.remove("x-circle-hidden");
        xCircle.classList.add("x-circle");
    }
})