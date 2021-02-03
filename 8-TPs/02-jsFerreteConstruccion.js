/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let hilos3;
    let alambre;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    hilos3 = 3;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    largo = (largo * 2) * hilos3;
    ancho = (ancho * 2) * hilos3;

    alambre = largo + ancho;
    alambre = alambre.toFixed(2);

    alert("La cantidad de metros a comprar de alambre son: " + alambre);  

    document.getElementById("txtIdLargo").value = "";
    document.getElementById("txtIdAncho").value = "";
}
function Circulo () 
{
    let radio;
    let hilos3;
    let longitud;

    radio = document.getElementById("txtIdRadio").value;
    hilos3 = 3;
    radio = parseFloat(radio);

    longitud = (2 * 3.14 * radio) * hilos3;
    longitud = longitud.toFixed(2);

    alert("La cantidad de metros a comprar de alambre son: " + longitud);

    document.getElementById("txtIdRadio").value = "";
}
function Materiales () 
{
    let largo2;
    let ancho2;
    let cemento;
    let cal;
    let m2;
    let totalcem;
    let totalcal;

    largo2 = document.getElementById("txtIdLargo").value;
    ancho2 = document.getElementById("txtIdAncho").value;
    largo2 = parseInt(largo2);
    ancho2 = parseInt(ancho2);
    cemento = 2;
    cal = 3;
    m2 = largo2 * ancho2;

    totalcem = cemento * m2;
    totalcal = cal * m2;

    alert("Usted necesita " + totalcem + " bolsas de cemento y " + totalcal + " bolsas de cal");

    document.getElementById("txtIdLargo").value = "";
    document.getElementById("txtIdAncho").value = "";
}