/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let nuevoSueldo;
	let aumento;
	//para calcular el nuevo sueldo deberia sumarle al sueldo original el aumento
	// el calculo de porcentaje de un valor: lo consigo multiplicando el valor por el porcentaje y lo dovido por 100.

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseFloat(sueldo);

	aumento = sueldo * .1; // .1 es equivalente a 0.10 y 0.10 es lo ismo que 10 / 100
    nuevoSueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevoSueldo;
}