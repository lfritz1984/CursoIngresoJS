/*Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	/*if ( edad >=13 )
	{

		if( edad <= 17)
		{

	      alert("Usted es adolescente");		

		}	

	}*/

	// otra forma de hacer con el &&

	if ( edad > 12 && edad < 18)
	{

		alert("Usted es adolescente");

	}

}