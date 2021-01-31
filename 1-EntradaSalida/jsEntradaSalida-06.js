/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	num1 = parseFloat(num1)
	num2 = parseFloat(num2)
	resultado = num1 + num2;

	/* es otra manera de escribir el codigo y mismo resultado // y tambien hay dos comandos 
	parseInt (numeros enteros)
	parseFloat (numeros con decimales)
	
	num1 = parseFloat(document.getElementById("txtIdNumeroUno").value);
	num2 = parseFloat(document.getElementById("txtIdNumeroDos").value) ;
	resultado = num1 + num2;*/
	
	alert("La suma es " + resultado);
}