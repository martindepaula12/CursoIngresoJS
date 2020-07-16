/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var farenheit;
    var centigrados;

    farenheit = txtIdTemperatura.value;
    farenheit = parseInt(farenheit);

    centigrados = (farenheit - 32) * 5/9;


    alert(farenheit + " grados farenheit son " + centigrados + " grados celcius ");
}

function CentigradosFahrenheit () 
{
    var farenheit;
    var centigrados;

    centigrados = txtIdTemperatura.value;
    farenheit = parseInt(centigrados);

    farenheit = (centigrados * 9/5) + 32
    farenheit = parseInt(farenheit);

    alert(centigrados + " grados centigrados son " + farenheit + " grados farenheit ");
}
