/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importeSinDescuento;
	let importeConDescuento;
	let desCuento;

	importeSinDescuento = document.getElementById("txtIdImporte").value;
	importeSinDescuento = parseFloat(importeSinDescuento);

	desCuento = importeSinDescuento * 25 / 100;

	importeConDescuento = importeSinDescuento - desCuento;

	document.getElementById("txtIdResultado").value = importeConDescuento;

}
