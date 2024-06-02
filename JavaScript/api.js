$(document).ready(function(){
    //var datatable="",
                $.ajax({
                    url:'https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]',
                    dataType:'jason',
                    success:function(data){
    
                        var galerias=data.constituents
  
                        new datatable('#galerias1',{
                        "data": galerias,
                        "columns": [
                          {"data": 'artista'},
                          {"data": 'nombre'}, 
                        ],
                        loyout:{
                          topstart:{
                            buttons:['copyhtml5','excekhtml5','csvhtml5','pdfhtml5']
                          }
                        }
                        })
                      }
                    })
                  })
                
  