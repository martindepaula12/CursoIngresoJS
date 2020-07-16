/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var resultado

	// tomo importe por Id
	importe = txtIdImporte.value;
	
	importe = parseInt(importe);

	descuento = importe *0.25

	resultado = importe - descuento

	// muestro resultado por ID en cuadro de texto
	txtIdResultado.value = resultado;
}
