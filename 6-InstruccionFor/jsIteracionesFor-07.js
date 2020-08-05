function mostrar()
{
	var contadorDivisiores = 0;
	var numero = prompt("ingrese un numero");

	while(isNaN(numero)){
		numero = prompt("error ingrese un numero");
	}	
	while(numero <= 0){
		numero = prompt("el numero debe ser mayor a 0") 
	}

	for(var contador = 0; contador<= numero ;contador++){
		if(numero % contador == 0){
			console.log(contador);
			contadorDivisiores++;

	
		}
		
	}
	 	

	console.log(contadorDivisiores);

}//FIN DE LA FUNCIÓN