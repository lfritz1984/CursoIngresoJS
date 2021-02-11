/*Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/

function mostrar()
{
    let baseEstadia;
    let estacion;
    let destino;
    let precioFinal;

    baseEstadia = 15000;
    estacion = document.getElementById("txtIdEstacion").value;
    destino = document.getElementById("txtIdDestino").value;

    switch (estacion && destino)
    { 
        case "Invierno" && "Bariloche":
            precioFinal = baseEstadia * 1.2;
            alert("Su precio final es: " + precioFinal + " pesos.");
            break;
 
        case "Invierno" && "Cordoba":
            precioFinal = baseEstadia * 0.9;
            alert("Su precio final es: " + precioFinal + " pesos.");
            break;
            
        case "Invierno" && "Cataratas":
             precioFinal = baseEstadia * 0.9;
             alert("Su precio final es: " + precioFinal + " pesos.");
            break;      
        
        case "Invierno" && "Mar del plata":
            precioFinal = baseEstadia * 0.8;
            alert("Su precio final es: " + precioFinal + " pesos.");
            break;

        case "Verano" && "Bariloche":
            precioFinal = baseEstadia * 0.8;
            alert("Su precio final es: " + precioFinal + " pesos.");
            break;
        
        case "Verano" && "Mar del plata":
            precioFinal = baseEstadia * 1.2;
            alert("Su precio final es: " + precioFinal + " pesos.");
            break;
    }   
}