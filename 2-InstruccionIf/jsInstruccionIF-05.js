function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	// forma dentro del rango
	/*if (edad < 13 || edad > 17) {

	 alert("Usted no es un adolescente");

	}*/

	//forma fuera del rango
	if ( ! (edad >= 13 && edad <= 17) ) {

		alert("No es adolescente");
	}
   
}