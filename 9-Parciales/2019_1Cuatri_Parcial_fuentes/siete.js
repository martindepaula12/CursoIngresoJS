function mostrar()
{
    var altura;
    var sexo;
    var acumuladorAlturas = 0;
    var promedioAlturas;
    var alturaMasBaja =0;
    var primeraVez =0;
    var sexoDelMasEnano;
    var contadorMujeresMasDe190 = 0;

    var contador = 0;

    while(contador < 5){
        
        altura = prompt("ingrese altura en cm");
        altura = parseFloat(altura);

        while(altura < 0 || altura > 250){
            altura = prompt("ingrese altura correcta");
            altura = parseFloat(altura);

        }

        while(isNaN(altura)){
            altura = prompt("ingrese un numero");
            altura = parseFloat(altura);

        }

            sexo =  prompt("ingrese sexo");
        while(sexo != "f" && sexo != "m"){
            sexo = prompt("ingrese sexo correcto");
        }

        acumuladorAlturas = acumuladorAlturas + altura;
        console.log("acum alturas" + acumuladorAlturas);

        if(primeraVez == 0){
            primeraVez++;
            alturaMasBaja = altura;
            sexoDelMasEnano = sexo;
        }

        if(altura < alturaMasBaja){
            alturaMasBaja = altura;
            sexoDelMasEnano = sexo;
            console.log("alt mas baja " + alturaMasBaja);
            console.log("sexo mas bajo " + sexoDelMasEnano);
        }

        if(altura > 190 && sexo == "f"){
            contadorMujeresMasDe190++
            console.log("cont muj + 190 " + contadorMujeresMasDe190);
        }






        




        contador++
    }
    promedioAlturas = acumuladorAlturas / contador;
    console.log("promed altruras " + promedioAlturas);
}
