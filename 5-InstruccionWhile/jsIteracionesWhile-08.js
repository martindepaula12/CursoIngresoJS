/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var numeroIngresado;
	var respuesta;
	
	var acumuladorPositivos;
	var acumuladorNegativos;
	contador=0;
	acumuladorNegativos = 1;
	acumuladorPositivos =  0;
	respuesta='si';

	while(respuesta == "si"){
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseFloat(numeroIngresado);
		while(isNaN(numeroIngresado)){
			numeroIngresado= prompt("ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}
		if(numeroIngresado>=0){
			acumuladorPositivos = acumuladorPositivos + numeroIngresado;
		}else{
			acumuladorNegativos = acumuladorNegativos * numeroIngresado;
		}

		contador++;
		respuesta = prompt("desea continuar si/no ?");
	}
	

	txtIdSuma.value=acumuladorPositivos;
	txtIdProducto.value=acumuladorNegativos;

}//FIN DE LA FUNCIÓN