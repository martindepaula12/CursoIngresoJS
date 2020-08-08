function mostrar()
{
    /*
    Enunciado  a)”bandera a full”
    de una cantidad de espectadores  indeterminada debemos tomar lo siguiente datos
    sexo
    altura
    edad
    nombre
    se debe informar:
    
    1-el nombre de la más alta de las mujeres
    2-el nombre del  más viejo de los hombres 
    3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si  hay  algún adolescente)
    NOTA:pedir datos por "prompt()" y mostrar por console.log()
    */


    var sexo;
    var altura;
    var edad;
    var nombre;
    var respuesta = "si";
    var bandera1 = 0;
    var nombreMujerMasAlta;
    var alturaMujerMasAlta;
    var nombreHombresMasViejo;
    var edadHombreMasViejo;
    var bandera2 = 0;
    var bandera3 = 0;
    var primerAdolescente;


    while(respuesta == "si"){

        do
        {
            nombre = prompt("ingrese nombre");

        }while(!(isNaN(nombre)));

        do
        {
            sexo = prompt("ingrese sexo")
        }while(sexo != "f" && sexo != "m");

        do
        {
            altura = prompt("ingrese altura");
            altura = parseInt(altura);
        }while(altura <= 0 || isNaN(altura));

        do{
            edad = prompt("ingrese edad");
            edad = parseInt(edad);
        }while(edad <= 0 || isNaN(edad));

        if(bandera1 == 0 && sexo == "f"){
            bandera1++;
            nombreMujerMasAlta = nombre;
            alturaMujerMasAlta = altura
        }

        if(altura > alturaMujerMasAlta && sexo == "f"){
            nombreMujerMasAlta = nombre;
            alturaMujerMasAlta = altura;
        }

        if(bandera2 == 0 && sexo == "m"){
            bandera2++;
            edadHombreMasViejo = edad;
            nombreHombresMasViejo = nombre;
        }

        if(edad > edadHombreMasViejo && sexo == "m"){
            edadHombreMasViejo = edad;
            nombreHombresMasViejo = nombre;
        }

        if(bandera3 == 0 && edad > 13 && edad < 19){
            bandera3++;
            primerAdolescente = nombre;
        }

    
        respuesta = prompt("desea continuar si/no");
    }

    console.log(" nombre mujer mas alta " + nombreMujerMasAlta);
    console.log("altura muj mas alta " + alturaMujerMasAlta);
    console.log("edad hombre mas viejo " + edadHombreMasViejo);
    console.log("nomre homb mas viejo " + nombreHombresMasViejo);

    if(bandera3 != 0){
        console.log("primer adolescente es " + primerAdolescente);
    }
   

    
}
