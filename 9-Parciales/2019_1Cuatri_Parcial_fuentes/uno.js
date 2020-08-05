
function mostrar()
{

    var altura1;
    var altura2;
    var altura3;
    var perimetro;

    altura1 = prompt("ingrese altura 1");
    altura1 = parseInt(altura1);

    altura2 = prompt("ingrese altura 2");
    altura2 = parseInt(altura2);

    altura3 = prompt("ingrese altura 3");
    altura3 = parseInt(altura3);

    perimetro = altura3 + altura2 + altura1;

    alert("el perimetro es : " + perimetro);
}
