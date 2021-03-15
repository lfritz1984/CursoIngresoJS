/*
Leonel Fritz

ejercicio 1

Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
function mostrar()
{
	/*alert("Esto funciona de maravilla"); //lo  realice 3 veces para ver como ejecuta con "3 alertas"
	alert("Esto funciona de maravilla 2");
	alert("Esto funciona de maravilla 3");
}*/

/*
"super chino" :
Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
TipoDeStock("Pedido","sin stock", "con stock")
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY 


a)  el NOMBRE del  mas barato de los elaborados
b)  de los Productos nacionales con stock , el promedio de precio
c)  el porcentaje de productos elaborados por sobre el total
d)  De los tipos de stock , cual tiene mas productos nacionales
*/
function mostrar()
{
	let tipoProducto;
	let nombreDelProducto;
	let importeDelProducto;
	let tipoDeStockDelProducto;
	let precedenciaDelProducto;
	let pesoDelProducto;
	let respuesta;
	let precioDelMasBaratoDeLosElaborados;
	let nombreMasBaratoDeLosElaborados;
	let contadorProductosElaborados;
	let contadorProductosNacionalesConStock;
	let contadorDeTodosLosProductos;
	let acumuladorNacionalesConStock;
	let  promedioNacionalesConStock;
	
	respuesta = "si";
	precioDelMasBaratoDeLosElaborados = 0;
	contadorProductosElaborados = 0;
	contadorProductosNacionalesConStock = 0;
	contadorDeTodosLosProductos = 0;
	acumuladorNacionalesConStock = 0;

	while(respuesta=="si")
	{
		tipoProducto = prompt("Ingrese un tipo de producto: limpieza, comestible u otros");
		tipoProducto = tipoProducto.toLowerCase();
		while(isNaN(tipoProducto) == false || tipoProducto != "limpieza" && tipoProducto != "comestible" && tipoProducto != "otros")
		{
			tipoProducto = prompt("Error, reingrese un tipo de producto valido");
		}
		nombreDelProducto = prompt("Ingrese el nombre del producto")
		nombreDelProducto = nombreDelProducto.toLowerCase();
		while(isNaN(nombreDelProducto) == false)
		{
			nombreDelProducto = prompt("Error, reingrese un nombre valido");
		}
		importeDelProducto = prompt("Ingrese el importe del producto");
		importeDelProducto = parseFloat(importeDelProducto);
		while(isNaN(importeDelProducto) == true || importeDelProducto <= 0 || importeDelProducto >1000)
		{
			importeDelProducto = prompt("Error, reingrese un importe correcto del producto");
			importeDelProducto = parseFloat(importeDelProducto);
		}
		tipoDeStockDelProducto = prompt("Ingrese un tipo de stock del producto:  pedido, sin stock o con stock");
		tipoDeStockDelProducto = tipoDeStockDelProducto.toLowerCase();
		while(isNaN(tipoDeStockDelProducto) == false)
		{
			tipoDeStockDelProducto = prompt("Error, reingrese un tipo de stock del producto");
		}
		precedenciaDelProducto = prompt("Ingrese la procedencia: importado, nacional o elaborado");
		precedenciaDelProducto = precedenciaDelProducto.toLowerCase();
		while(isNaN(precedenciaDelProducto) == false || precedenciaDelProducto != "importado" && precedenciaDelProducto != "nacional" && precedenciaDelProducto != "elaborado" )
		{
			precedenciaDelProducto = prompt("Error, reingrese una precedencia correcta");
		}
		pesoDelProducto  = prompt("ingrese el peso del producto, no mayor a 30 kilos.");
		pesoDelProducto = parseFloat(pesoDelProducto);
		while(isNaN(pesoDelProducto) == true || pesoDelProducto < 0 || pesoDelProducto > 30)
		{
			pesoDelProducto = prompt("Error, reingrese un peso valido");
			pesoDelProducto = parseFloat(pesoDelProducto);
		}
		switch(precedenciaDelProducto)
		{
			case "elaborado":
				if(contadorProductosElaborados == 0 || importeDelProducto < precioDelMasBaratoDeLosElaborados)
				{
					precioDelMasBaratoDeLosElaborados = importeDelProducto;
					nombreMasBaratoDeLosElaborados = nombreDelProducto;
				}
				contadorProductosElaborados ++;
				break;
			case "nacional":
				if(tipoDeStockDelProducto == "con stock")
				{
					contadorProductosNacionalesConStock ++;
					acumuladorNacionalesConStock = acumuladorNacionalesConStock + importeDelProducto;
				}
				break;
		}

		respuesta = prompt("Desea continuar ingresando productos?");
		respuesta = respuesta.toLocaleLowerCase();

	}
	promedioNacionalesConStock = acumuladorNacionalesConStock / contadorProductosNacionalesConStock;
	if(contadorProductosElaborados > 0)
	{
		document.write(" El nombre del mas barato de los elaborados es: " + nombreMasBaratoDeLosElaborados + "<br");
	}
	else
	{
		document.write("No hay productos elaborados ingresados" + "<br>");
	}
	if(contadorProductosNacionalesConStock > 0)
	{
		document.write("El promedio de productos nacionales con stock es: " + promedioNacionalesConStock + "<br>");
	}
	else
	{
	 document.write("No hay productos Nacionales con stock <br>");
	}
}