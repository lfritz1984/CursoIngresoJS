/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

// Leonel Fritz dvisión H1

function sumar()
{	
	let sumando1;
	let sumando2;
	let resultado

	sumando1 = document.getElementById("txtIdNumeroUno").value;
	sumando2 = document.getElementById("txtIdNumeroDos").value;

	sumando1 = parseInt(sumando1);
	sumando2 = parseInt(sumando2);

	suma = sumando1 + sumando2;

	alert("La suma es " + suma);	
}

function restar()
{
	let minuendo;
	let sustraendo;
	let diferencia

	minuendo = document.getElementById("txtIdNumeroUno").value;
	sustraendo = document.getElementById("txtIdNumeroDos").value;

	minuendo = parseInt(minuendo);
	sustraendo = parseInt(sustraendo);

	diferencia = minuendo - sustraendo;

	alert("La diferencia es " + diferencia);	
}

function multiplicar()
{ 
	let multiplicando;
	let multiplicador;
	let producto

	multiplicando = document.getElementById("txtIdNumeroUno").value;
	multiplicador = document.getElementById("txtIdNumeroDos").value;

	multiplicando = parseInt(multiplicando);
	multiplicador = parseInt(multiplicador);

	producto = multiplicando * multiplicador;

	alert("El producto es " + producto);	
}

function dividir()
{
	let Dividendo;
	let Divisor;
	let Cociente;

	Dividendo = document.getElementById("txtIdNumeroUno").value;
	Divisor= document.getElementById("txtIdNumeroDos").value;

	Dividendo = parseInt(Dividendo);
	Divisor = parseInt(Divisor);

	Cociente = Dividendo / Divisor;
	//Cociente = Cociente.toFixed(2); //reduce a do decimales el resultado.
	
	alert("El cociente es " + Cociente);
}

