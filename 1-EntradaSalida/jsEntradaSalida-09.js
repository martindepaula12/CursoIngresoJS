/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var sueldoConAumento;
	

	sueldo = txtIdSueldo.value;
	aumento = 1.1

	sueldo = parseInt(sueldo);

	sueldoConAumento = sueldo * aumento;



	txtIdResultado.value = sueldoConAumento;
	
}
