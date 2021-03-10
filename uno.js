/*
Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
*/
function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let puestoIngresado;
	let sueldoIngresado;
	let continuar = "si";

	let promedioProgramador;
	let promedioAnalista;
	let promedioQa;
	let contadorProgramador = 0;
	let contadorAnalista = 0;
	let contadorQa = 0;
	let sumadorProgramador = 0;
	let sumadorAnalista = 0;
	let sumadorQa = 0;

	let mayorSueldo;
	let sexoMayorSueldo;
	let banderaMayorSueldo = 0;
	
	let femeninoMayorSueldo;
	let nombreFEmeninoMAyorsueldo;
	let banderaFemenino = 0;
	
	let contadorPogramadorNobinario = 0;



	while (continuar == "si") {


		nombreIngresado = prompt("Ingrese el nombre del empleado");

		while (isNaN(nombreIngresado) == false) {
			nombreIngresado = prompt("Error# Ingrese el nombre del empleado");
		}

		edadIngresada = prompt("Ingrese la edad del empleado");
		edadIngresada = parseInt(edadIngresada);

		while (isNaN(edadIngresada) == true || edadIngresada < 18 || edadIngresada > 80) {
			edadIngresada = prompt("Error# Ingrese la edad del empleado");
			edadIngresada = parseInt(edadIngresada);
		}

		sexoIngresado = prompt("Ingrese sexo femenino - masculino- no binario");

		while (isNaN(sexoIngresado) == false || sexoIngresado != "femenino" && sexoIngresado != "masculino" && sexoIngresado != "no binario") {
			sexoIngresado = prompt("Error# Ingrese sexo femenino -masculino- no binario");
		}


		//puesto

		puestoIngresado = prompt("Ingrese puesto programador - analista- Qa");

		while (isNaN(puestoIngresado) == false || puestoIngresado != "programador" && puestoIngresado != "analista" && puestoIngresado != "Qa") {
			puestoIngresado = prompt("Error# Ingrese puesto programador -analista- Qa");
		}

		//sueldo
		sueldoIngresado = prompt("Ingrese sueldo");
		sueldoIngresado = parseInt(sueldoIngresado);

		while (isNaN(sueldoIngresado) == true || sueldoIngresado < 15000 || sueldoIngresado > 70000) {
			sueldoIngresado = prompt("Error# Ingrese sueldo");
			sueldoIngresado = parseInt(sueldoIngresado)
		}


		//a
		switch (puestoIngresado) {
			case "programador":
				contadorProgramador = contadorProgramador + 1;
				sumadorProgramador = sumadorProgramador + sueldoIngresado;

				break;

			case "analista":
				contadorAnalista = contadorAnalista + 1;
				sumadorAnalista = sumadorAnalista + sueldoIngresado;

				break;

			case "Qa":
				contadorQa = contadorQa + 1;
				sumadorQa = sumadorQa + sueldoIngresado;

				break;

		}
		//b

		if (banderaMayorSueldo == 0 || sueldoIngresado > mayorSueldo) {

			mayorSueldo = sueldoIngresado;
			sexoMayorSueldo = sexoIngresado;

			banderaMayorSueldo = 1;
		}

		//c 
		switch (sexoIngresado) {
			case "femenino":

				if (banderaFemenino == 0 || sueldoIngresado > femeninoMayorSueldo) {

					femeninoMayorSueldo = sueldoIngresado;
					nombreFEmeninoMAyorsueldo = nombreIngresado;

					banderaFemenino = 1;
				}

				break;
			//d
			case "no binario":
				if (puestoIngresado == "programador") {

					if (sueldoIngresado > 20000 || sueldoIngresado < 55000) {
						contadorPogramadorNobinario = contadorPogramadorNobinario + 1;
					}

				}

				break;
		}

		continuar = prompt("¿Desea agregar otro empleado?")

	}//fin while

	//a
	if (contadorProgramador > 0) {

		promedioProgramador = sumadorProgramador / contadorProgramador;
		console.log("El sueldo promedio para programador es " + promedioProgramador);
	} else {
		console.log("no se registran datos");
	}
	if (contadorAnalista > 0) {

		promedioAnalista = sumadorAnalista / contadorAnalista;
		console.log("El sueldo promedio para analista es " + promedioAnalista);
	} else {
		console.log("no se registran datos");
	}
	if (contadorQa > 0) {

		promedioQa = sumadorQa / contadorQa;
		console.log("el sueldo promedio para Qa es " + promedioQa);
	} else {
		console.log("no se registran datos");
	}

	//b

	if (banderaMayorSueldo > 0) {
		console.log("El sexo del que percibe el mayor sueldo es; " + sexoMayorSueldo + " con un sueldo de ; " + mayorSueldo);
	} else {
		console.log("no se registran datos");
	}

	//c

	if (banderaMayorSueldo > 1) {
		console.log("El nombre del empleado femenino con mas sueldo" + nombreFEmeninoMAyorsueldo + " con un sueldo de ;" + femeninoMayorSueldo + ".");

	} else {
		console.log("no se registran datos");
	}
	//d
	if (contadorPogramadorNobinario > 0) {
		console.log("Cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 son;" + contadorPogramadorNobinario);

	} else {
		console.log("no se registran datos");
	}
}
