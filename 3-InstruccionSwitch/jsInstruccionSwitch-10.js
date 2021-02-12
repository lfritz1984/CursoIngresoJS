/*Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche*/

function mostrar()
{
    let estacion;
    let destino;

    estacion = document.getElementById("txtIdEstacion").value;
    destino = document.getElementById("txtIdDestino").value;

    switch(estacion)
    {
        case "Invierno":
            switch(destino)
            {
                case "Bariloche":
                alert("Se Viaja");
                break;

                default:
                alert("No se Viaja");
                break;
            }
        break;

        case "Verano":
            switch(destino)
            {
                case "Mar del plata":
                case "Cataratas":
                alert("Se Viaja");
                break;
                
                default:
                alert("No se Viaja");
                break;    
            }
        break;

        case "Otoño":
            switch(destino)
            {
                default:         
                alert("Se Viaja");
                break;    
            }
        break;
        
        case "Primavera":
            switch(destino)
            {
                case "Bariloche":
                alert("No se Viaja");
                break;
                
                default:
                alert("Se Viaja");
                break;    
            }
    }
}