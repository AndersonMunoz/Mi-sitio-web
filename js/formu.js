let btnEnviar = document.getElementById("btnEnviar");
let fechaLimite= new Date('2023-08-31T08:00:00');

btnEnviar.addEventListener("click",function(){
    let fecha= document.getElementById("fecha").value;
    let hora= document.getElementById("hora").value;
    let fechaHoraActual = new Date(fecha+'T'+hora);
    if (fecha === '' || hora === '') {
        alert('No se ha ingresado ningún dato.');
        return;
      } else if (fechaHoraActual > fechaLimite) {
        alert('La fecha ya ha pasado.');
      } else {
        let diferencia = fechaLimite - fechaHoraActual;
    
        let segundosRestantes = Math.floor(diferencia / 1000);
        let minutosRestantes = Math.floor(segundosRestantes / 60);
        let horasRestantes = Math.floor(minutosRestantes / 60);
        let diasRestantes = Math.floor(horasRestantes / 24);
      
        let mensaje = 'Faltan ' + diasRestantes + ' días, ' + (horasRestantes % 24) + ' horas, ' + (minutosRestantes % 60) + ' minutos';
        alert(mensaje);
      }
})
