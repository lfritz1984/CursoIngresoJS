/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;
	nombre = document.getElementById("txtIdNombre").value; // .value da el valor a la variable "let nombre"
	alert(nombre); 
	/*nombre = txtIdNombre.value; // esta es otra forma de codigo de realizar lo mismo
	alert(nombre);*/
	document.getElementById("txtIdNombre").value = "";
}