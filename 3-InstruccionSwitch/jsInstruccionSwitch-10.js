function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;

	switch(estacionIngresada){
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche":
					alert("se viaja");
					break;
				default:
				alert("No se viaja");
				break;	
			}
			break;
		case "Verano":
			switch(destinoIngresado){
				case "Mar del plata":
				case "Cataratas":
					alert("se viaja");
					break;	
				default:
					alert("no se viaja");
					break;	
			}
			break;	
		case "Primavera":
			switch (destinoIngresado){
				case "Bariloche":
					alert("No se viaja");
					break;
				default:
					alert("se viaja");
					break;	
			}
			break;
		default:
			alert("se viaja");
			break;		
	}


}//FIN DE LA FUNCIÓN