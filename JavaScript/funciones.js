
function obtenerFormulario() {
  //alert("ACCION DESDE EL FORMULARIO")
  var nombre = document.getElementById("nombre").value
  var vacuna = document.getElementById("cuadro").value
  var precio = document.getElementById("precio").value
  var fecha = document.getElementById("fecha").value
  
  var errores = ""
  if (nombre.length <= 1) {
      errores = errores + "NOMBRE ES CAMPO REQUERIDO O DEBE SER MAYOR A 1 CARACTER\n"
  }
  if (vacuna.length == 0) {
      errores = errores + "CUADRO ES CAMPO REQUERIDO\n"
  }
  if (precio.length == 0) {
      errores = errores + "PRECIO ES CAMPO REQUERIDO\n"
  }
  if (fecha.length == 0) {
      errores = errores + "FECHA ES CAMPO REQUERIDO\n"
  }
  if (errores != 0) {
      alert(errores)
  }


  console.log("nombre " + nombre + " cuadro " + vacuna + " precio " + precio + " fecha " + fecha)
  console.log("largo nombre " + nombre.length + ", largo  Cuadro " + vacuna.length + ", largo  precio " + precio.length + ", largo  fecha " + fecha.length + ", largo  proxDosis " + proxDosis.length)
  return false
}

function obtenerFormularioJquery(){

//alert("accion desde el Formulario")
var nombre = $("#nombre").val()
var cuadro = $("#cuadro").val()
var precio = $("#precio").val()
var fecha = $("#fecha").val()
var errores = ""

if(nombre.length<=7){
  errores = errores + "Nombre es campo requerido o debe Incluir Nombre y Apellido <br>"  
}
if(cuadro.length<=5){
  errores = errores + "Cuadro es campo requerido o debe incluir el nombre del cuadro <br>"  
}
if(precio.length<=3){
  errores = errores + "Precio es campo requerido, Ingresar el Monto a Pagar <br>"  
}
if(fecha.length<=0){
  errores = errores + "Fecha es campo requerido, incluir fecha de Retiro"  
}
if (errores != ""){

  Swal.fire({
    position: "top-center",
    icon: "error",
    title: "ERROR",
    showConfirmButton: true,
    html: errores
  });

} else {
  $("#errores").empty()
  Swal.fire({
    position: "top-ceter",
    icon: "success",
    title: "Confirmación",
    text: "Informacion enviada exitosamente!",
    showConfirmButton: false,
    timer: 4500
  });
}
return false
}




                


//como llamar a p


