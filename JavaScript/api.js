$(document).ready(function(){
    //var datatable="",
                $.ajax({
                    url:'https://huachitos.cl/api/animales',
                    dataType:'jason',
                    success:function(data){
    
                        var galerias=data.data
   
                new datatable('#galerias1',{     
                                                    
                    "data": galerias,
                    "columns": [
                      {"data": 'Artista'},
                      {"data": 'Nombre'}, 
                      {"data": 'Tipo'},
                      {"data": 'Medidas'},
                    ],
                    loyout:{
                      topStart:{
                        button:['copyhtmnl5', 'excelhtml5','csvhtml5','pdfhtml5']
                      }
                    }
                  })
                    }
                  })
                  })
                  