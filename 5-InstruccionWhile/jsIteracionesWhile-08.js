/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let positivos;
	let negativos;
	let sumaPositivos;
	let multiplicacionNegativos;

	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta= "si";

	while(respuesta == "si")
	{
		positivos = prompt("Ingrese un numero positivo");
		positivos = parseInt(positivos);
		negativos = prompt("Ingrese un numero negativo");
		negativos = parseInt(negativos);
		
		sumaPositivos = positivos + sumaPositivos;
	    multiplicacionNegativos = negativos * multiplicacionNegativos;

		respuesta = prompt("Si quiere continuar ingresando numeros, responda con si o no.");
		respuesta = respuesta.toLocaleLowerCase();
	}
	
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN