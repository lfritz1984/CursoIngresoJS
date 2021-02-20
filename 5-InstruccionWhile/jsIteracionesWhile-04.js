/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	/*let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado <0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;
	*/

	/*1. Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos)
	Alumno = Leonel Fritz
	División = 1H
	*/
     
	let contadorDeingresos;
	let numeroIngresado;
	let contadordel10al20;

	contadorDeingresos = 0;
	contadordel10al20 = 0

	while(contadorDeingresos < 5)
	{
		numeroIngresado = prompt("ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		contadorDeingresos = contadorDeingresos + 1;
		if(numeroIngresado > 9 && numeroIngresado < 21)
		{
			contadordel10al20 = contadordel10al20 + 1;
		}
	}
    
	document.getElementById("txtIdNumero").value = contadordel10al20;
}//FIN DE LA FUNCIÓN