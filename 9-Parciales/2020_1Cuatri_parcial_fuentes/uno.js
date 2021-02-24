/*
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	let tipoDeProducto;
	let precioIngresado;
	let cantidadDeUnidades;
	let marcaDelProducto;
	let fabricanteDelProducto;
	let alcoholMasBarato;
	let fabricanteAlcoholMasBarato;

	let contadorDeProductos = 0;

	let contadorDeAlcohol = 0;
	let contadorDeJabon = 0
	let contadorDeBarbijos = 0;

	let acumuladorDeAlcohol;
	let acumuladorDejabon;
	let acumuladorDeBarbijos;

	let stockDeAlcohol = 0;
	let stockDeJabon = 0;
	let StockDEBarbijos = 0;

	while(contadorDeProductos < 5)
	{
		tipoDeProducto = prompt("Ingrese un tipo de producto: barbijo, jabon o alcohol");
		tipoDeProducto = tipoDeProducto.toLowerCase();
        while(isNaN(tipoDeProducto) == false || (tipoDeProducto != "barbijo" && tipoDeProducto != "jabon" && tipoDeProducto != "alcohol"))
		{
			tipoDeProducto = prompt("Reingrese un producto valido");
		}

		precioIngresado = prompt("Ingrese el precio del producto");
		while(isNaN(precioIngresado) == true || (precioIngresado < 100 || precioIngresado > 300))
		{
			precioIngresado = prompt("Reingrese, el precio");
		}

		cantidadDeUnidades = prompt("Ingrese la cantidad de productos");
		while(isNaN(cantidadDeUnidades) == true || cantidadDeUnidades <= 0 || cantidadDeUnidades > 1000)
		{
			cantidadDeUnidades = prompt("Reingrese, cantidad de productos");
		}

		marcaDelProducto = prompt("Ingrese la Marca del preducto");
		fabricanteDelProducto = prompt("Ingrese el fabricante del producto");

		switch(tipoDeProducto)
		{
			case "barbijo":
				contadorDeBarbijos ++
				acumuladorDeBarbijos = acumuladorDeBarbijos + precioIngresado;
				break;
			case "jabon":
				contadorDeJabon ++
				acumuladorDejabon = acumuladorDejabon + precioIngresado;
				break;
			case "alcohol":
				contadorDeAlcohol ++
				acumuladorDeAlcohol = acumuladorDeAlcohol + precioIngresado;
				break;	
		}
		contadorDeProductos	++	
	}
	if(tipoDeProducto == "alcohol" )
	    {
			alert(acumuladorDeAlcohol);
	    }
	
}
