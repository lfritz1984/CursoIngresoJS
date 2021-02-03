/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let gFahr;
    let Centígrados_1;

    gFahr = document.getElementById("txtIdTemperatura").value;
    gFahr = parseFloat(gFahr);

    Centígrados_1 = (gFahr - 32) / 1.8;
    Centígrados_1 = Centígrados_1.toFixed(2);

    alert(gFahr + " grados Fahrenheit son " + Centígrados_1 + " grados Centígrados");

    document.getElementById("txtIdTemperatura").value = "";
}

function CentigradosFahrenheit () 
{
    let gCent;
    let Fahrenheit_1;

    gCent = document.getElementById("txtIdTemperatura").value;
    gCent = parseFloat(gCent);

    Fahrenheit_1 = (gCent * 1.8) + 32;
    Fahrenheit_1 = Fahrenheit_1.toFixed(2);

    alert(gCent + " grados Centígrados son " + Fahrenheit_1 + " grados Fahrenheit");
    
    document.getElementById("txtIdTemperatura").value = "";
}
