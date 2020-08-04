/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero= 0;
	respuesta='si';
	while(respuesta=="si")
	{	
		
		do {
		numeroIngresado = prompt(" ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
		}while(isNaN(numeroIngresado));

		if(banderaDelPrimero == 0){
			
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero++;
	 } else if(numeroIngresado > numeroMaximo){
		 numeroMaximo = numeroIngresado;
		 console.log("maximo " + numeroMaximo );
	 } 
		if(numeroIngresado < numeroMinimo){
			numeroMinimo = numeroIngresado;
			console.log("minimi " + numeroMinimo);
		}
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
}//FIN DE LA FUNCIÓN