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
    let descuento;
    let precioFinal;

    baseEstadia = 15000;
    estacion = document.getElementById("txtIdEstacion").value;
    destino = document.getElementById("txtIdDestino").value;

    /*switch (estacion)
    {
     case "Invierno":
        switch (destino)
        {
            case "Bariloche":
                precioFinal = baseEstadia * 1.2;
                alert("Su precio final es: " + precioFinal + " pesos.");
                break;
            case "Cataratas":
            case "Cordoba":
                precioFinal = baseEstadia * 0.9;
                alert("Su precio final es: " + precioFinal + " pesos.");
                break;
            case "Mar del plata":
                precioFinal = baseEstadia * 0.8;
                alert("Su precio final es: " + precioFinal + " pesos.");
                break;    
        }
     break;

     case "Verano":
        switch(destino)
        {
            case "Bariloche":
                precioFinal = baseEstadia * 0.8;
                alert("Su precio final es: " + precioFinal + " pesos.");
                break;
            case "Cataratas":
            case "Cordoba":
                precioFinal = baseEstadia * 1.1;
                alert("Su precio final es: " + precioFinal + " pesos.");
                break; 
            case "Mar del plata":
                precioFinal = baseEstadia * 1.20;
                alert("Su precio final es: " + precioFinal + " pesos.");
                break;          
        }
     break;

     case "Otoño":
     case "Primavera":
        switch(destino)
        {
            case "Bariloche":
            case "Cataratas":
            case "Mar del plata":        
                precioFinal = baseEstadia * 1.1;
                alert("Su precio final es: " + precioFinal + " pesos.");
                break;
            case "Cordoba":
                alert("Su precio final es: " + baseEstadia + " pesos.");
                break;    
        }
     break;        
    }*/

    if(estacion == "Invierno")
    {
        if(destino == "Bariloche")
        {
            descuento = 1.2;
        }
        else
        {
            if(destino == "Cataratas" || destino == "Cordoba")
            {
                descuento = 0.9;
            }
            else
            {
                descuento = 0.8;
            }
        }
    }
    if(estacion == "Verano")
    {
        descuento = 0.8;
    }
    else
    {
        if(destino == "Mar del plata")
        {
            descuento = 1.20;
        }
        else
        {
            descuento = 1.1;
        } 
            
    }

    precioFinal = baseEstadia * descuento;
    alert("Su precio final es: " + precioFinal + " pesos.");
} 
