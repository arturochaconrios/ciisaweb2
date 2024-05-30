function miPrimeraChamba(desde, hasta) {
  alert("DESDE MI PRIMERA FUNCION")
  var contador = desde
  for (contador; contador <= hasta; contador++) {
      console.log(contador)
  }
}
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
var nombre = $("#nombre").val(5)
var nombre = $("#cuadro").val(5)
var nombre = $("#precio").val(7)
var nombre = $("#fecha").val(9)
//var errores = ""

if(nombre.length<=1){
  errores = errores + "Nombre es campo requerido o debe ser mayor a un caracter"  
}
if(cuadro.length<=1){
  errores = errores + "cuadro es campo requerido o debe ser mayor a un caracter"  
}
if(precio.length<=1){
  errores = errores + "precio es campo requerido o debe ser mayor a un caracter"  
}
if(fecha.length<=1){
  errores = errores + "fecha es campo requerido o debe ser mayor a un caracter"  
}
if (errores != ""){
  //alert(errores)
  //$("#errores").html(errores) 
  Swal.fire({
      title: "Error!",
      html: errores,
      icon: "error"
  });
} else {
  $("#errores").empty()
  Swal.fire({
      title: "Confirmacion!",
      text: "Tu informacion a sido enviada exitosamente!",
      icon: "success"
  });
}
return false
}
