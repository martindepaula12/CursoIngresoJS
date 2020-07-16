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
    var precioTotal;

    // doy valor a la variable
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    // parseo
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    // saco resultado pedido 
    precioTotal = precioTres + precioUno + precioDos;

    // muestro resultado con ventana emergente alert
    alert ("El precio total es  " + precioTotal);

}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var promedio;
    var cantidaDePrecios;

    // doy valor a la variable
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    // parseo
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    // asigno cantidad de precios a promediar a una variable
    cantidaDePrecios = 3

    // saco resultado pedido 
    promedio = (precioTres + precioUno + precioDos) / cantidaDePrecios;

    // le dejo los dos primeros decimales luego de la coma
    promedio = promedio.toFixed(2);

    // muestro resultado con ventana emergente alert
    alert ("El promedio de los tres precios es " + promedio);


}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var precioConIva;
    var iva;

    // doy valor a la variable
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    // parseo
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    // asigno precio del iva una variable
    iva = 1.21

    // Le agrego el iva al precio total
    precioConIva = (precioDos + precioTres + precioUno) * iva

    // le dejo los dos primeros decimales luego de la coma
    precioConIva = precioConIva.toFixed(2);

    alert("el precio total mas el iva es " + precioConIva);

}