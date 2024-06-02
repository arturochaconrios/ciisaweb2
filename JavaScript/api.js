              

                  $(document).ready(function(){
                    $.ajax({
                        url:'https://huachitos.cl/api/animales',
                        datatype:'json',
                        success:function(data){
                            var galeria = data.data
                
                           new DataTable('#galerias1', {
                                "data": galeria,
                                "columns": [
                                    {"data" : 'Artista'},
                                    {"data" : 'Tipo'},
                                    {"data" : 'Genero'},
                                ],
                                layout: {
                                    topStart: {
                                        buttons: ['copyHtml5', 'excelHtml5', 'csvHtml5', 'pdfHtml5']
                                    }
                                }
                            
                            })
                         } 
                    })
                })