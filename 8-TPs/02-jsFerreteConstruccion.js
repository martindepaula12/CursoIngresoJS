/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var hilosAlambre
    var cantidadAlambre;
    

    // asigno valor a la variable
    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    // parseo
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    // asigno valor a los hilos de alambre requeridos
    hilosAlambre = 3;

    // calculo de perimetro multiplicado por la cantidad de hilos de alambre a usar
    cantidadAlambre = (largo * 2 + ancho * 2)  * hilosAlambre;

    // le dejo los dos primeros decimales despues de la coma
    cantidadAlambre = cantidadAlambre.toFixed(2);

    // muestro el resultado
    alert("se necesitan " + cantidadAlambre + " metros de alambre ");

}
function Circulo () 
{
    var radio;
    var perimetro;
    var cantidadAlambre;
    var hilosAlambre;

    radio = txtIdRadio.value;

    radio = parseFloat(radio);

    // asigno valor a los hilos de alambre requeridos
    hilosAlambre = 3;

    //   calculo perimetro
     perimetro = 2 * radio * Math.PI;

    // calculo para saber cantidad de alambre a usar
     cantidadAlambre = perimetro * hilosAlambre;

  
    // redondea al entero siguiente
    cantidadAlambre = Math.ceil(cantidadAlambre);
  
    // muestro el resultado
    alert("se necesitan " + cantidadAlambre + " metros de alambre ");

  

}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var bolsasCal
    var bolsasCemento;

     // asigno valor a la variable
     largo = txtIdLargo.value;
     ancho = txtIdAncho.value;
 
     // parseo
     largo = parseFloat(largo);
     ancho = parseFloat(ancho);

    //  calculo para sacar el area
     area = largo * ancho;

    //  multiplico el area por la cantidad de bolsas que se necesitan por metro cuadrado
     bolsasCal = area * 3
     bolsasCemento = area * 2

     alert("se necesitan " + bolsasCal + " bolsas de cal y " + bolsasCemento + " bolsas de cemento " );
    
}