/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado = 1;
	var sumaNegativos=0;
	var sumaPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;


	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		console.log(numeroIngresado);
		
		while(isNaN(numeroIngresado)){
			numeroIngresado = prompt("error, no es un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}
			 
		 

			if(numeroIngresado < 0){
				contadorNegativos++;
				console.log("contador negativos " + contadorNegativos);
				sumaNegativos = sumaNegativos + numeroIngresado;
				console.log("suma negativos" + sumaNegativos);
			}
			else if(numeroIngresado == 0){
				contadorCeros++;
				console.log("contador ceros" + contadorCeros);
			} 
			else {
				contadorPositivos++;
				console.log("contador positivos" + contadorPositivos);
				sumaPositivos = sumaPositivos + numeroIngresado;
				console.log("suma positivos" + sumaPositivos);
			}
			 

			if(numeroIngresado % 2 === 0){
				contadorPares++;
				console.log("contador pares" + contadorPares);
			}
			
		
		respuesta=prompt("desea continuar?");
	 
	}//fin del while
	if(contadorPositivos != 0){
	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioPositivos = promedioPositivos.toFixed(2);
	}

	 if(contadorNegativos != 0){ 
	promedioNegativos = sumaNegativos / contadorNegativos;
	promedioNegativos = promedioNegativos.toFixed(2);
	}


	diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;
	  // <br> salto de linea
	document.write(
	"la suma de negativos es : "+ sumaNegativos + "<br>" +
	" la suma de los positivos es : "+ sumaPositivos +
	" la cantidad de positivos es : " + contadorPositivos + 
	" la cantidad de negativos es : " + contadorNegativos + 
	" la cantidad de ceros es : " + contadorCeros + 
	" la cantidad de pares es : " + contadorPares + 
	" el prompedio de los positivos es : "+ promedioPositivos + 
	" el promedio de los negativos es : " + promedioNegativos + 
	" la diferencia entre positivos y negativos es : " + diferenciaPositivosNegativos
	);
}//FIN DE LA FUNCIÓN