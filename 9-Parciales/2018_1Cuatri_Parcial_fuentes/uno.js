
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho = prompt("Ingrese los metros de ancho de su lote");
    largo = prompt("Ingrese los metros de largo de su lote");

    ancho = parseFloat(ancho);
    largo = parseFloat(largo);

    ancho = 2 * ancho;
    largo = 2 * largo;
    
    perimetro = ancho + largo;

    alert("El perimeto de su lote es de: " + perimetro + " metros.");
} 