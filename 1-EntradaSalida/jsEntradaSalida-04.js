/*
Division 1H
Alumno: Leonel Guillermo Fritz

1. Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%. Pueden utilizar el html del ejercicio 4 para resolverlo.*/

function mostrar()
{
	let descripcion; 
	let precio;
	let aumento;
	let precioFinal;

	precio = document.getElementById("txtIdNombre").value;
	descripcion = prompt("Ingrese el producto");
    precio = parseFloat(precio);

	aumento = precio * 30 / 100;
	precioFinal = precio + aumento;

	alert("Su producto " + descripcion + " ya le agregamos un 30 % de aumento, quedando asi con un precio final de: " + precioFinal + ".");
}