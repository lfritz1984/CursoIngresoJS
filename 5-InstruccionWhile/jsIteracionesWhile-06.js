function mostrar()
{
	/*let contador;
	let acumulador;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	
	while(contador < 5)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/5;
	*/
	/*1. Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos)
	2. Mismo ejercicio, pero no se cuantos numeros se ingresan. (Lo decide el usuario). Mostrar tambien el promedio de los numeros que cumplen la condicion.
	Alumno = Leonel Fritz
	División = 1H
	USE EL HTML DEL EJERCICIO 6 DE WHILE
	*/
     
	let contadorDeingresos;
	let numeroIngresado;
	let contadorDel10al20;
	let respuesta;
	let acumulador;
	let promedioNumdel10Al20;

	contadorDeingresos = 0;
	contadorDel10al20 = 0
	acumulador = 0
	respuesta = "si"

	while(respuesta == "si")
	{
		numeroIngresado = prompt("ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		contadorDeingresos = contadorDeingresos + 1;
		respuesta = prompt("¿Desea seguir ingresando numeros?, responder por si o no.")
		respuesta = respuesta.toLowerCase();

		if(numeroIngresado > 9 && numeroIngresado < 21)
		{
			acumulador = acumulador + numeroIngresado;
			contadorDel10al20 = contadorDel10al20 + 1;	
		}
	}
	promedioNumdel10Al20 = acumulador / contadorDel10al20;
	document.getElementById("txtIdSuma").value = contadorDel10al20;
	document.getElementById("txtIdPromedio").value = promedioNumdel10Al20;
}