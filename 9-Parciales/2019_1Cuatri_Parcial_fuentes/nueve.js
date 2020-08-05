function mostrar()
{
    var pais;
    var cantidadHabitantes;
    var temperatura;
    var respuesta = "si";
    var contadorTemperaturasPares = 0;
    var habitantesDelPaisConMenosHabitantes = 0;
    var paisConMenosHabitantes;
    var contadorPaisesConMasDe40Grados = 0;
    var acumuladorCantidadDeHabitantes = 0;
    var contadorPaises = 0;
    var promedioCantidadHabitantes;
    var primeraVez = 0;
    var temperaturaMinima;
    var paisDeTemperaturaMinima;
    var bandera2 = 0;

    while(respuesta == "si"){

        pais = prompt("ingrese pais");

        while(!(isNaN(pais))){
            pais = prompt("ingrese un pais correcto");
        }

        cantidadHabitantes = prompt("ingrese cantidad de habitantes");
        cantidadHabitantes = parseFloat(cantidadHabitantes);

        while(cantidadHabitantes < 1 || cantidadHabitantes > 7000 || isNaN(cantidadHabitantes)){
            cantidadHabitantes = prompt("error, ingrese cant de habitantes");
            cantidadHabitantes = parseFloat(cantidadHabitantes);
        }

        temperatura = prompt("ingrese temperatura");
        temperatura = parseFloat(temperatura);

        while(temperatura < -50 || temperatura > 50 || isNaN(temperatura)){
            temperatura = prompt("ingrese temp correcta");
            temperatura = parseFloat(temperatura);
        }

        acumuladorCantidadDeHabitantes = acumuladorCantidadDeHabitantes + cantidadHabitantes;
        console.log("acum cant hab " + acumuladorCantidadDeHabitantes);
        contadorPaises++;
        console.log("cant paises " + contadorPaises);

        if(temperatura % 2 == 0){
            contadorTemperaturasPares++;
            console.log("temp pares " + contadorTemperaturasPares);
        }

        if(bandera2 == 0){
            bandera2++;
            habitantesDelPaisConMenosHabitantes = cantidadHabitantes;
            paisConMenosHabitantes = pais;
        }

        if(cantidadHabitantes < habitantesDelPaisConMenosHabitantes){
            habitantesDelPaisConMenosHabitantes = cantidadHabitantes;
            paisConMenosHabitantes = pais;
            console.log("pais con men hab " + paisConMenosHabitantes);
        }

        if(temperatura > 40){
            contadorPaisesConMasDe40Grados++;
            console.log("cont paises + 40 grados " + contadorPaisesConMasDe40Grados);
        }

        if(primeraVez == 0){
            primeraVez++;
            temperaturaMinima = temperatura;
            paisDeTemperaturaMinima = pais;
        }

        if(temperatura < temperaturaMinima){
            temperaturaMinima = temperatura;
            console.log("temp minima " +temperaturaMinima);
            paisDeTemperaturaMinima = pais;
            console.log("pais con menos temp "+ paisDeTemperaturaMinima);
        }
 

        respuesta = prompt("desea continuar si/no");
    }
    
    promedioCantidadHabitantes = acumuladorCantidadDeHabitantes / contadorPaises;
    promedioCantidadHabitantes = promedioCantidadHabitantes.toFixed(2);
    console.log("prom hab "+ promedioCantidadHabitantes);


}
