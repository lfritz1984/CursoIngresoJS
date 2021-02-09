/*Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{
	let numero;
	let minimo = 1
	let maximo = 10

    numero = Math.round(Math.random() * ( maximo - minimo ) + minimo);

	alert(numero);
}