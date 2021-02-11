/*Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/

function mostrar()
{
    let destino;

    destino = document.getElementById("txtIdDestino").value;

    switch(destino)
    {
        case "Bariloche":
        case "Ushuaia":
            alert("En esta localidad hace Frio.");
            break;
            
        case "Cataratas":
        case "Mar del plata":
            alert("En esta localidad hace Calor.");
            break;        
    }
}