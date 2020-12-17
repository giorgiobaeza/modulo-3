/* Fecha modificación: 17/12/2020
Creado por J.Baeza G.
esta es la página de nuestra fábrica de chocolates */
$(document).ready(function(){ 
    $( "#resizable" ).resizable();

    $( "#accordion" ).accordion();

    $('#info').on('click', function() {
        $( "#dialog" ).dialog();
    } );
    
});