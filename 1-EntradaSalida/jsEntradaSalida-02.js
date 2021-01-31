/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre; // declaro la variable nombre
	nombre = "Leonel"; // la inicializo con la cadena Jose
	alert(nombre);

    let apellido // aca declaro una nueva variable
	apellido = prompt("Ingrese su Apellido"); // inicializo mediante un promt una cadena de texto
	alert(apellido); //ejercicio de con comando prompt

	/*const nombre = "Jose"; una constante es una variable de solo lectura = significa que en el unico lugar 
	que puedo asignarle un valor es en el momento de la declaración y nunca mas puedo modificar el valor en la
	constante nombre*/
	//nombre = "Ana";
}

