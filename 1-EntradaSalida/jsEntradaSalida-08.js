/*
División 1H
Alumno Leonel Guillermo Fritz

3 - Ingresar dos numeros por id
Se pide:
mostrar por console.log:
a) La suma de los dos numeros
b) El promedio de los numeros.
c) El modulo de los numeros (el primero en modulo del segundo)

UTILIZAR EL EJERCICIO 8 para resolverlo*/
function SacarResto()
{
    let dividendo;
	let divisor;
	let suma;
	let promedio;
	let resto;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;
	
	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

    suma = dividendo + divisor;
	promedio = suma / 2;
    resto = dividendo % divisor;

	console.log("La suma es: " + suma);
	console.log("El promedio es: " + promedio);
	console.log("El modulo de los numeros es: " + resto);
}