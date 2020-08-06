function mostrar()
{
  var tipo;
  var cantidadBolsas;
  var precioBolsa;
  var respuesta = "si";
  var descuento15 = 15;
  var descuento25 = 25;
  var cantidadADescontar;
  var precioTotal;
  var precioDescuento15;
  var precioDescuento25;
  var cantidadBolsasArena = 0;
  var canntidadBolsasCal = 0;
  var cantidadBolsasCemento = 0;
  var tipoConMasBolsas;
  var tipoMasCaro;
  var precioBolsaMasCaro = 0;
  var precioTotal = 0;
  

  while(respuesta == "si"){

    do
    {
      tipo = prompt("ingrese tipo, arena, cal o cemento")
    }while(tipo != "arena" && tipo != "cal" && tipo != "cemento");

    do
    {
      cantidadBolsas = prompt("ingrese cantidad de bolsas");
      cantidadBolsas = parseInt(cantidadBolsas);
    }while(cantidadBolsas < 1 || isNaN(cantidadBolsas));

    do
    {
      precioBolsa = prompt("ingrese precio de bolsa");
      precioBolsa = parseInt(precioBolsa);
    }while(precioBolsa < 1 || isNaN(precioBolsa));

    precioTotal = precioTotal + (precioBolsa * cantidadBolsas);
    console.log("precio total " + precioTotal);

    if(tipo == "arena"){
      cantidadBolsasArena = cantidadBolsasArena + cantidadBolsas;
      console.log("cant bolsas arena " + cantidadBolsasArena);
    }
    else if(tipo == "cal"){
      canntidadBolsasCal = canntidadBolsasCal + cantidadBolsas;
      console.log("canti bolsas cal " + canntidadBolsasCal);
    }
    else{
      cantidadBolsasCemento = cantidadBolsasCemento + cantidadBolsas;
      console.log("cant bolsas cemento " + cantidadBolsasCemento);
    }

    if(precioBolsa > precioBolsaMasCaro){
      precioBolsaMasCaro = precioBolsa;
      console.log("precio bolsa mas caro "+ precioBolsaMasCaro);
      tipoMasCaro = tipo;
      console.log("tipo mas caro " + tipoMasCaro);
    }

    respuesta = prompt("desea continuar si/no");
  }

  if(cantidadBolsasArena > cantidadBolsasCemento && cantidadBolsasArena > canntidadBolsasCal){
    tipoConMasBolsas = "arena";
   

  }
  else if(cantidadBolsasCemento > canntidadBolsasCal){
    tipoConMasBolsas = "cemento";

  }
  else{
    tipoConMasBolsas = "cal";
  }

  console.log("tipo con mas bolsas " + tipoConMasBolsas);

  if(cantidadBolsas > 10 && cantidadBolsas < 30){
    descuento15 = 15;
    cantidadADescontar = (precioTotal * descuento15) /100;
    precioDescuento15 = precioTotal - cantidadADescontar;
    document.write("la cantidad a pagar es con descuento del 15 " + precioDescuento15);

  }
  else if(cantidadBolsas > 30){
    descuento25 = 25;
    cantidadADescontar = (precioTotal * descuento25) / 100;
    precioDescuento25 = precioTotal - cantidadADescontar;
    document.write("la cantidad a pagar es con descuento del 25 " + precioDescuento25);
  }
  else{
    document.write("la cantidad a pagar es  " + precioTotal);
  }

  document.write("la cantidad a pagar bruto es : " + precioTotal)


}
