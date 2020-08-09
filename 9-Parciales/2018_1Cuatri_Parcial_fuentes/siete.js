function mostrar()
{

    var edad;
    var respuesta = "si";

    while(respuesta == "si"){ 
    do
    {
        edad = prompt("ingrese edad");
        edad = parseInt(edad);
    }while(edad > 0 && edad < 115 || isNaN(edad));

    respuesta = prompt("si/no");
    

    }

}
