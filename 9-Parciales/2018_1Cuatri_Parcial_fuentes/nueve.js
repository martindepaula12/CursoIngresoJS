function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta = "si";
    var temperaturasPares = 0;
    var pesoMasPesado = 0;
    var marcaMasPesado;
    var productosAMenos0Grados = 0;
    var contadorProductos = 0;
    var acumuladorPeso = 0;
    var promedioPeso;
    var pesoMinimo;
    var primeraVez = 0;


    

    while(respuesta == "si"){

        do
        {
            marca = prompt("ingrese marca");
        }while(!(isNaN(marca)));

        do
        {
            peso = prompt("ingrese peso");
            peso = parseInt(peso);
        }while(peso < 1 || peso > 100 || isNaN(peso));

        do
        {
            temperatura = prompt("ingrese temperatura");
            temperatura = parseInt(temperatura);
        }while(temperatura < -30 || temperatura > 30 || isNaN(temperatura));

        if(temperatura % 2 == 0){
            temperaturasPares++;
            console.log("temp pares " + temperaturasPares);
        }

        if(peso > pesoMasPesado){
            pesoMasPesado = peso;
            console.log("peso mas pes " + pesoMasPesado);
            marcaMasPesado = marca;
            console.log("marca mas pes " + marcaMasPesado);
        }
        if(temperatura < 0){
            productosAMenos0Grados++;
            console.log("prod a menos 0 "+ productosAMenos0Grados);
        }
        if(primeraVez == 0){
            primeraVez++;
            pesoMinimo = peso;
            console.log("peso min " + pesoMinimo);
        }
        else if(peso < pesoMinimo){
            pesoMinimo = peso;
            console.log("peso min " + pesoMinimo);
        }

        acumuladorPeso = acumuladorPeso + peso;
        console.log("acum peso " + acumuladorPeso);

        contadorProductos++;
        console.log("cont prod " +contadorProductos);


        respuesta = prompt("desea continuar si/no");
    }

    if(contadorProductos != 0){
        promedioPeso = acumuladorPeso / contadorProductos;
        promedioPeso = promedioPeso.toFixed(2);
        console.log("prom peso " + promedioPeso);
    }
}
