/*
2- en el ejercicio 10 de entrada y salida , se debe pedir el nombre del producto , tambien se debe pedir el porcentaje de descuento al usuario, mostar el mensaje "usted compro un XXXXXX con XX % de descuento, el precio final es XXXX""*/

// Leonel Fritz División H1

function mostrarDescuento()
{
	let producto;
	let importeSinDescuento;
	let ingresoDescuento;
	let descuento;
	let importeConDescuento;
	
	importeSinDescuento = document.getElementById("txtIdImporte").value;
	importeSinDescuento = parseFloat(importeSinDescuento);

	producto = prompt("Ingrese su producto");
	ingresoDescuento = prompt("Ingrese porcentaje de descuento");

	ingresoDescuento = parseFloat(ingresoDescuento);

	descuento = importeSinDescuento * ingresoDescuento / 100;

	importeConDescuento = importeSinDescuento - descuento;
	
	alert("usted compro un " + producto + " con " + ingresoDescuento + " de descuento, el precio final es " + importeConDescuento + ".");
}