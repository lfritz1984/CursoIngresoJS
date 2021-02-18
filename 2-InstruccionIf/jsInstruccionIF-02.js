function mostrar()
{
	let nombre;
	let peso;
	let altura;
	let imc;

	nombre = document.getElementById("txtIdEdad").value;
	peso = prompt("Ingrese su peso el Kg.");
	peso = parseFloat(peso);
	altura = prompt("Ingrese su altura en metros.");
	altura = parseFloat(altura);

	imc = peso / (altura * altura);
	imc = imc.toFixed(2);

	if(imc < 18.5)
	{
		alert(nombre + " usted es una persona con bajo peso");
	}
	else
	{
		if(imc > 18.49 && imc < 25)
		{
			alert(nombre + " usted es una persona con peso normal");
		}
		else
		{
			if(imc < 30)
			{
				alert(nombre + " usted es una persona con preobesidad");
			}
			else
			{
				if(imc < 35)
				{
					alert(nombre + " usted es una persona con obesidad I");
				}
				else
				{
					if(imc < 40)
					{
						alert(nombre + " usted es una persona con obesidad II");
					}
					else
					{
						alert(nombre + " usted es una persona con obesidad III");
					}
				}
			}
		}
	}

	console.log(imc);

}