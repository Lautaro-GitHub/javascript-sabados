   function descuento (horarios) {
      if(horarios == null){
         alert ("Ingrese un horario")
      }
   }
   let continuar = true
 while (continuar){
    let nombre = prompt("Ingrese un nombre");
    let apellido = prompt("Ingrese un apellido");
    let servicio = prompt("Ingrese un servicio");
    let horarios = prompt("Ingrese un horario: 8:30,10:00,11:30,14:00,15:30,17:00,18:30,20:00");
    descuento (horarios)
    console.log ("El nombre es: " + nombre + " El apellido es: " + apellido + " Servicio: " + servicio + " Horario: " + horarios);
    continuar = confirm ("Quiere seguir operando")
 }
