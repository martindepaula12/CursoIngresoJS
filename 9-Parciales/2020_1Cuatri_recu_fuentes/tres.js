function mostrar()
{
	var nombre;
	var nacionalidad;
	var sexo;
	var estadoCivil;
	var edad;
	var temperaturaCorporal;
	var respuesta = "si";
	var temperaturaMayor = 0;
	var nacionalidadDeTemperaturaMayor;
	var contadorSolterosMayoresDe17 = 0;
	var contadorMujeresViudasYSolteras = 0;
	var contadorTerceraEdadConMasDe38DeTemperatura = 0;
	var acumuladorEdadMujeresCasadas = 0;
	var contadorMujeresCasadas = 0;
	var promedioEdadMujeresCasadas;

	while(respuesta == "si"){

		nombre = prompt("ingrese nombre");

		nacionalidad = prompt("ingrese nacionalidad");

		edad = prompt("ingrese edad");
		edad = parseInt(edad);

		

		while(edad < 0){
			edad = prompt("ingrese edad correcta");
			edad = parseInt(edad);
		}
		while(isNaN(edad)){
			edad = prompt("ingrese un numero");
			edad = parseInt(edad);
		}

		sexo = prompt("ingrese sexo f/m");
		while(sexo != "f" && sexo != "m"){
			sexo =prompt("ingrese sexo correcto");
		}

		estadoCivil = prompt("ingrese estado civil: soltero, casado o viudo");

		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
			estadoCivil = prompt("ingrese estado civil correcto");
		}

		temperaturaCorporal = prompt("ingrese temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);

		
		while(temperaturaCorporal <= 0){
			temperaturaCorporal = prompt("error, ingrese una temperatura valida");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}

		while(isNaN(temperaturaCorporal)){
			temperaturaCorporal = prompt("ingrese un numero");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}

		if(temperaturaCorporal > temperaturaMayor){
			temperaturaMayor = temperaturaCorporal;
			nacionalidadDeTemperaturaMayor = nacionalidad;
			console.log("naac temp mayor " + nacionalidadDeTemperaturaMayor);
		}

		if(edad > 17 && estadoCivil == "soltero"){
			contadorSolterosMayoresDe17++;
			console.log("contador solteros mayores de 17 " + contadorSolterosMayoresDe17);
		}

		if(sexo == "f" && estadoCivil != "casado"){
			contadorMujeresViudasYSolteras++;
			console.log("contador m solt y viu" + contadorMujeresViudasYSolteras);
		}

		if(edad > 60 && temperaturaCorporal > 38){
			contadorTerceraEdadConMasDe38DeTemperatura++;
			console.log("contador 3ra edad con mas de 38 temp "+ contadorTerceraEdadConMasDe38DeTemperatura);
		}

		if(sexo == "f" && estadoCivil == "casado"){
			contadorMujeresCasadas++;
			console.log("contador mujeres casadas "+ contadorMujeresCasadas);
			acumuladorEdadMujeresCasadas = acumuladorEdadMujeresCasadas + edad;
			console.log("acum edad muj casad " + acumuladorEdadMujeresCasadas);
		}







		respuesta = prompt("desea continua si/no");

		
	}

	if(contadorMujeresCasadas != 0){
		promedioEdadMujeresCasadas = acumuladorEdadMujeresCasadas / contadorMujeresCasadas;
		promedioEdadMujeresCasadas = promedioEdadMujeresCasadas.toFixed(2);
		console.log("prom edad mukj casa " + promedioEdadMujeresCasadas);
	}

	document.write(
		"la nacionalidad de la persona con mas temperatura es: " + nacionalidadDeTemperaturaMayor +
		"<br> la cantidad de mayores 17 que estan solteros es: " + contadorSolterosMayoresDe17 + 
		"<br> la cantidad de mujeres solteras y viudas es: " + contadorMujeresViudasYSolteras +
		"<br> la cantidad de personas de la tercera edad con temperatura mayor a 38 es: "+ contadorTerceraEdadConMasDe38DeTemperatura +
		"<br> el promedio de la edad de mujeres casadas es: " + promedioEdadMujeresCasadas
	);


}
