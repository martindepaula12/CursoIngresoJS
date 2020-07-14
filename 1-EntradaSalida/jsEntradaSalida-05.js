/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var edad;
	var nombre;

	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;

	alert("usted tiene " + edad + " años " + "y se llama " + nombre);
}

