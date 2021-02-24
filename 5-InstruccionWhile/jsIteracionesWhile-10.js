/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 

	var numeroIngresado;
	var acumuladorNegativos;
	var acumuladorPositivos;
	var cantidadNegativos;
	var cantidadPositivos;
	var cantidadCeros;
	var cantidadPares;
	var promedioNegativos;
	var promedioPositivos;
	var diferenciaPositivosNegativos;
	var maximoNegativo;
	var minimoPar;
	var respuesta;


	respuesta = "si";
	acumuladorNegativos = 0;
	acumuladorPositivos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;


	while(respuesta=="si")
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)) //isNaN = no es un numero? //es por si NO es un numero
		{
			numeroIngresado = prompt("ERROR reingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}

		console.log(numeroIngresado);

		if (numeroIngresado < 0)
		 {
		 	if (cantidadNegativos == 0 || numeroIngresado > maximoNegativo)
		 	{
		 		maximoNegativo = numeroIngresado;
		 	}

		 	acumuladorNegativos = acumuladorNegativos + numeroIngresado;
		 	cantidadNegativos ++
		 }
		 else
		 {
		 	if (numeroIngresado > 0)
		 	 {
		 	 	acumuladorPositivos = acumuladorPositivos + numeroIngresado;
		 		cantidadPositivos ++ //canitdadDepositivos = cantidadDePositivos + 1
		 	 }
			else 
			{
				cantidadCeros ++;
			}		 
		 }

		 if (numeroIngresado % 2 == 0) //para numeros pares
		 {
		 
		 	/*if (cantidadPares == 0) //es el primer par
		 	{
		 		minimoPar = numeroIngresado;
		 	}
		 	else
		 	{
		 		if (numeroIngresado minimoPar)
		 		 {
		 		 	minimoPar = numeroIngresado
		 		 }	*/
		 		
		 		 if (cantidadPares == 0 || numeroIngresado < minimoPar) //diferencia entre pares
		 		  {
		 		  	minimoPar = numeroIngresado;
		 		  }

		 	cantidadPares ++;
		 }

		respuesta=prompt("desea continuar? si/no");
	}
	
	diferenciaPositivosNegativos = acumuladorPositivos - acumuladorNegativos //9-Diferencia entre positivos y negativos, (positvos-negativos).


	document.write("la suma de los negativos es :" + acumuladorNegativos);
	document.write("la suma de los positivos es :" + acumuladorNegativos);
	
	document.write("la cantidad de los negativos es :" + cantidadNegativos);
	document.write("la cantidad de los positivos es :" + cantidadPositivos;

	document.write("la cantidad de ceros es :" + cantidadCeros);

	document.write("la cantidad de pares es :" + cantidadPares);

	if (cantidadDePositivos != 0)
	 {
		 promedioPositivos = acumuladorPositivos / cantidadPositivos;
		 document.write("el promedio de los positivos es :" + promedioPositivos);
	 }
		else
		{
			document.write("el promedio de los positivos es: no hubo ingreso de positivos" );
		}
	
	if (cantidadNegativos != 0)
 	{
		promedioNegativos = acumuladorNegativos / cantidadNegativos;
    	document.write("el promedio de los negativos es :" + promedioNegativos);
 	}
 		else
 		{
 			document.write("el promedio de los negativos es: no hubo ingreso de negativos");
		}

		document.write("la diferencia entre positivos y negativos es :" + diferenciaPositivosNegativos);
}//FIN DE LA FUNCIÓN

/*
	contadores: 
	contador = contador + 1/2/3;
	contador ++;(incrementa de uno en uno)(igual al de arriba)

	acumuladores:
	acumulador = acumulador + valor;

	acumulador + = valor; (es lo mismo que lo de arriba)

*/