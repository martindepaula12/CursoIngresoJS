function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;
    var cantidadADescontar;

    precio = prompt("ingrese precio");
    precio = parseFloat(precio);
    descuento = prompt("ingrese descuento");
    descuento = parseFloat(descuento);

    cantidadADescontar = (precio * descuento) / 100;

    precioFinal = precio - cantidadADescontar;

    document.getElementById("elPrecioFinal").value = precioFinal;


}
