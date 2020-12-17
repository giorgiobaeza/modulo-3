/* Fecha modificación: 17/12/2020
Creado por J.Baeza G.
esta es la página de nuestra fábrica de chocolates*/
$(document).ready( function () {
    $('#tableid').DataTable();
} );

function eliminaventa() {
    var mensaje = confirm('¿Desea eliminar la venta?');
//Detectamos si el usuario acepto el mensaje
    if (mensaje) {

        alert('La venta se ha eliminado exitosamente');
        }
//Detectamos si el usuario denegó el mensaje
        else {
        alert("¡Haz denegado el mensaje!");
        }
        }                  




