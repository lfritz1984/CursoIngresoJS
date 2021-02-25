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
	// declarar las variables

	let tipoDeProducto;
	let precioDelProducto;
	let cantidadesDeProductos;
	let marcaDelProducto;
	let fabricanteDelProducto;
	let acumuladorBarbijos;
	let acumuladorJabones;
	let acumuladorAlcohol;
	let contadorDeProductos;
	let contadorBarbijos;
	let contadorJabones;
	let contadorAlcohol;
	let precioDelAlcoholMasBarato;
	let cantidadDelAlcoholMasBarato;
	let fabricanteDelAlcoholMasBarato;
    let promedioCompra;

	acumuladorBarbijos = 0;
	acumuladorJabones = 0;
	acumuladorAlcohol = 0;
    
	contadorDeProductos = 0;
	contadorBarbijos = 0;
	contadorJabones = 0;
	contadorAlcohol = 0;

	//tengo que generar un bucle que se repita 5 veces (tipo, precio, cantida marca y fabricante) valido todo segun corresponda.
	// utilizo el while porque conozco de antemano la cantidad de repeticiones

	while(contadorDeProductos < 5)
	{
		tipoDeProducto = prompt("Ingrese un tipo de producto: barbijo, jabon o alcohol");
		tipoDeProducto = tipoDeProducto.toLowerCase();

        while(isNaN(tipoDeProducto) == false || (tipoDeProducto != "barbijo" && tipoDeProducto != "jabon" && tipoDeProducto != "alcohol"))
		{
			tipoDeProducto = prompt("Reingrese un producto valido");
		}

		precioDelProducto = prompt("Ingrese el precio del producto de 100 a 300");
		precioDelProducto = parseFloat(precioDelProducto);
		while(isNaN(precioDelProducto) == true || (precioDelProducto < 100 || precioDelProducto > 300))
		{
			precioDelProducto = prompt("Reingrese, el precio");
		}

		cantidadesDeProductos = prompt("Ingrese la cantidad de productos");
		cantidadesDeProductos = parseInt(cantidadesDeProductos);
		while(isNaN(cantidadesDeProductos) == true || cantidadesDeProductos <= 0 || cantidadesDeProductos > 1000)
		{
			cantidadesDeProductos = prompt("Reingrese, cantidad de productos");
		}

		marcaDelProducto = prompt("Ingrese la Marca del producto");
		fabricanteDelProducto = prompt("Ingrese el fabricante del producto");

		switch(tipoDeProducto)
		{
			case "alcohol":
				acumuladorAlcohol += cantidadesDeProductos;
				if(precioDelProducto < precioDelAlcoholMasBarato || contadorAlcohol == 0)
				{
					precioDelAlcoholMasBarato = precioDelProducto;
					cantidadDelAlcoholMasBarato = cantidadesDeProductos;
					fabricanteDelAlcoholMasBarato = fabricanteDelProducto;
				}
				contadorAlcohol ++;
				break;
			case "barbijo":
				acumuladorBarbijos += cantidadesDeProductos;
				contadorBarbijos ++;
				break;
			case "jabon":
				acumuladorJabones += cantidadesDeProductos;
				contadorJabones ++;
				break;
		}
		contadorDeProductos ++;
	}
	//a) Del más barato (debo comparar precios) de los alcohol, la cantidad de unidades y el fabricante.
	if(contadorAlcohol > 0)
	{
		document.write("El alcohol mas barato de los ingresados es: " + precioDelAlcoholMasBarato + ", que cuenta con una cantidad de: " + cantidadDelAlcoholMasBarato + " y su fabricantes es: " + fabricanteDelAlcoholMasBarato + "<br>");
	}
	else
	{
		document.write("No se ingreso ningun alcohol" + "<br>");
	}
	
    //b) Del tipo con mas unidades, el promedio por compra
	if(acumuladorAlcohol > (acumuladorBarbijos && acumuladorJabones))
	{
		promedioCompra = acumuladorAlcohol / contadorAlcohol;
	}
	else
	{
		if(acumuladorBarbijos >= (acumuladorAlcohol && acumuladorJabones))
		{
			promedioCompra = acumuladorBarbijos / contadorBarbijos;
		}
		else
		{
			promedioCompra = acumuladorJabones / contadorJabones;
		}
	}
	document.write("El promedio de compra, del tipo con mas unidades es: " + promedioCompra + "<br>");
    //c) Cuántas unidades de jabones hay en total
	if(contadorJabones > 0)
	{
		document.write("el total de jabones ingresados es: " + acumuladorJabones +"." + "<br>");
	}
	else
	{
		document.write("No se ingreso ningun jabon" + "<br>");
	}	
}
