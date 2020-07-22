function mostrar()
{
	var numeroRandom;
	var numeroMinimo;
	var numeroMaximo;

	numeroMinimo = 1 // minimo incluido
	numeroMaximo = 11 // maximo no incluido

	// si quiero un numero entre 50 y 100 iria 50 y 101
	// el mah floor rendonde para abajo

	numeroRandom = Math.floor(Math.random() * (numeroMaximo - numeroMinimo)) + numeroMinimo;

	console.log(numeroRandom);	// muestra en la consola los numeros ramdon

	alert(numeroRandom); 

}//FIN DE LA FUNCIÓN