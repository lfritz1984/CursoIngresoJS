/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

function mostrar()
{	
	let nombre;
	let apellido;
	let edad;

	nombre = document.getElementById("txtIdNombre").value;
	apellido = prompt("Por Favor Ingrese su Apellido");
	edad = document.getElementById("txtIdEdad").value;

	alert("Usted se llama " + nombre + " " + apellido + " y tiene " + edad + " años");
}   