/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
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
