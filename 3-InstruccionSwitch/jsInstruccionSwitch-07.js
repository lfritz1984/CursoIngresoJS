/*Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/

function mostrar()
{
    let destino;

    destino = document.getElementById("txtIdDestino").value;

    switch(destino)
    {
        case "Bariloche":
        case "Ushuaia":
            alert("Este destino se encuentra en el Sur de Argentina");
            break;

        case "Cataratas":
        case "Mar del plata":
            alert("Este destino se encuentra en el Este de Argentina");
            break;                   
    }
}