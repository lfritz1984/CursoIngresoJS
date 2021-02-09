/*Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/

function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if( edad > 17 )
	{

		document.write("Usted es mayor de edad");

    }

    else
	{

		document.write("Usted es menor de edad");

	}

}