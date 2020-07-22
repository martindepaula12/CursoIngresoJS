function mostrar()
{
	var numeroRandom1;
	var numeroRandom2;
	var numeroMinimo;
	var numeroMaximo;

	numeroMinimo = 1 // minimo incluido
	numeroMaximo = 52 // maximo no incluido


	numeroRandom1 = Math.floor(Math.random() * (numeroMaximo - numeroMinimo)) + numeroMinimo;
	numeroRandom2 = Math.floor(Math.random() * (numeroMaximo - numeroMinimo)) + numeroMinimo;

	numeroRandom1 = parseInt(numeroRandom1);
	numeroRandom2 = parseInt(numeroRandom2);

	alert("el numero ramdom 1 es  " + numeroRandom1 + " el numero random 2 es  " + numeroRandom2 );

	if (numeroRandom1 % 2 == 0 && numeroRandom2 % 2 == 0){
		alert("la multiplicacion es " + numeroRandom1 * numeroRandom2);
	}
	if (numeroRandom1 % 2 != 0 && numeroRandom2 % 2 != 0){
		alert("la resta es " + (numeroRandom1 - numeroRandom2));
	 }

	 if (numeroRandom1 % 5 == 0){ 
	 	alert("se eleva al cubo " + Math.pow(numeroRandom1, 3))
	 }
	 if (numeroRandom2 % 5 == 0){
		 alert("se eleva al cubo " + Math.pow(numeroRandom2, 3))
	 }


	 }
	