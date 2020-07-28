function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado){
		case "Bariloche":
			alert(" hace frio");
			break;
		case "Cataratas":
			alert("hace calor");
			break;
		case "Mar del plata":
			alert("a veces hace calor y a veces hace frio");
			break;
		default:
			alert("hace frio");
			break;
							
	}

}//FIN DE LA FUNCIÓN