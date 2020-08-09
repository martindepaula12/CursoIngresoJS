function mostrar()
{
  /*
  Enunciado c)”mixing bandera”
de una cantidad de animales indeterminada del zoológico debemos tomar lo siguiente
raza
peso
temperatura media del lugar donde habita
edad
si está en peligro de extinción( si o no)
se debe informar:

1-el promedio de edad total
2-la raza del más pesado
3-la temperatura máxima ingresada de los animales en extinción
NOTA:pedir datos por "prompt()" y mostrar por console.log()
*/

var raza;
var peso;
var temperatura;
var edad;
var extincion;
var respuesta = "si";
var acumuladorEdad = 0;
var contador = 0;
var promedioEdad;
var pesoMasPesado;
var razaMasPesado;
var bandera = 0;
var temperaturaMaximaExtincion;


    while(respuesta == "si"){

      do
      {
        raza = prompt("ingrese raza");
      }while(!(isNaN(raza)));

      do
      {
        peso = prompt("ingrese peso");
        peso = parseInt(peso);
      }while(peso <= 0 || isNaN(peso));

      do
      {
        temperatura = prompt("ingrese temperatura");
        temperatura = parseInt(temperatura);
      }while(temperatura <= 0 || isNaN(temperatura));

      do
      {
        edad = prompt("ingrese edad");
        edad = parseInt(edad);
      }while(edad < 0 || isNaN(edad));

      do
      {
        extincion = prompt("esta en peligro de extincion si/no");

      }while(extincion != "si" && extincion != "no" || (!isNaN(extincion)));

      contador++;
      console.log("contador " + contador);
      acumuladorEdad = acumuladorEdad + edad;
      console.log("acum edad " + acumuladorEdad);

      if(bandera == 0){
        bandera++;
        pesoMasPesado = peso;
        console.log("peso mas pes " + pesoMasPesado);
        razaMasPesado = raza;
        console.log("raza mas pes " + razaMasPesado);
      }
      else if(peso > pesoMasPesado){
        pesoMasPesado = peso;
        console.log("peso mas pes " + pesoMasPesado);
        razaMasPesado = raza;
        console.log("raza mas pes " + razaMasPesado);
      }

      if(bandera == 1 && extincion == "si"){
        bandera++;
        temperaturaMaximaExtincion = temperatura;
        console.log("temp max ex " + temperaturaMaximaExtincion);
      }
      else if(temperatura > temperaturaMaximaExtincion && extincion == "si"){
        temperaturaMaximaExtincion = temperatura;
        console.log("temp max ex " + temperaturaMaximaExtincion);
      }
      
        respuesta = prompt("desea continuar si/no");
    }

    if(contador != 0){
      promedioEdad = acumuladorEdad / contador;
      promedioEdad = promedioEdad.toFixed(2);
      console.log("prom edad " + promedioEdad);
    }

    


}
