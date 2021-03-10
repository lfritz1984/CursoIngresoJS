/*Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/

function mostrar()
{
	let tipoDeProducto;
	let precioDelProducto;
	let cantidadDeUnidades;
	let marca;
	let fabricante;
	let i;
	let masCaroJabonesCantidad;
	let masCaroJabonesFabricante;
	let masCaroJabonesPrecio;
	let contadorBarbijos;
	let contadorJabones;
	let contadorAlcoholes;
	let acumuladorBarbijos;
	let acumuladorJabones;
	let acumuladorAlcoholes;
	let promedioDeCompra;

	contadorBarbijos = 0;
	contadorJabones = 0;
	contadorAlcoholes = 0;
	acumuladorBarbijos = 0;
	acumuladorJabones = 0;
	acumuladorAlcoholes = 0;

	i = 0;

	while( i < 5)
	{
		tipoDeProducto = prompt("Ingrese un tipo de producto: barbijo, jabon ó alcohol");
		tipoDeProducto = tipoDeProducto.toLowerCase();
		while(isNaN(tipoDeProducto) == false || tipoDeProducto != "barbijo" &&  tipoDeProducto != "jabon" && tipoDeProducto != "alcohol")
		{
			tipoDeProducto = prompt("Error, Ingrese un tipo valido de producto: barbijo, jabon ó alcohol");
			tipoDeProducto = tipoDeProducto.toLowerCase();
		}
		precioDelProducto = prompt("Ingrese el precio del producto entre 100 y 300");
		precioDelProducto = parseFloat(precioDelProducto);
		while(isNaN(precioDelProducto) == true || precioDelProducto < 100 || precioDelProducto > 300)
		{
			precioDelProducto = prompt("Error, Ingrese un precio valido del producto entre 100 y 300");
			precioDelProducto = parseFloat(precioDelProducto);
		}
		cantidadDeUnidades = prompt("Ingrese la cantidad de unidades de 1 a 1000");
		cantidadDeUnidades = parseInt(cantidadDeUnidades);
		while(isNaN(cantidadDeUnidades) == true || cantidadDeUnidades < 1 || cantidadDeUnidades >1000)
		{
			cantidadDeUnidades = prompt("Error, Ingrese una cantidad valida de unidades de 1 a 1000");
			cantidadDeUnidades = parseInt(cantidadDeUnidades);
		}
		marca = prompt("Ingrese la marca del producto");
		marca = marca.toLowerCase();
		while(isNaN(marca) == false)
		{
			marca = prompt("Error, Ingrese una marca valida del producto");
			marca = marca.toLowerCase();
		}
		fabricante = prompt("Ingrese el fabricante de la marca")

		switch(tipoDeProducto)
		{
			case "barbijo":
				acumuladorBarbijos += cantidadDeUnidades;
				contadorBarbijos ++;
				break;
			case "jabon":
				acumuladorJabones += cantidadDeUnidades;
				
				if(contadorJabones == 0 || precioDelProducto > masCaroJabonesPrecio)
				{
					masCaroJabonesPrecio = precioDelProducto;
					masCaroJabonesCantidad = cantidadDeUnidades;
					masCaroJabonesFabricante = fabricante;
				}
				contadorJabones ++;
				break;
			case "alcohol":
				acumuladorAlcoholes +=cantidadDeUnidades;
				contadorAlcoholes ++;
				break;

		}

		i ++;
	}
	//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
	document.write("De los mas caros de los jabones es: " + masCaroJabonesFabricante + ", con una cantidad de unidades de: " + masCaroJabonesCantidad + "<br>");

	//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	if(acumuladorBarbijos > acumuladorJabones && acumuladorBarbijos > acumuladorAlcoholes)
	{
		promedioDeCompra = acumuladorBarbijos / contadorBarbijos;
		document.write("El tipo con mas producto es barbijos, con un promedio de compra de: " + promedioDeCompra + "<br>");

		if(acumuladorJabones > acumuladorAlcoholes && acumuladorJabones >= acumuladorBarbijos)
		{
			promedioDeCompra = acumuladorJabones / contadorJabones;
			document.write("El tipo con mas producto es jabones, con un promedio de compra de: " + promedioDeCompra + "<br>");
		}
		else
		{
			promedioDeCompra = acumuladorAlcoholes / contadorAlcoholes;
			document.write("El tipo con mas producto es alcohol, con un promedio de compra de: " + promedioDeCompra + "<br>");
		}
	}
	//c) Cuántas unidades de Barbijos se compraron en total
	if(contadorBarbijos > 0)
	{
		document.write("Se compraron un total de barbijos de " + acumuladorBarbijos + "<br>");
	}
	else
	{
		document.write("No se compraron barbijos <br>");
	}
}
