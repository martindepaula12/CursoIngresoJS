/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var ancho;
    var largo;
    var perimetro;
    var cantidadAlamabre;

    ancho = txtIdLargo.value;
    largo = txtIdAncho.value;

    ancho = parseInt(ancho);
    largo = parseInt(largo);

    perimetro = largo + largo + ancho + ancho;

    cantidadAlamabre = perimetro * 3

    alert(cantidadAlamabre + " metros ");


}
function Circulo () 
{
    var radio;
    var perimetro;
    var cantidadAlamabre;
    var perimetro
    
    radio = txtIdRadio.value;

    radio = parseFloat(radio);

    perimetro = 2 * radio * Math.PI; 
    perimetro = Math.ceil(perimetro);

    cantidadAlamabre = perimetro * 3

    alert(cantidadAlamabre + " metros ");


}
function Materiales () 
{
    var largo;
    var ancho;
    var bolsasCemento;
    var area;
    var bolsasCal;

    ancho = txtIdLargo.value;
    largo = txtIdAncho.value;

    area = largo * ancho;

    bolsasCal = area * 3
    bolsasCemento = area *2

    alert( "se necesitan " + bolsasCemento + " bolsas de cemento y " + bolsasCal + " bolsas de cal ");
    
}