function mostrar()
{
	var numeroRandom1;
	var numeroRandom2;
	var numeroMinimo;
	var numeroMaximo;
	var numero3;

	numeroMinimo = 1 // minimo incluido
	numeroMaximo = 52 // maximo no incluido


	numeroRandom1 = Math.floor(Math.random() * (numeroMaximo - numeroMinimo)) + numeroMinimo;
	numeroRandom2 = Math.floor(Math.random() * (numeroMaximo - numeroMinimo)) + numeroMinimo;

	numeroRandom1 = parseInt(numeroRandom1);
	numeroRandom2 = parseInt(numeroRandom2);

	numero3 = numeroRandom1 + numeroRandom2; // si numero 3 es inpar quiere decir que en los numeros random sumados,  un numero es par y el otro es inpar 

	alert("el numero ramdom 1 es  " + numeroRandom1 + " el numero random 2 es  " + numeroRandom2 );

	if (numeroRandom1 % 2 == 0 && numeroRandom2 % 2 == 0){
		alert("la multiplicacion es " + numeroRandom1 * numeroRandom2);
	}
	if (numeroRandom1 % 2 != 0 && numeroRandom2 % 2 != 0){
		alert("la resta es " + (numeroRandom1 - numeroRandom2));
	 }

	 if (numeroRandom1 % 5 == 0){ 
	 	alert("numero random 1 elevado al cubo: " + Math.pow(numeroRandom1, 3)) // eleva el numero a la potencia deseada
	 }
	 if (numeroRandom2 % 5 == 0){
		 alert("numero random 2 elevado al cubo:  " + Math.pow(numeroRandom2, 3))
	 }
	 if (numero3 % 2 != 0 && numeroRandom1 % 5 != 0 && numeroRandom2 % 5 != 0){
		 alert("no pasa nada");
	 }

	 }
	