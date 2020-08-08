function mostrar()
{
    /*
    Enunciado b)”sin banderas”
Se debe ingresar 10:
nombre
edad(0 y 115)
altura(30 y 230)
sexo
Dinero(puede ser positivo o negativo, pero debe ser un número)
CantidadDeHijos(0 y 10)
despues de validar todos los datos,
se debe informar:

1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven
NOTA:pedir datos por "prompt()" y mostrar por console.log(),
verificar que los datos  exitan antes de mostrarlos
*/

var edad;
var altura;
var sexo;
var dinero;
var cantidadHijos;
var masViejo;
var acumuladorEdadMujeres = 0;
var contadorMujeres = 0;
var nombreMujerMasJoven;
var edadMujerMasJoven = 116;
var edadMasViejo = 0;
var promedioEdadMujeres;


for(var contador = 0;contador < 10; contador++){ 
  
    do
    {
        nombre = prompt("ingrese nombre");

    }while(!(isNaN(nombre)));

    do
    {
        edad = prompt("ingrese edad");
        edad = parseInt(edad);
    }while(edad < 0 || edad > 115 || isNaN(edad));

    do
    {
            altura = prompt("ingrese altura");
            altura = parseInt(altura);
    }while(altura < 30 || altura > 230 || isNaN(altura));

    do
    {
        sexo = prompt("ingrese sexo")
    }while(sexo != "f" && sexo != "m");

    do{
        dinero = prompt("ingrese dinero");
        dinero = parseInt(dinero);
    }while(isNaN(dinero));

    do
    {
        cantidadHijos = prompt("ingrese canti hijos");
        cantidadHijos = parseInt(cantidadHijos);
    }while(cantidadHijos < 0 || cantidadHijos > 10 || isNaN(cantidadHijos));

    if(edad > edadMasViejo){
        edadMasViejo = edad;
        masViejo = nombre;
    }

    if(sexo == "f"){
        contadorMujeres++;
        acumuladorEdadMujeres = acumuladorEdadMujeres + edad;
    }

    if(edad < edadMujerMasJoven && sexo == "f"){
        edadMujerMasJoven = edad;
        nombreMujerMasJoven = nombre;
    }







}

if(contadorMujeres != 0){
    edadMujerMasJoven = console.log("no se ingresaron mujeres");
}
if(contadorMujeres != 0){
    promedioEdadMujeres = acumuladorEdadMujeres / contadorMujeres;
    console.log("prom ed muj " + promedioEdadMujeres);
}
}
