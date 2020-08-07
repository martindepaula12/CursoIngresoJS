function mostrar()
{
	var respuesta = "si";
	var edad;
	var sexo;
	var temperatura;
	var nombre;
	var estadoCivil;
	var nombreMasTemperatura;
	var temperaturaMaxima = 0;
	var viudosMayoresDeEdad = 0;
	var hombresViudosSolteros = 0;
	var terceraEdadConMas38Temperatura = 0;
	var acumuladorEdadHombresSolteros = 0;
	var contadorHombresSolteros = 0;
	var promedioEdadHombresSolteros;

	

	while(respuesta == "si"){

		do{
			nombre = prompt("ingrese nombre")
		}while(!(isNaN(nombre)));

		do{
			edad = prompt("ingrese edad")
			edad = parseInt(edad);
		}while(edad < 0 || isNaN(edad));

		do{
			sexo = prompt("ingrese sexo f o m");

		}while(sexo != "f" && sexo != "m");

		do{
			estadoCivil = prompt("ingrese estado Civil")
		}while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");

		do{
			temperatura = prompt("ingrese temperatura");
			temperatura = parseInt(temperatura);
		}while(temperatura <= 0 || isNaN(temperatura));

		if (temperatura > temperaturaMaxima){
			nombreMasTemperatura = nombre;
			console.log("nomb mas temp " + nombreMasTemperatura);
			temperaturaMaxima = temperatura;
			console.log("temp max " + temperaturaMaxima);
		}
		
		if(edad > 17 && estadoCivil == "viudo"){
			viudosMayoresDeEdad++;
			console.log("viudos mayores " + viudosMayoresDeEdad);
		}

		if (sexo == "m" && estadoCivil != "casado"){
			hombresViudosSolteros++;
			console.log("hombres viu y sol " + hombresViudosSolteros);
		}

		if (edad > 60 && temperatura > 38){
			terceraEdadConMas38Temperatura++;
			console.log("terc edad + 38 temp " + terceraEdadConMas38Temperatura);
		}

		if (sexo == "m" && estadoCivil == "soltero"){
			contadorHombresSolteros++;
			console.log("cont homb sol " + contadorHombresSolteros);
			acumuladorEdadHombresSolteros = acumuladorEdadHombresSolteros + edad;
			console.log("acum edad homb sol " + acumuladorEdadHombresSolteros);
		}





		respuesta = prompt("desea continua si/no");
	}
	if(contadorHombresSolteros != 0){
		promedioEdadHombresSolteros = acumuladorEdadHombresSolteros / contadorHombresSolteros;

		promedioEdadHombresSolteros = promedioEdadHombresSolteros.toFixed(2);
		console.log("prom edad homb sol " + promedioEdadHombresSolteros);
	}

	}
