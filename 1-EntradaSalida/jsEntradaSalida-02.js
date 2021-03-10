/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'
function mostrar()
{
	let nombre; // declaro la variable nombre
	nombre = "Leonel"; // la inicializo con la cadena Jose
	alert(nombre);

    let apellido // aca declaro una nueva variable
	apellido = prompt("Ingrese su Apellido"); // inicializo mediante un promt una cadena de texto
	alert("Su apellido es " + apellido); //ejercicio de con comando prompt

	/*const nombre = "Jose"; una constante es una variable de solo lectura = significa que en el unico lugar 
	que puedo asignarle un valor es en el momento de la declaración y nunca mas puedo modificar el valor en la
	constante nombre
	//nombre = "Ana";
}*/

/*Enunciado:1

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/

function mostrar()
{

	let nombreDelProducto;
	let tipoDelProducto;
	let precioDelProducto;
	let cantidadDeUnidades;
	let tipoDeInflamable;
	let marcaDelProducto;
	let contadorDeIngresos;
	let contadorAlcohol;
	let contadorIac;
	let contadorQuat;
	let acumuladorAlcohol;
	let acumuladorIat;
	let acumuladorQuat;
	let promedioAlcohol;
	let promedioIac;
	let promedioQuat;

	contadorDeIngresos = 0;
	contadorAlcohol = 0;
	contadorIac = 0;
	contadorQuat = 0;
	acumuladorAlcohol = 0;
	acumuladorIat = 0;
	acumuladorQuat = 0;


	while(contadorDeIngresos < 5)
	{
		nombreDelProducto = prompt("Ingrese el nombre del producto");
		nombreDelProducto = nombreDelProducto.toLowerCase();
		while(isNaN(nombreDelProducto) == false)
		{
		nombreDelProducto = prompt("Error, ingrese un nombre valido");
		nombreDelProducto = nombreDelProducto.toLowerCase();
		}
		tipoDelProducto = prompt("Ingrese el tipo de producto; ALCOHOL, IAC o QUAT");
		tipoDelProducto = tipoDelProducto.toUpperCase();
		while(isNaN(tipoDelProducto) == false || tipoDelProducto != "ALCOHOL" && tipoDelProducto != "IAC" && tipoDelProducto != "QUAT")
		{
		tipoDelProducto = prompt("Error, ingrese un tipo valido");
		tipoDelProducto = tipoDelProducto.toUpperCase();
		}
		precioDelProducto = prompt("Ingrese el precio del producto; entre 100 y 300.");
		precioDelProducto = parseFloat(precioDelProducto);
		while(isNaN(precioDelProducto) == true || precioDelProducto <100 || precioDelProducto > 300)
		{
		precioDelProducto = prompt("Error, ingrese un precio valido");
		precioDelProducto = parseFloat(precioDelProducto);
		}
		cantidadDeUnidades = prompt("Ingrese la cantidad de unidades, entre 1 a 1000.");
		cantidadDeUnidades = parseFloat(cantidadDeUnidades);
		while(isNaN(cantidadDeUnidades) == true || cantidadDeUnidades < 1 || cantidadDeUnidades > 1000)
		{
			cantidadDeUnidades = prompt("Error, ingrese una cantidad valida");
			cantidadDeUnidades = parseFloat(cantidadDeUnidades);
		}	
		tipoDeInflamable = prompt("Ingrese el tipo de inflamable; ignifugo, combustible ó explosivo");
		tipoDeInflamable = tipoDeInflamable.toLowerCase();
		while(isNaN(tipoDeInflamable) == false || tipoDeInflamable != "ignifugo" && tipoDeInflamable != "combustible" && tipoDeInflamable != "explosivo")
		{
			tipoDeInflamable = prompt("Error, reingrese un tipo valido de inflamable");
		}
		marcaDelProducto = prompt("Ingrese la marca del producto");
		while(isNaN(marcaDelProducto) == false)
		{
			marcaDelProducto = prompt("Error, ingrese una marca valida");
		}
		switch(tipoDelProducto)
		{
			case "ALCOHOL":
				contadorAlcohol ++;
				acumuladorAlcohol = acumuladorAlcohol + cantidadDeUnidades;
				break;
			case "IAC":
				contadorIac ++;
				acumuladorIat = acumuladorIat + cantidadDeUnidades;
				break;
			case "QUAT":
				contadorQuat ++;
				acumuladorQuat = acumuladorQuat + cantidadDeUnidades;
				break;	
		}		
	contadorDeIngresos ++;			
	}
	promedioAlcohol = (contadorAlcohol * 100)/acumuladorAlcohol;
	document.write(promedioAlcohol);
}