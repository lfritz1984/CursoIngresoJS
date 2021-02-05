function mostrar()
{
    let precio;
    let porcenDescuento;
    let descuento;
    let precioFinal;

    precio = prompt("Ingrese importe a descontar");
    porcenDescuento = prompt("Ingrese porcentaje que desea realizar");

    precio = parseFloat(precio);
    porcenDescuento = parseFloat(porcenDescuento);

    descuento = (precio * porcenDescuento) / 100;
    precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinal;
}