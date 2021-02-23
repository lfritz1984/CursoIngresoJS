/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
9 bis( se pide el menor de los pares y el mayor de los negativos)
*/
function mostrar()
{	
	let numeroIngresado;
	let mayorNegativo;
	let menorPar;
	let respuesta;
	let banderaDelPrimerPar;
	let banderaDelPrimerNegativo;

	respuesta = "si";
	banderaDelPrimerPar= true;
	banderaDelPrimerNegativo = true;

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado < 0)
		{
			if(banderaDelPrimerNegativo|| numeroIngresado % 2 == 0)
			{

			}
		}
		
		
		respuesta = prompt("desea continuar ingresando numeros? si/no");
		respuesta = respuesta.toLocaleLowerCase();
	}
	
	document.getElementById("txtIdMaximo").value = mayorNegativo;
	document.getElementById("txtIdMinimo").value = menorPar;

}
		

        /*if(banderaDelPrimero == "es el primero" )
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = "no es el primero numero ingresado";
		}
		else
		{
			if(numeroIngresado > numeroMaximo)
		    {
			numeroMaximo = numeroIngresado;
		    }
		    if(numeroIngresado < numeroMinimo)
		    {
			numeroMinimo = numeroIngresado;
		    }
		}
		

		respuesta = prompt("desea continuar ingresando numeros? si/no");
		respuesta = respuesta.toLocaleLowerCase();
	}

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimmo").value = numeroMinimo;

	/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
EJERCICIO NUMERO 9
Alumno: Leonel Fritz
División:  1H
*/
/*
function mostrar()
{	
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	let banderaDelPrimerNumero;

	respuesta = "si";
	banderaDelPrimerNumero = true;

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (banderaDelPrimerNumero == true || numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		if (banderaDelPrimerNumero == true || numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
			banderaDelPrimerNumero = false;
		}
		respuesta = prompt("desea continuar ingresando numeros? si/no");
		respuesta = respuesta.toLocaleLowerCase();
	}
	
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}*/
}//FIN DE LA FUNCIÓN*/