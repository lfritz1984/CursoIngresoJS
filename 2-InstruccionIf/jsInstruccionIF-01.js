function mostrar()
{
	let distancia;
	let tiempo;
	let velocidad;

	distancia = document.getElementById("txtIdEdad").value;
	distancia = parseInt(distancia);

	tiempo = prompt("Ingrese el tiempo que tardo");
	tiempo = parseFloat(tiempo);

	velocidad = distancia / tiempo;

	if(velocidad <= 60) // true (cualquier valor que no sea 0) o false (0)
	{
		alert("Muy lento");
    }
	else
	{
		if(velocidad <= 80)
		{
			alert("Lento");
		}
		else
		{
			if(velocidad <= 100)
			{
				alert("Buen ritmo");
			}
			else
			{
				if(velocidad <= 120)
				{
					alert("Ahi de la ley");
				}
				else
				{
					alert("Eso no se hace");
				}
			}
		}
	}
}
//
/*
operadores:
aritmeticos: +, -, *, /, y %
relacionales: >, <, >=, <=, !=, ==
logicos: &&(y) || (o)  !(not)
*/
