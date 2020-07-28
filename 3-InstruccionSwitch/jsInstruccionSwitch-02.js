function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch(mesDelAño){
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno");
			break;
		default:
			alert("ya paso el invierno");
			break;					

	}




}//FIN DE LA FUNCIÓN