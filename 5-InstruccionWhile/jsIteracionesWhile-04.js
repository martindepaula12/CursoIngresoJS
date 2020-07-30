/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");


    while(numeroIngresado < 0 || numeroIngresado >9){ 
        numeroIngresado = prompt("Unicamente entre 0 y 9. ");

	}
	alert("numero correcto");

	txtIdNumero.value = numeroIngresado;

}//FIN DE LA FUNCIÓN

/*
numeroIngresado = prompt("ingrese un número entre 0 y 9.");


while(!(numeroIngresado>= 0 && numeroIngresado <= 9)){
	numeroIngresado = prompt("Unicamente entre 0 y 9. ");

}
 otra forma de hacerlo


