function mostrar()
{
    var numero1;
    var numero2;
    var resta;

    numero1 = prompt("ingrese numero 1");
    numero1 = parseFloat(numero1);

    numero2 = prompt("ingrese numero 2");
    numero2 = parseFloat(numero2);

    if(numero1 == numero2){
        alert( numero1 + " " + numero2);
    }else if(numero1 > numero2){
        resta = numero1 - numero2;
        alert( "la resta es " + resta);
        
    }else{
        alert("la suma es: " + (numero1 + numero2));
    }

    if(resta > 10){
        alert("la resta es " + resta + " y supero el 10 ");
    }
}
