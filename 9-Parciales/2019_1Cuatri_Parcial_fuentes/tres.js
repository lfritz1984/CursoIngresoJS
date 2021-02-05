function mostrar()
{
    let precio;
    let porcenDescuento;
    let descuento;
    let precioFinal;

    precio = prompt("Ingrese el precio a descontar");
    porcenDescuento = prompt("Ingrese el porcentaje de descuento que quiere");

    precio = parseFloat(precio);
    porcenDescuento = parseFloat(porcenDescuento);

    descuento = (precio * porcenDescuento) / 100;
    precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinal;
}
