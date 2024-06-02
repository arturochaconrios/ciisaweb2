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
{
  "data":[

  
{
  "objectID": 45734,
  "isHighlight": false,
  "accessionNumber": "36.100.45",
  "accessionYear": "1936",
  "isPublicDomain": true,
  "primaryImage": "https://images.metmuseum.org/CRDImages/as/original/DP251139.jpg",
  "primaryImageSmall": "https://images.metmuseum.org/CRDImages/as/web-large/DP251139.jpg",
  "additionalImages": [
      "https://images.metmuseum.org/CRDImages/as/original/DP251138.jpg",
      "https://images.metmuseum.org/CRDImages/as/original/DP251120.jpg"
  ],
  "constituents": [
      {
          "constituentID": 11986,
          "role": "Artist",
          "name": "Kiyohara Yukinobu",
          "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500034433",
          "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q11560527",
          "gender": "Female"
      }
  ],
  "department": "Asian Art",
  "objectName": "Hanging scroll",
  "title": "Quail and Millet",
  "culture": "Japan",
  "period": "Edo period (1615–1868)",
  "dynasty": "",
  "reign": "",
  "portfolio": "",
  "artistRole": "Artist",
  "artistPrefix": "",
  "artistDisplayName": "Kiyohara Yukinobu",
  "artistDisplayBio": "Japanese, 1643–1682",
  "artistSuffix": "",
  "artistAlphaSort": "Kiyohara Yukinobu",
  "artistNationality": "Japanese",
  "artistBeginDate": "1643",
  "artistEndDate": "1682",
  "artistGender": "Female",
  "artistWikidata_URL": "https://www.wikidata.org/wiki/Q11560527",
  "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500034433",
  "objectDate": "late 17th century",
  "objectBeginDate": 1667,
  "objectEndDate": 1682,
  "medium": "Hanging scroll; ink and color on silk",
  "dimensions": "46 5/8 x 18 3/4 in. (118.4 x 47.6 cm)",
  "measurements": [
      {
          "elementName": "Overall",
          "elementDescription": null,
          "elementMeasurements": {
              "Height": 118.4,
              "Width": 47.6
          }
      }
  ],
  "creditLine": "The Howard Mansfield Collection, Purchase, Rogers Fund, 1936",
  "geographyType": "",
  "city": "",
  "state": "",
  "county": "",
  "country": "",
  "region": "",
  "subregion": "",
  "locale": "",
  "locus": "",
  "excavation": "",
  "river": "",
  "classification": "Paintings",
  "rightsAndReproduction": "",
  "linkResource": "",
  "metadataDate": "2020-09-14T12:26:37.48Z",
  "repository": "Metropolitan Museum of Art, New York, NY",
  "objectURL": "https://www.metmuseum.org/art/collection/search/45734",
  "tags": [
      {
          "term": "Birds",
          "AAT_URL": "http://vocab.getty.edu/page/aat/300266506",
          "Wikidata_URL": "https://www.wikidata.org/wiki/Q5113"
      }
  ],
  "objectWikidata_URL": "https://www.wikidata.org/wiki/Q29910832",
  "isTimelineWork": false,
  "GalleryNumber": ""
}
]
}