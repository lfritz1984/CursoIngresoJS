/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let i;

	claveIngresada = prompt("ingrese la clave.");
	i = 1

	while (claveIngresada != "utn750" && i < 3)
	{
		claveIngresada = prompt("Error, ingrese nuevamente la clave.");
		i = i + 1;
	}
	if(i == 3)
	{
		alert("Usted fue bloqueado");
	}
	else
	{
		alert("Usted ingreso al sistema");
	}
}//FIN DE LA FUNCIÓN
