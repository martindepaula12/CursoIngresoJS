function probarEjercicio()
{
	
	var nombreAlumno;
	var carrera;
	var estadoCarrera;
	var sexo;
	var edad;
	var nota;
	var respuesta = "si";
	var contadorAlumnos = 0;
	var contadorMujeres =0;
	var edadMayor = 0;
	var sexoMayor;
	var nombreMayor;
	var contadorAlumnosNoBinarios = 0;
	var acumuladorNotasAlumnosFinalizantes = 0;
	var contadorAlumnosFinalizados = 0;
	var promedioNotaAlumnosFinalizados;
	var notaMejor = 0;
	var nombreMejor;
	var estadoMejor;
	var contadorDG=0;
	var contadorPR=0;
	var contadorPS=0;
	var carreraConMasAlumnos;

	
	



	while(respuesta == "si"){
		nombreAlumno = prompt("ingrese su nombre");
		carrera = prompt("ingrese su carrera: Programacion, psicologia o diseño grafico");

		while(carrera != "programacion" && carrera != "psicologia" && carrera != "diseño grafico"){
			carrera = prompt("ingrese carrera correcta");
		}
		estadoCarrera = prompt("ingrese estado de carrera: en curso, abandono o finalizado");
		while(estadoCarrera != "en curso" && estadoCarrera != "abandono" && estadoCarrera != "finalizado"){
			estadoCarrera = prompt("ingrese estado correcto");
		}
		sexo = prompt("ingrese sexo : F, M o NB");
		while(sexo != "F" && sexo != "M" && sexo != "NB"){
			sexo = prompt("ingrese sexo correcto");
		
		}
		if (sexo == "F"){
			contadorMujeres++;
		}
		if (sexo == "NB"){
			contadorAlumnosNoBinarios++;
		}
		edad = prompt("ingrese edad");
		while(edad < 17){
			edad = prompt("ingrese edad mayor a 18");
		}
		nota = prompt("ingrese nota entre 1 y 10");
		nota = parseInt(nota);
		while(nota <0 ||  nota >10){
			nota = prompt("ingrese nota correcta");
			nota = parseInt(nota);
			
		}
		if(estadoCarrera == "finalizado"){
			contadorAlumnosFinalizados++;
			acumuladorNotasAlumnosFinalizantes = acumuladorNotasAlumnosFinalizantes + nota;
			console.log ("acumulador" + acumuladorNotasAlumnosFinalizantes);
		}

		contadorAlumnos++;

		if (edad > edadMayor && carrera == "psicologia"){
			edadMayor = edad;
			nombreMayor = nombreAlumno;
			sexoMayor = sexo;
		}

		if(nota > notaMejor && carrera == "psicologia" && sexo == "NB"){
			notaMejor = nota;
			nombreMejor = nombreAlumno;
			estadoMejor = estadoCarrera;

		}
		if (carrera == "programacion"){
			contadorPR++;
		}
		if(carrera == "psicologia"){
			contadorPS++;
		} 
		if(carrera == "diseño grafico"){
			contadorDG++;
		}

		
		
		respuesta = prompt("desea continuar");
		
	}

	
	if(contadorDG > contadorPR && contadorDG > contadorPS){
		carreraConMasAlumnos = "Diseño grafico";
	} else if(contadorPR > contadorDG && contadorPR > contadorPS){
		carreraConMasAlumnos = "Programacion";
	} else if(contadorPS > contadorDG && contadorPS > contadorPR){
		carreraConMasAlumnos = "psicologia";
	}
	
/*
	if(contadorPR > contadorDG){
		if(contadorPR > contadorPS){
			carreraConMasAlumnos = "programacion";
		}else{
			carreraConMasAlumnos = "psicologia";
		}

	}else{
		carreraConMasAlumnos = "diseño gráfico";
	}
*/
	


	 promedioNotaAlumnosFinalizados = acumuladorNotasAlumnosFinalizantes / contadorAlumnosFinalizados;	
	 document.write("la cantidad total de alumnos es " + contadorAlumnos+
	  " la cantidad de mujeres es " + contadorMujeres +
	   "la cantidad de alumnos no binarios es de " + contadorAlumnosNoBinarios +
	   "el promedio de las notas de los alumnos que finalizaron es " + promedioNotaAlumnosFinalizados +
	    "el nombre del alumno mas viejo de psicologia es " + nombreMayor +
	  "el sexo del alumno mas viejo de psicologia es " +sexoMayor +
	  "la edad del alumno mas viejo en psicologia es "+edadMayor + 
	  "la nota del mejor alumno no binario de psicologia es " + notaMejor +
	  "el nombre del mejor alumno no binario de psicologia es " + nombreMejor + 
	  "el estado de la carrera del mejor alumno no binario de psicologia es " + estadoMejor +
	  "la carrera con mas alumnos es " + carreraConMasAlumnos);

	

	}
	 