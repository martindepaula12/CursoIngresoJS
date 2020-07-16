/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var farenheit;
    var centígrados;

    farenheit = txtIdTemperatura.value;
    farenheit = parseFloat(farenheit);

    // calculo de farenheit a centigrados
    centigrados = (farenheit - 32) * 5/9;
    
     // le dejo los dos primeros decimales luego de la coma
     centigrados = centigrados.toFixed(2);

     alert(farenheit + " grados F son " + centigrados + " grados C ");
}

function CentigradosFahrenheit () 
{
    var farenheit;
    var centígrados;

    centigrados = txtIdTemperatura.value;
    centigrados = parseFloat(centigrados);

    // calculo de farenheit a centigrados
    farenheit = centigrados *9/5 + 32
    
     // le dejo los dos primeros decimales luego de la coma
     farenheit = farenheit.toFixed(2);

     alert(centigrados + " grados c son " + farenheit + " grados F ");

}
