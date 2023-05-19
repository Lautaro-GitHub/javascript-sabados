   /* 1RA ENTREGA
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
*/
//2DA ENTREGA
class Clienta {
   constructor(nombre,apellido,dni,servicio,dia,horario){
      this.nombre = nombre
      this.apellido = apellido
      this.dni = dni
      this.servicio = servicio
      this.dia = dia
      this.horario = horario
      this.fechacreacion = new Date()
   }
}
const calendario = {
   lunes:[],
   martes:[],
   miercoles:[],
   jueves:[],
   viernes:[]
}
const clientas = []
const datoActualizar = (propiedad,index) => {
   let modificar = confirm(`quiere cambiar el ${propiedad} de la clienta`)
   if(modificar){
      const valorPropiedad = prompt(`ingrese ${propiedad}`).toUpperCase()
      clientas[index][propiedad] = valorPropiedad
   }
}

let continuar = true
while(continuar){
   const nombre = prompt("Ingrese Nombre").toUpperCase()
   const apellido = prompt("Ingrese Apellido").toUpperCase()
   const dni = parseFloat(prompt("Ingrese DNI"))
   const servicio = prompt ("Ingrese Servicio").toUpperCase()
   let ocupado
   let dia
   let horario
   do{
      dia = prompt("Ingrese dia").toLowerCase()
      horario = parseFloat(prompt("Ingrese Horario"))
      ocupado = calendario[dia].includes(horario)
   }while(ocupado)
  
   const clienta = new Clienta (nombre,apellido,dni,servicio,dia,horario)
   clientas.push(clienta)
   calendario[dia].push(horario)
   continuar = confirm("Quiere seguir ingresando clientas")
}

continuar = confirm("Quiere eliminar alguna clienta")
while (continuar){
   const clientaDniEliminar = parseInt(prompt("Ingrese DNI de la clienta a eliminar"))
   const index = clientas.findIndex((clienta)=> clienta.dni == clientaDniEliminar)
   if(index != -1){
      clientas.splice(index,1)
      alert("Clienta Eliminada")
   }else{
      alert("Clienta no encontrada")
   }
   continuar = confirm("Quiere eliminar alguna otra clienta")
}

continuar = confirm("Quiere actualizar alguna clienta")
while (continuar){
   const clientaDniActualizar = parseInt(prompt("Ingrese DNI de la clienta a actualizar"))
   const index = clientas.findIndex((clienta)=> clienta.dni == clientaDniActualizar)
   if(index != -1){
      datoActualizar("nombre",index)
      datoActualizar("apellido",index)
      datoActualizar("dni",index)
      datoActualizar("servicio",index)
      datoActualizar("dia",index)
      datoActualizar("horario",index)
      alert("Clienta actualizada")
   }else{
      alert("Clienta no encontrada")
   }
   continuar = confirm("Quiere actualizar alguna otra clienta")
}
console.log(clientas)
