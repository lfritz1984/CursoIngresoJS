function mostrar()
{
  let producto;
  let cantidadDeBolsas;
  let precioPorBolsa;
  let precioBrutoTotal;
  let precioFinalconDescuento;
  let respuesta;

  let acumuladorBolsasDeArena;
  let acumuladorBolsasCal;
  let acumuladorBolsasCemento;
  let acumuladorTotaldeBolsas;
  let precioBrutoArena;
  let precioBrutoCal;
  let precioBrutoCemento;
  
  let tipoConMasCantidadDeBolsas;
  let mayorCantidadDeBolsas;
  let tipoMasCaro;
  let bolsaMasCara;

  acumuladorBolsasDeArena = 0;
  acumuladorBolsasCal = 0;
  acumuladorBolsasCemento = 0;
  acumuladorTotaldeBolsas = 0;
  precioBrutoArena = 0;
  precioBrutoCal = 0;
  precioBrutoCemento = 0;
  bolsaMasCara = 0;
  mayorCantidadDeBolsas = 0;
  respuesta = "si";

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
        acumuladorBolsasDeArena = acumuladorBolsasDeArena + cantidadDeBolsas;
        precioBrutoArena = acumuladorBolsasDeArena * precioPorBolsa;
        break;
      case "cal":
        acumuladorBolsasCal = acumuladorBolsasCal + cantidadDeBolsas;
        precioBrutoCal = acumuladorBolsasCal * precioPorBolsa;
        break;
       case "cemento":
         acumuladorBolsasCemento = acumuladorBolsasCemento + cantidadDeBolsas;
         precioBrutoCemento = acumuladorBolsasCemento * precioPorBolsa;
         break;
    }
    if(mayorCantidadDeBolsas < cantidadDeBolsas)
    {
      mayorCantidadDeBolsas = cantidadDeBolsas;
      tipoConMasCantidadDeBolsas = producto;
    }
    if(bolsaMasCara < precioPorBolsa)
    {
      bolsaMasCara = precioPorBolsa;
      tipoMasCaro = producto;
    }
    respuesta = prompt("¿Desea seguir ingresando productos?, responda con: si ó no");
    respuesta = respuesta.toLocaleLowerCase();
  }
  acumuladorTotaldeBolsas = acumuladorBolsasDeArena + acumuladorBolsasCal + acumuladorBolsasCemento;
  precioBrutoTotal = precioBrutoArena + precioBrutoCal + precioBrutoCemento;
  document.write("Su total en bruto es: " + precioBrutoTotal + "<br>");
  if(acumuladorTotaldeBolsas > 10 && acumuladorTotaldeBolsas < 31)
  {
    precioFinalconDescuento = precioBrutoTotal * 0.85;
    document.write("El importe a pagar con descuento es: " + precioFinalconDescuento + "<br>");
  }
  else
  {
    if(acumuladorTotaldeBolsas > 30)
    {
      precioFinalconDescuento = precioBrutoTotal * 0.75;
      document.write("El importe a pagar con descuento es: " + precioFinalconDescuento + "<br>");
    }
  }
  document.write("El tipo con mas cantidad de bolsas es: " + tipoConMasCantidadDeBolsas + "<br>");
  document.write("El tipo mas caro es: " + tipoMasCaro + "<br>");
}




/*
/* MAGALI GARCIA
 Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

X) Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar. 
X) Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar. 
X)  a) El importe total a pagar , bruto sin descuento y... 
X)  b) el importe total a pagar con descuento(solo si corresponde)
X)  d) Informar el tipo con mas cantidad de bolsas.
X)  f) El tipo mas caro

function mostrar()
{
    var ingresarOtroProducto;
    var tipoProducto;
    var cantidadDeBolsas;
    var acumuladorTotalDeBolsas;
    var acumuladorAPagarBruto;
    var precioPorBolsa;
    var totalAPagarBruto;
    var totalAPagarConDescuento;
    var mayorCantidadDeBolsas;
    var tipoMayorCantidadDeBolsas;
    var tipoMasCaro;
    var precioDelMasCaro;


    acumuladorTotalDeBolsas = 0;
    acumuladorAPagarBruto = 0;
    precioDelMasCaro = 0;
    tipoMayorCantidadDeBolsas = 0;

    ingresarOtroProducto = "si";
    while (ingresarOtroProducto == "si") { //INGRESA DATOS HASTA QUE QUIERA
        tipoProducto = prompt("Ingrese el tipo del producto: ARENA, CAL O CEMENTO:").toLowerCase();
        while (tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento") {
            tipoProducto = prompt("ERROR!. El tipo del producto debe ser: ARENA, CAL O CEMENTO:").toLowerCase();
        }

        cantidadDeBolsas = prompt("Ingrese la cantidad de bolsas");
        cantidadDeBolsas = parseInt(cantidadDeBolsas);
        while (isNaN(cantidadDeBolsas) == true) {
            cantidadDeBolsas = prompt("ERROR! Ingrese en números la cantidad de bolsas que desea: ");
        }
        
        acumuladorTotalDeBolsas = acumuladorTotalDeBolsas + cantidadDeBolsas;

        precioPorBolsa = prompt("Ingrese el precio por bolsas");
        precioPorBolsa = parseInt(precioPorBolsa);
        while (isNaN(precioPorBolsa) == true || precioPorBolsa < 0) {
            precioPorBolsa = prompt("ERROR! Ingrese en números el precio por bolsa: ");
        }
            
        totalAPagarBruto = precioPorBolsa * cantidadDeBolsas; //TOTAL BRUTO POR PRODUCTO
        acumuladorAPagarBruto = acumuladorAPagarBruto + totalAPagarBruto; //TOTAL BRUTO POR COMPRA
         //tipo con mas cantidad de bolsas
        if(tipoMayorCantidadDeBolsas < cantidadDeBolsas){
            mayorCantidadDeBolsas = cantidadDeBolsas; 
            tipoMayorCantidadDeBolsas = tipoProducto;
        }
        //El tipo mas caro
        if(precioPorBolsa > precioDelMasCaro){
            precioDelMasCaro = precioPorBolsa;
            tipoMasCaro = tipoProducto;
        }
        //MODIFICO VARIABLE DE CONTROL
        ingresarOtroProducto = prompt("Desea comprar otro producto? Responda Si o No: ").toLowerCase();
        while (ingresarOtroProducto != "si" && ingresarOtroProducto != "no") {
            ingresarOtroProducto = prompt("ERROR! Responda Si o No: ").toLowerCase();
        }
    }//FIN WHILE INGRESO DE PRODUCTOS

    if(acumuladorTotalDeBolsas > 30){   // DESCUENTO SI SON MAS DE 30 BOLSAS
            totalAPagarConDescuento = totalAPagarBruto * 25 / 100;
            document.write("El importe con decuento es: "+totalAPagarConDescuento+"<br>");
    } else {
        if(acumuladorTotalDeBolsas > 10 && acumuladorTotalDeBolsas < 31){ // SI SON  MAS DE 10 PERO MENOS DE 30
        totalAPagarConDescuento = totalAPagarBruto * 15 / 100;
        document.write("El importe con decuento es: "+totalAPagarConDescuento+"<br>");
        }else{
            document.write("El importe total es: "+totalAPagarBruto+ "<br>"); // MENOS DE 10 BOLSAS
        }
    }
    document.write("El tipo con mas cantidad de bolsas es: "+tipoMayorCantidadDeBolsas+"<br>");
    document.write("El tipo más caro es: "+tipoMasCaro);
}// FIN DE LA FUNCION
*/