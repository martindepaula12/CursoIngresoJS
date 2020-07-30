/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var numero;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta == "si"){

		numero = prompt("ingrese un numero")
		numero = parseInt(numero);

	while(isNaN(numero)){
		numero = prompt("ingrese un numero")
		numero = parseInt(numero);
	}	

		respuesta = prompt("desea continuar si/no");

		
	}
	

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN