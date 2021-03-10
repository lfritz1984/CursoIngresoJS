/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
function mostrar()
*/
{
  let tipoDeProducto;
  let CantidadDeBolsas;
  let importetotalBruto;
  let importeTotalConDescuento;
  let tipoConMasCantidadBolsas;
  let tipoMasCaro;

  while(respuesta == "si")
	{
		nombre = prompt("Ingresar el nombre del nombre");
		nombre = nombre.toUpperCase();
		while(isNaN(nombre) == false)
		{
			nombre = prompt("Error, ingresar un nombre valido");
			nombre = nombre.toUpperCase();
		}
		xxx = prompt("Ingrese xxx");
		xxx = xxx.toUpperCase();
		while(isNaN(xxx) == false || xxx != "xxx" && xxx != "xxx" && xxx != "xxx")
		{
			xxx = prompt("Error, ingrese ");
			xxx = xxx.toUpperCase();
		}
		edad = prompt("Ingrese la edad xxxx");
		edad = parseInt(edad);
		while(isNaN(edad) == true || edad < 18)
		{
			edad = prompt("Error, ingrese xxx");
			edad = parseInt(edad);
		}
		xxx = prompt("Ingrese xxx");
		xxx = parseFloat(xxx);
		while(isNaN(xxx) == true || xxx > 36.6)
		{
			xxx = prompt("Error, ingrese xxx");
			xxx = parseFloat(xxx);
		}
		sexo = prompt("Ingrese el sexo del pasajero: FEMENINO, MASCULINO Ó NO BINARIO");
		sexo = sexo.toUpperCase();
		while(isNaN(sexo) == false || sexo != "FEMENINO" && sexo != "MASCULINO" && sexo != "NO BINARIO")
		{
			sexo = prompt("Error, ingrese un sexo valido");
			sexo = sexo.toUpperCase();
		}
		estado = prompt("Ingrese el estado civil del pasajero: SOLTERO, CASADO, DIVORCIADO Ó VIUDO");
		estado = estado.toUpperCase();
		while(isNaN(estado) == false || estado != "SOLTERO" && estado != "CASADO" && estado != "DIVORCIADO" && estado != "VIUDO")
		{
			estado = prompt("Error. ingrese un estado civil valido");
            estado = estado.toUpperCase();
		}

        respuesta = prompt("desea seguir ingresando xxx?, responda con si ó no");
		respuesta = respuesta.toLowerCase();        

    }
}
