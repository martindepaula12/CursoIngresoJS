function mostrar()
{
    var letra;
    var numero;
    var respuesta = "si";
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var sumaNegativos = 0;
    var primeraVez = 0;
    var numeroMinimo;
    var numeroMaximo;
    var letraMaximo;
    var letraMinimo;

    while(respuesta == "si"){

        numero = prompt("ingrese numero");
        numero = parseFloat(numero);

        while(numero < -100 || numero > 100 || isNaN(numero)){
            numero = prompt("ingrese numero correcto");
            numero = parseFloat(numero);
        }

        letra = prompt("ingrese letra");

        while(!(isNaN(letra))){
            letra = prompt("error, ingrese una letra");
        }

        if(numero % 2 == 0){
            contadorPares++;
            console.log("pares " + contadorPares);
        }else{ 

        
            contadorImpares++;
            console.log("inpares " + contadorImpares);
            }

        if(numero == 0){
            contadorCeros++;
            console.log("ceros " + contadorCeros);
        }

        if(numero < 0 ){
            sumaNegativos = sumaNegativos + numero;
            console.log("sum neg " + sumaNegativos);
        }

        if(primeraVez == 0){
            primeraVez++;
            numeroMaximo = numero;
            numeroMinimo = numero;
            letraMaximo = letra;
            letraMinimo = letra;
        }

        if(numero > numeroMaximo){
            numeroMaximo = numero;
            console.log("num maximo " + numeroMaximo);
            letraMaximo = letra;
            console.log("letra max " + letraMaximo);
        }

        if(numero < numeroMinimo){
            numeroMinimo = numero;
            console.log("num minimo " + numeroMinimo);
            letraMinimo = letra;
            console.log("letra min " + letraMinimo);
        }

        respuesta = prompt("desea continuar si/no");
    }

}
