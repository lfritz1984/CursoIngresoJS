/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//reservo el espacio en memoria para guardar el nombre del usuario (variable)
	let nombre; 

    //guardo en la variable nombre el texto que escribo en usuario dentro de la entana prompt
	nombre = prompt("Ingrese su nombre"); 

    //copio en nombre que tengo guardado en la variable nombre dentro de la caja de texto embebida en la pagina html
	document.getElementById("txtIdNombre").value = nombre; 
}