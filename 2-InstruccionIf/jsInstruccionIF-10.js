/*Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{

	let numero;
	let minimo = 1
	let maximo = 10

	numero = Math.round(Math.random() * ( maximo - minimo ) + minimo);
	console.log("Su nota es un: " + numero);

	if ( numero > 8)
	{
       alert("EXCELENTE");
	}

	else
	{
		if ( numero > 3 && numero < 9 )
		{
			alert("APROBO");
		}

		else
		{
			alert("Vamos, la proxima se puede");
		}
	}

}