

function calcularEquilibrio(venta,variable,fijo){
    return  (venta-variable)/fijo;
}

$(document).ready(function(){
    $("#boton").on("click", function(){
        const fijo= Number($("#fijo").val());
        const venta= Number($("#venta").val());
        const variable= Number($("#variable").val());
        
        const equilibrio=calcularEquilibrio(venta,variable,fijo);
        
        $("#equilibrio").html(`El equilibrio es: ${equilibrio}`);
    });
});


