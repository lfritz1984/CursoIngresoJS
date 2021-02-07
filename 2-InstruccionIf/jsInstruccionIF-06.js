function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if ( edad < 13) {

		alert("Es un niño");

	}

	  else {

		        if ( edad >= 13 && edad <= 17 ) {

			      alert("Es un adolescente");

				}

				else {

					if ( edad < 65) {

						alert("Es adulto");

					}

					else {

						alert("Es anciano");
						
					}

					

				}

			}
			
		
}