function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch(mesDelAño){
		case "Febrero":
			alert("este mes tiene 28 dias");
			break;
		case "Junio":
		case "Septiembre":
		case "Abril":
		case "Noviembre":
			alert("este mes tiene 30 dias");
			break;
		default:
			alert("este mes tiene 31 dias");
			break;					
	}
	
	



}//FIN DE LA FUNCIÓN