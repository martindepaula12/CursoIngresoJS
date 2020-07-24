/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var precioLamparas;
     var cantidadDeLamparas;
     var precioConDescuentoA;
     var marcaLamparas;
     var descuento;
     var precioTotal;
     
     

     precioLamparas = 35;

    
     cantidadDeLamparas = txtIdCantidad.value;
     cantidadDeLamparas = parseFloat(cantidadDeLamparas);
     marcaLamparas = Marca.value;
     precioTotal = precioLamparas * cantidadDeLamparas;
     

    if (cantidadDeLamparas >= 6){
        descuento = precioTotal * 0.5;
    }
    else if (cantidadDeLamparas == 5 && marcaLamparas == "ArgentinaLuz"){
       descuento = precioTotal * 0.4;
    }
    else if (cantidadDeLamparas == 5){ 
       descuento = precioTotal * 0.3;
    }
    else if (cantidadDeLamparas == 4 && marcaLamparas == "ArgentinaLuz" || "FelipeLamparas" ){
        descuento = precioTotal * 0.25;
    }
    else if (cantidadDeLamparas == 4 ){
        descuento = precioTotal * 0.20;
    }
    else if (cantidadDeLamparas == 3 && marcaLamparas == "ArgentinaLuz"){
        descuento = precioTotal * 0.15;
    }
    else if (cantidadDeLamparas == 3 && marcaLamparas == "FelipeLamparas"){
        descuento = precioTotal * 0.10;
    }
    else if (cantidadDeLamparas == 3){
        descuento = precioTotal * 0.05;
    }
    precioConDescuentoA = precioTotal - descuento;
    txtIdprecioDescuento.value = precioConDescuentoA;
}
