function mostrar()
{
  let nombre1;
  let nombre2;
  let peso1;
  let peso2;
  let pesoDelos2;
  let promdio;

  alert("¡BIENVENIDOS! a continuación haga click en el botón ACEPTAR y luego ingrese los datos solicitados.");

  nombre1 = prompt("Ingrese el NOMBRE de la primera pareja.");
  nombre2 = prompt("Ingrese el NOMBRE de la segunda pareja.");
  peso1 = prompt("Ingrese el PESO de la primera pareja");
  peso2 = prompt("Ingrese el PESO de la segunda pareja");

  peso1 = parseFloat(peso1);
  peso2 = parseFloat(peso2);

  pesoDelos2 = peso1 + peso2;

  promedio = pesoDelos2 / 2;
  promedio = promedio.toFixed(2);

  alert("Ustedes se llaman " + nombre1 + " y " + nombre2 + ", pesan " + peso1 + " y " + peso2 + " kilos. Que sumados son " + pesoDelos2 + " kilos y el promedio de peso es " + promedio);
}