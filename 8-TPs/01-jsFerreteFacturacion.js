/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;  
    var precioDos;
    var precioTres;
    var resultado;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);


    resultado = precioUno + precioDos + precioTres

    alert(resultado);
}
function Promedio () 
{
    var precioUno;  
    var precioDos;
    var precioTres;
    var promedio;
    

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    
    promedio = (precioUno + precioDos + precioTres) /3

    alert(promedio);


}
function PrecioFinal () 
{
    var precioUno;  
    var precioDos;
    var precioTres;
    var precioTotal;
    var iva;
    var precioFinal;
    

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    precioTotal = (precioUno + precioDos + precioTres);
    
    iva = precioTotal * 0.21
 
    precioFinal = precioTotal + iva;

    alert(precioFinal);


}