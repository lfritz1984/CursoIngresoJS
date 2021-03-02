function mostrar()
{
var numeroIngresado;
var divisor;
var cantidadDivisores;
var i;

cantidadDivisores = 0;
numeroIngresado = prompt("Ingrese el número");
numeroIngresado = parseInt(numeroIngresado);

for(i=1; i<numeroIngresado; i++)
{
	if(numeroIngresado % i == 0)
	{
	divisor = i;
	cantidadDivisores++;
	document.write("Numero divisor: " + divisor + "<br>");
	}
}
	
	document.write("cantidad de numeros divisores "+cantidadDivisores + "<br>");
}//FIN DE LA FUNCIÓN