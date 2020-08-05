function mostrar()
{

	var repeticiones = prompt("ingrese el número de repeticiones");
	mensaje = "utn fra";

	while(isNaN(repeticiones)){
		repeticiones = prompt("error ingrese un numero");
	}	
	while(repeticiones <= 0){
		repeticiones = prompt("el numero debe ser mayor a 0") 
	}
	
	for(var contadorRepeticiones = 0; contadorRepeticiones < repeticiones;contadorRepeticiones++){
		document.write(mensaje + "<br>");
	}
 	

}//FIN DE LA FUNCIÓN