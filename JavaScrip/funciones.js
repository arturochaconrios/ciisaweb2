function obtenerFormularioJquery(){

//alert("accion desde el Formulario")
var Nombre = $("#nombre").val()

if(nombre.length<=1){
  errores = errores + "<p>Nombre es campo requerido o debe ser mayor a un caracter</p>"  
}
if(errores !=""){
    $("#errores").html(errores)
    return false
}
}