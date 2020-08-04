/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;



var numeroMinimo;
var numeroMaximo;


numeroMinimo = 1 // minimo incluido
numeroMaximo = 101 // maximo no incluido


function comenzar()
{

  numeroIngresado = txtIdNumero.value;
  numeroSecreto = Math.floor(Math.random() * (numeroMaximo - numeroMinimo)) + numeroMinimo;
  console.log(numeroSecreto);
  alert(numeroSecreto);

  if(numeroIngresado == numeroSecreto){
    alert( "el numero random es " + numeroSecreto + "usted es el ganador")
  }else if(numeroIngresado > numeroSecreto){
    alert("el numero secreto es " + numeroSecreto + " se paso del numero ")
  } else {
    alert("el numero secreto es " + numeroSecreto + " falta para el numero secreto");
  }











	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	

}

function verificar()
{


}