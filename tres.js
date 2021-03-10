/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente,
cantidad de lamparas ,
marca (FelipeLamparas - ArgentinaLuz -Illuminatis),
precio por unidad,
precio total de esa compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un 
descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades, 
el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,
la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
*/
function mostrar() {
	let continuar = "si";
	let nombreIngresado;
	let cantidadLamparas;
	let marca;
	let precioUnidad;
	let precioTotal;

	while (continuar == "si") {
		nombreIngresado = prompt("Ingrese el nombre del cliente");

		while (isNaN(nombreIngresado) == false) {
			nombreIngresado = prompt("Error# Ingrese el nombre del cliente");
		}

		cantidadLamparas = prompt("Ingrese la cantidad de lamparas");
		cantidadLamparas = parseInt(cantidadLamparas);

		while (isNaN(cantidadLamparas) == true || cantidadLamparas < 0) {
			cantidadLamparas = prompt("Error# Ingrese una cantidad de lamparas");
			cantidadLamparas = parseInt(cantidadLamparas)
		}

		marca = prompt("Ingrese la marca FelipeLamparas - ArgentinaLuz -Illuminatis");

		while (isNaN(marca) == false) {
			marca = prompt("Error# Ingrese la marca FelipeLamparas - ArgentinaLuz -Illuminatis");
		}


		precioUnidad = prompt("Ingrese el precio");
		precioUnidad = parseInt(precioUnidad);

		while (isNaN(precioUnidad) == true || precioUnidad < 0) {
			precioUnidad = prompt("Error# Ingrese el precio");
			precioUnidad = parseInt(precioUnidad)
		}

		







	}//while




}
