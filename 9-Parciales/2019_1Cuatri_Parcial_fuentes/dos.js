function mostrar()
{
  var nombre1;
  var nombre2;

  var peso1;
  var peso2;

  var pesoTotal;
  var promedioPeso;

  nombre1 = prompt("ingrese su nombre");
 

  peso1 = prompt("ingrese su peso");
  peso1 = parseInt(peso1);

  nombre2 = prompt("ingrese su nombre");

  peso2 = prompt("ingrese su peso");
  peso2 = parseFloat(peso2);
  
  pesoTotal = peso1 + peso2;

  promedioPeso = pesoTotal / 2;

  alert("ustedes se llaman " + nombre1 + " y " + nombre2 + " pesan " + peso1 + " y " + peso2 + " kilos, " 
        + " que sumados son " + pesoTotal + " kilos, y el promedio de peso es: " + promedioPeso );

}
