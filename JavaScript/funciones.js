function obtenerFormularioJquery(){

//alert("accion desde el Formulario")
var nombre = $("#nombre").val()
var nombre = $("#cuadro").val()
var nombre = $("#precio").val()
var nombre = $("#fecha").val()
var errores = ""
if(nombre.length<=1){
  errores = errores + "Nombre es campo requerido o debe ser mayor a un caracter"  
}
if(cuadro.length<=0){
  errores = errores + "Nombre es campo requerido o debe ser mayor a un caracter"  
}
if(precio.length<=0){
  errores = errores + "Nombre es campo requerido o debe ser mayor a un caracter"  
}
if(fecha.length<=0){
  errores = errores + "Nombre es campo requerido o debe ser mayor a un caracter"  
}

if(errores !=""){
  alert(errores)
    //$("#errores").html(errores)
    return false
}
}