/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let respuesta;

	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		respuesta = prompt("Si quiere continuar ingresando numeros, responda con si o no.");
		respuesta = respuesta.toLocaleLowerCase();

		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;
}//FIN DE LA FUNCIÓN