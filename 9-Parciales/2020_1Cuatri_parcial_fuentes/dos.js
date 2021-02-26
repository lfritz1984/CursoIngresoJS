/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  let producto;
  let cantidadDeBolsas;
  let precioPorBolsa;
  let precioBrutoTotal;
  let precioFinalconDescuento;
  let descuento;
  let respuesta;

  let acumuladorBolsasArena;
  let acumuladorBolsasCal;
  let acumuladorBolsasCemento;
  let acumuladorTotaldeBolsas;
  let precioBrutoArena;
  let precioBrutoCal;
  let precioBrutoCemento;

  let mayorCantidadDeBolsas;
  let tipoConMasCantidadDeBolsas;
  let tipoMasCaro;

  respuesta = "si";
  banderaArena = true;
  banderaCal = true;
  banderaCemento= true;
 

  acumuladorBolsasArena = 0;
  acumuladorBolsasCal = 0;
  acumuladorBolsasCemento = 0;
  acumuladorTotaldeBolsas = 0;
  precioBrutoArena = 0;
  precioBrutoCal = 0;
  precioBrutoCemento = 0;
  tipoConMasCantidadDeBolsas = 0;

  while(respuesta == "si")
  {
    producto = prompt('Ingrese un tipo de producto: "arena", "cal" ó "cemento"');
    producto = producto.toLocaleLowerCase();
    while(isNaN(producto) == false || (producto != "arena" && producto != "cal" && producto != "cemento"))
    {
      producto = prompt("Error, reingrese de nuevo el producto");
    }

    cantidadDeBolsas = prompt("Ingrese la cantidad de bolsas que quiere");
    cantidadDeBolsas = parseInt(cantidadDeBolsas);
    while(isNaN(cantidadDeBolsas) == true || cantidadDeBolsas < 1)
    {
      cantidadDeBolsas = prompt("Error, reingrese de nuevo la cantidad de bolsas");
    }

    precioPorBolsa = prompt("Ingrese el precio por unidad de bolsa");
    precioPorBolsa = parseFloat(precioPorBolsa);
    while(isNaN(precioPorBolsa) == true || precioPorBolsa <= 0)
    {
      precioPorBolsa = prompt("Error, ingresar un valor valido de precio");
    }
    switch(producto)
    {
      case "arena":
        acumuladorBolsasDeArena = acumuladorBolsasArena + cantidadDeBolsas;
        precioBrutoArena = acumuladorBolsasArena * precioPorBolsa;
        break;
      case "cal":
        acumuladorDeCal = acumuladorDeCal + cantidadDeBolsas;
        precioBrutoCal = acumuladorBolsasCal * precioPorBolsa;
        break;
       case "cemento":
         acumuladorBolsasCemento = acumuladorBolsasCemento + cantidadDeBolsas;
         precioBrutoCemento = acumuladorBolsasCemento * precioPorBolsa;
         break;
    }
    if(tipoConMasCantidadDeBolsas < cantidadDeBolsas)
    {
      mayorCantidadDeBolsas = cantidadDeBolsas
    }

    respuesta = prompt("¿Desea seguir ingresando productos?, responda con: si ó no");
    respuesta = respuesta.toLocaleLowerCase();
  }
  
  acumuladorTotaldeBolsas = acumuladorBolsasDeArena + acumuladorBolsasArena + acumuladorBolsasCemento;

  //a) El importe total a pagar , bruto sin descuento y...
   precioBrutoTotal = acumuladorBolsasArena + acumuladorBolsasCal + acumuladorBolsasCemento;

  //b) el importe total a pagar con descuento(solo si corresponde)
  if(acumuladorTotaldeBolsas > 10 && acumuladorTotaldeBolsas < 31)
  {
    descuento = 15;
  }
  else
  {
    if(acumuladorTotaldeBolsas > 30)
    {
      descuento = 25;
    }
  }
   precioFinalconDescuento = precioFinalconDescuento - (precioBrutoTotal * descuento / 100);

   //d) Informar el tipo con mas cantidad de bolsas.

   

   //f) El tipo mas caro

}
// https://www.onlinegdb.com/rkePvnHMu