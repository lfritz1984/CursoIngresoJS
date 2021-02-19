/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidad;
    let valor;
    let marca;
    let precioSinDescuento;
    let descuento;
    let precioConDescuento;
    let iibb;
    
    cantidad = document.getElementById("txtIdCantidad").value;
    cantidad = parseInt(cantidad);
    valor = 35;
    marca = document.getElementById("Marca").value;

    precioSinDescuento = cantidad * valor;

    if (cantidad > 5)
    {
        descuento = 50;
    }
    else
    {
        if (cantidad == 5)
        {
            if (marca == "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
        }
        else
        {
            if (cantidad == 4)
            {
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    descuento = 25;
                }
                else
                {
                descuento = 20;
                }
            }
            else
            {
                if (cantidad == 3 && marca == "ArgentinaLuz")
                {
                    descuento = 15;
                }
                else
                {
                    if (marca == "FelipeLamparas")
                    {
                        descuento = 10;
                    }
                    else
                    {
                        descuento = 5;
                    }
                }
            }
            
        }
              
    }
    precioConDescuento = precioSinDescuento - (precioSinDescuento * descuento / 100);

    if (precioConDescuento > 120)
    {
        iibb = precioConDescuento * 10 /100;
        precioConDescuento = precioConDescuento + iibb;
        alert("IIBB Usted pago " + precioConDescuento + ", siendo " + iibb + " el impuesto que se pagó.");
    }

    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
}
/*
function CalcularSuma()
{
    let numero1;
    let numero2;
    let numero3;
    let numero4;
    let numero5;
    let numero6;
    let numero7;
    let numero8;
    let numero9;
    let numero10;

    let total;

    numero1 = prompt("Ingrese el numero1");
    numero2 = prompt("Ingrese el numero2");
    numero3 = prompt("Ingrese el numero3");
    numero4 = prompt("Ingrese el numero4");
    numero5 = prompt("Ingrese el numero5");
    numero6 = prompt("Ingrese el numero6");
    numero7 = prompt("Ingrese el numero7");
    numero8 = prompt("Ingrese el numero8");
    numero9 = prompt("Ingrese el numero9");
    numero10 = prompt("Ingrese el numero10");


    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    numero3 = parseFloat(numero3);
    numero4 = parseFloat(numero4);
    numero5 = parseFloat(numero5);
    numero6 = parseFloat(numero6);
    numero7 = parseFloat(numero7);
    numero8 = parseFloat(numero8);
    numero9 = parseFloat(numero9);
    numero10 = parseFloat(numero10);

    total = numero1 + numero2 + numero3 + numero4 + numero5 + numero6 + numero7 + numero8 + numero9 + numero10;

    alert("La suma es: " + total);
}
*/