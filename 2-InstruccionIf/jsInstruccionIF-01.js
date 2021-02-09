function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if( edad == 15 ) // true (cualquier valor que no sea 0) o false (0)
	{
   
		alert("Niña bonita");

	}
    alert("Fin dela de la Función");
}
//
/*
operadores:
aritmeticos: +, -, *, /, y %
relacionales: >, <, >=, <=, !=, ==
logicos: &&(y) || (o)  !(not)
*/
