/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let hilos3;
    let alambre1;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    largo = 2 * largo;
    ancho = 2 * ancho;
    hilos3 = 3;

    perimetro = largo + ancho;

    alambre1 = perimetro * hilos3;
    alambre1 = alambre1.toFixed(2);

    alert("La cantidad de metros a comprar de alambre son: " + alambre1);  

    document.getElementById("txtIdLargo").value = "";
    document.getElementById("txtIdAncho").value = "";
}
function Circulo () 
{
    let radio;
    const PI = Math.PI;
    let hilos3;
    let perimetro2;
    let Totalambre;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);
    hilos3 = 3;

    perimetro2 = 2 * PI * radio;

    Totalambre = perimetro2 * hilos3;
    Totalambre = Totalambre.toFixed(2);

    alert("La cantidad de metros a comprar de alambre son: " + Totalambre);

    document.getElementById("txtIdRadio").value = "";
}
function Materiales () 
{
    let largo2;
    let ancho2;
    const cemento = 2;
    const cal = 3;
    let m2;
    let totalcem;
    let totalcal;

    largo2 = document.getElementById("txtIdLargo").value;
    ancho2 = document.getElementById("txtIdAncho").value;
    largo2 = parseInt(largo2);
    ancho2 = parseInt(ancho2);
    
    m2 = largo2 * ancho2;
    totalcem = cemento * m2;
    totalcal = cal * m2;

    alert("Usted necesita para un contrapiso de " + m2 + " m2, unas " + totalcem + " bolsas de cemento y unas " + totalcal + " bolsas de cal.");

    document.getElementById("txtIdLargo").value = "";
    document.getElementById("txtIdAncho").value = "";
}