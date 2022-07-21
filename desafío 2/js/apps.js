

$(document).ready(function(){
    $("#calcular").on("click", function(){
        const gastosnec= Number($("#salario").val())/2;
        const gastosop=Number($("#salario").val())*(30/100);
        const ahorro=Number($("#salario").val())*(20/100);

        

        $("#html").html(`Ahorro: ${ahorro} //  Gastones necesarios: ${gastosnec} //  Gastos opcionales: ${gastosop}`);
    });
});
