/*
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/

function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if ( edad < 13) 
	{

	 alert("Es un niño");

	}

	  else 
	    {

		    if ( edad > 12 && edad < 18 ) 
			{

			 alert("Es un adolescente");

			}

			   else 
			    {

			      if ( edad > 17 ) 
			        {

			         alert("Es adulto");

			        }

			    }

	    }
					
}