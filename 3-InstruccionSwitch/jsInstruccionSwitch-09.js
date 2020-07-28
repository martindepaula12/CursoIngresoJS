function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var precioBase = 15000;
	var descuento;
	var aumento;
	aumento = parseFloat(aumento);
	var precioConDescuento;
	var precioConAumento;

	
	
	
	switch(estacionIngresada + destinoIngresado){
		case "Invierno" + "Bariloche":
			aumento = precioBase * 0.2;
			precioConAumento = precioBase + aumento;
			alert("el precio en invierno es de " + precioConAumento);
			break;

		case "Invierno" + "Cataratas":
		case "Invierno" + "Cordoba":
			descuento = precioBase * 0.1
			precioConDescuento = precioBase - descuento;
			alert("el precio para invierno es de " + precioConDescuento);
			break;
		case "Invierno" + "Mar del plata":
			descuento = precioBase * 0.2;
			precioConDescuento = precioBase - descuento;
			alert("el precio para invierno es de " + precioConDescuento);
			break;

		case "Verano" + "Bariloche":
			descuento = precioBase * 0.2;
			precioConDescuento = precioBase - descuento;
			alert("el precio en verano es de " + precioConDescuento);
			break;

		case "Verano" + "Cataratas":
		case "Verano" + "Cordoba":
			aumento = precioBase * 0.1;
				precioConAumento = precioBase + aumento;
			alert("el precio en verano es de " + precioConAumento);
			break;

		case "Verano" + "Mar del plata":
			aumento = precioBase * 0.2;
			precioConAumento = precioBase + aumento;
			alert("el precio en verano es de " + precioConAumento);
			break;

		case "Otoño" + "Cordoba":
			alert("el precio en otoño es de " + precioBase);
			break;

		case "Primavera" + "Cordoba":
			alert("el precio en primavera es de " + precioBase);
			break;

		default:
			aumento = precioBase * 0.1;
				precioConAumento = precioBase + aumento;
			alert("el precio es de " + precioConAumento);
			break;		

	
	}


}//FIN DE LA FUNCIÓN