/*Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{

	let nota;
	
	//nota = Math.round(Math.random() * ( maximo - minimo ) + minimo);
	nota = Math.round(Math.random() * 9 + 1 ); // es lo mismo que la linea 14
	console.log("Su nota es un: " + nota);

	if ( nota > 8)
	{
       alert("EXCELENTE");
	}

	else
	{
		if ( nota > 3 && nota < 9 )
		{
			alert("APROBO");
		}

		else
		{
			alert("Vamos, la proxima se puede");
		}
	}

}