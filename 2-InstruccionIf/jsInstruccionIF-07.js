function mostrar()
{
var edad;
var estadoCivilIngresado; 

edad = txtIdEdad.value;
estadoCivilIngresado = estadoCivil.value;


if (edad < 18 && estadoCivilIngresado != "Soltero"){
	alert("muy pequeño para no ser soltero");
}


}//FIN DE LA FUNCIÓN