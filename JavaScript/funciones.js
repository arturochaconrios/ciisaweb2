function obtenerFormularioJquery(){

//alert("accion desde el Formulario")
var nombre = $("#nombre").val()

if(nombre.length<=1){
  errores = errores + "Nombre es campo requerido o debe ser mayor a un caracter"  
}
if(errores !=""){
  alert(errores)
    //$("#errores").html(errores)
    return false
}
}