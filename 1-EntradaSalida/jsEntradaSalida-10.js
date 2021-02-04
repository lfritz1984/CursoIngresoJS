/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

// Leonel Fritz División H1

function mostrarDescuento()
{
	let importeSinDescuento;
	let importeConDescuento;
	let desCuento;

	importeSinDescuento = document.getElementById("txtIdImporte").value;
	importeSinDescuento = parseInt(importeSinDescuento);

	desCuento = importeSinDescuento * 25 / 100;
    //desCuento = importeSinDescuento * 0.25;
	importeConDescuento = importeSinDescuento - desCuento;
	//importeConDescuento =  importeSinDescuento - (importeSinDescuento * 0.25);
	//importeConDescuento = importeSinDescuento * 0.75;
	
	document.getElementById("txtIdResultado").value = importeConDescuento;
}