/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;

	edadIngresada = prompt("ingrese edad");
	sexoIngresado = prompt("Ingrese sexo F/M");
	estadoCivilIngresado = prompt("Ingrese estado Civil : 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
	sueldoBruto = prompt("ingrese sueldo bruto, no menor a 8000 ");
	numeroLegajo = prompt("ingrese numero de legajo numérico de 4 cifras, sin ceros a la izquierda.");
	nacionalidad = prompt("Ingrese Nacionalidad  “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	 
	 while (!(edadIngresada >17 && edadIngresada < 91)){
		 edadIngresada = prompt("ingrese edad correcta");

		 while(isNaN(edadIngresada)){
			 edadIngresada = prompt("la edad debe ser un numero");
		 }
	 }
	 while(sexoIngresado != "F" && sexoIngresado != "M"){
		 sexoIngresado = prompt("ingrese sexo correcto");
	 }
	 while (!(estadoCivilIngresado >0 && estadoCivilIngresado <5)){
		 estadoCivilIngresado = prompt("ingrese numero correcto correspondiente a estado civil");

		 while(isNaN(estadoCivilIngresado)){
			 estadoCivilIngresado = prompt("el estado civil debe ser un numero");
		 }
	 }
	 while(sueldoBruto < 8000){
		 sueldoBruto = prompt("ingrese sueldo bruto no menor a 8000");

		 while(isNaN(sueldoBruto)){
			 sueldoBruto = prompt("el sueldo bruto debe ser un numero");
		 }
	 }
	 while (!(numeroLegajo >999 && numeroLegajo < 10000)){
		 numeroLegajo = prompt("Ingrese numero de legajo correcto");

		 while(isNaN(numeroLegajo)){
			 numeroLegajo = prompt("Ingrese 4 numeros, sin letras");
		 }
	 }
	 while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N"){
		 nacionalidad = prompt("ingrese letra de nacionalidad correcta");
	 }

	 txtIdNacionalidad.value = nacionalidad;
	 txtIdLegajo.value = numeroLegajo;
	 txtIdSueldo.value = sueldoBruto;
	 txtIdEstadoCivil.value = estadoCivilIngresado;
	 txtIdSexo.value = sexoIngresado;
	 txtIdEdad.value = edadIngresada;

	 


}
