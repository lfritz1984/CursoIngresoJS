/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio01;
    let precio02;
    let precio03;
    let PrecioFinal;

    precio01 = document.getElementById("txtIdPrecioUno").value;
    precio02 = document.getElementById("txtIdPrecioDos").value;
    precio03 = document.getElementById("txtIdPrecioTres").value;

    precio01 = parseFloat(precio01);
    precio02 = parseFloat(precio02);
    precio03 = parseFloat(precio03);

    PrecioFinal = precio01 + precio02 + precio03;
    PrecioFinal = PrecioFinal.toFixed(2);

    alert("La suma de sus productos es: " + PrecioFinal);
}
function Promedio () 
{
    let proDucto01;
    let proDucto02;
    let proDucto03;
    let suma;
    let Promedio;

    proDucto01 = document.getElementById("txtIdPrecioUno").value;
    proDucto02 = document.getElementById("txtIdPrecioDos").value;
    proDucto03 = document.getElementById("txtIdPrecioTres").value;

    proDucto01 = parseFloat(proDucto01);
    proDucto02 = parseFloat(proDucto02);
    proDucto03 = parseFloat(proDucto03);

    suma = proDucto01 + proDucto02 + proDucto03;
    Promedio = suma / 3;
    Promedio = Promedio.toFixed(2);

    alert("El promedio de sus productos es: " + Promedio);
}
function PrecioFinal () 
{
    let sinIVA01;
    let sinIVA02;
    let sinIVA03;
    let sumaparcial;
    let IVA;
    let precioFinal;

    sinIVA01 = document.getElementById("txtIdPrecioUno").value;
    sinIVA02 = document.getElementById("txtIdPrecioDos").value;
    sinIVA03 = document.getElementById("txtIdPrecioTres").value;

    sinIVA01 = parseFloat(sinIVA01);
    sinIVA02 = parseFloat(sinIVA02);
    sinIVA03 = parseFloat(sinIVA03);

    sumaparcial = sinIVA01 + sinIVA02 + sinIVA03;
    IVA = sumaparcial * 21 /100;
    precioFinal = sumaparcial + IVA;
    precioFinal = precioFinal.toFixed(2);

    alert("Su precio consumidor final es: " + precioFinal);
}