function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado){
		case "Bariloche":
			alert(" se encuentra en el sur");
			break;
		case "Cataratas":
			alert("se encuentra en el norte");
			break;
		case "Mar del plata":
			alert("se encuentra en el este");
			break;
		default:
			alert("se encuentra en el sur");
			break;
							
	}
}//FIN DE LA FUNCIÓN