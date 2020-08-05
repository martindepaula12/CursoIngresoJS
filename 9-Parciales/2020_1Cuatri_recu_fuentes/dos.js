function mostrar()
{
  var respuesta = "si";
  var productoIngresado;
  var cantidadDeBolsas;
  var precioPorBolsa;
  var precioTotal = 0;
  var descuentoDe15;
  var precioConDescuentoDe15;
  var descuentoDe25;
  var precioConDescuentoDe25;
  var cantidadDeBolsasArena = 0;
  var cantidadDeBolsasCal = 0;
  var cantidadDeBolsasCemento = 0;
  var productoConMasBolsas;
  var precioProductoMasCaro = 0;
  var productoMasCaro;
  var cantidadDeBolsasTotal = 0;

  while(respuesta == "si"){

    productoIngresado = prompt("ingrese producto");
    while(productoIngresado != "arena" && productoIngresado != "cal" && productoIngresado != "cemento"){
      productoIngresado = prompt("error, ingrese producto correcto");
    }

    cantidadDeBolsas = prompt("ingrese cantidad de bolsas")
    cantidadDeBolsas = parseInt(cantidadDeBolsas);

    while(isNaN(cantidadDeBolsas)){
      cantidadDeBolsas = prompt("ingrese un numero de bolsas");
      cantidadDeBolsas = parseInt(cantidadDeBolsas);
    }

    while(cantidadDeBolsas <= 0){
      cantidadDeBolsas = prompt("ingrese numero de bolsas correcto");
      cantidadDeBolsas = parseInt(cantidadDeBolsas);
    }

    precioPorBolsa = prompt("ingrese precio de bolsa")
    precioPorBolsa = parseInt(precioPorBolsa);

    while(isNaN(precioPorBolsa)){
      precioPorBolsa = prompt("error, ingrese un precio");
      precioPorBolsa = parseInt(precioPorBolsa);
    }

    while(precioPorBolsa <= 0 ){
      precioPorBolsa = prompt("error, ingrese precio correcto, debe ser mayor a 0")
      precioPorBolsa = parseInt(precioPorBolsa);
    }

    cantidadDeBolsasTotal = cantidadDeBolsasTotal + cantidadDeBolsas;

    precioTotal = precioTotal + (precioPorBolsa * cantidadDeBolsas);

    if(productoIngresado == "arena"){
      cantidadDeBolsasArena = cantidadDeBolsasArena + cantidadDeBolsas;
    } else if(productoIngresado == "cal"){
      cantidadDeBolsasCal = cantidadDeBolsasCal + cantidadDeBolsas;
      } else{
        cantidadDeBolsasCemento = cantidadDeBolsasCemento + cantidadDeBolsas;
        }

    if(precioPorBolsa > precioProductoMasCaro){
      precioProductoMasCaro = precioPorBolsa;
      productoMasCaro = productoIngresado;
    }    





    respuesta = prompt("desea continuar si/no");
  }
  if(cantidadDeBolsasArena > cantidadDeBolsasCal && cantidadDeBolsasArena > cantidadDeBolsasCemento){
    productoConMasBolsas = "arena";
  } else if(cantidadDeBolsasCal > cantidadDeBolsasCemento && cantidadDeBolsasCal > cantidadDeBolsasArena){
    productoConMasBolsas = "cal";
    } else if(cantidadDeBolsasCemento > cantidadDeBolsasCal && cantidadDeBolsasCemento > cantidadDeBolsasArena){
      productoConMasBolsas = "cemento";
      }
  
  if(cantidadDeBolsasTotal > 10 && cantidadDeBolsasTotal < 30){
    descuentoDe15 = (precioTotal * 15) /100;
    precioConDescuentoDe15 = precioTotal - descuentoDe15;
    precioConDescuentoDe15 = precioConDescuentoDe15.toFixed(2);
    document.write("el precio con un descuento del 15 es: " + precioConDescuentoDe15);

  }

  if(cantidadDeBolsasTotal > 30){
    descuentoDe25 = (precioTotal * 25) /100;
    precioConDescuentoDe25 = precioTotal - descuentoDe25;
    precioConDescuentoDe25 = precioConDescuentoDe25.toFixed(2);
    document.write("el precio con descuento del 25 es: " + precioConDescuentoDe25);
  }

    
  



  document.write(
    "la cantidad total a pagar sin descuento es " + precioTotal + 
    "<br> el producto con mas cantidad de bolsas es " + productoConMasBolsas + 
    "<br> el producto mas caro es " + productoMasCaro
  );

  

  }
