function mostrar()
{
	var numero; 
	var contadorPares=0;

	numero = prompt("ingrese un numero");

	while(isNaN(numero)){
		numero = prompt("error ingrese un numero");
	}	
	while(numero <= 0){
		numero = prompt("el numero debe ser mayor a 0") 
	}

	for(var contador = 2;contador <= numero;contador+= 2){
		contadorPares++;
		console.log(contador);
	}
	console.log("con pares " + contadorPares)

}//FIN DE LA FUNCIÓN