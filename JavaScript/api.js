$(document).ready(function(){
    //var datatable="",
                $.ajax({
                    url:'https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]',
                    dataType:'jason',
                    success:function(data){
    
                        var galerias=data.data
   
                new datatable('#galerias1',{     
                                                    
                    "data": data,
                    "columns": [
                      {"data": 'artista'},
                      {"data": 'nombre'}, 
                      {"data": 'Tipo'},
                      {"data": 'medidas'},
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
                  