/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let i; // variable de control (i, j, k, etc)

	i = 0;

	while( i < 10) //condiciòn 
	{
		console.log(i + 1);

		i = i + 1; //contador
	}
	alert('Fin de iteración while');
}//FIN DE LA FUNCIÓN