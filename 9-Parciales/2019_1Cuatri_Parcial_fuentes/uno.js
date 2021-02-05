
function mostrar()
{
    let ladoA;
    let ladoB;
    let ladoC;
    let perimetro;

    ladoA = prompt("Ingrese el valor del lado A de su triangulo.");
    ladoB = prompt("Ingrese el valor del lado B de su triangulo.");
    ladoC = prompt("Ingrese el valor del lado C de su triangulo.");

    ladoA = parseInt(ladoA);
    ladoB = parseInt(ladoB);
    ladoC = parseInt(ladoC);

    perimetro = ladoA + ladoB + ladoC;

    alert("El perimetro de su triangulo es: " + perimetro + ".");
}
