              

                  $(document).ready(function(){
                    $.ajax({
                        url:'https://huachitos.cl/api/animales',
                        datatype:'JSON',
                        success:function(data){
                            var galeria = data.data
                
                          new DataTable('#galerias1', {
                                "data": galeria,
                                "columns": [
                                    {"data" : 'Imagen'},
                                    {"data" : 'Nombre'},
                                    {"data" : 'Edad'},
                                    {"data" : 'Estado'},
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

              