
function mostrar()
{
	var productoIngresado;
	var contador = 0;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var bandera = 0;
	var marcaAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	var cantidadUnidadesAlcoholMasBarato;
	var precioAlcoholMasBarato;
	var acumuladorUnidadesAlcohol = 0;
	var acumuladorUnidadesBarbijo = 0;
	var acumuladorUnidadesJabon = 0;
	var contadorBarbijos = 0;
	var contadorAlcohol = 0;
	var contadorJabon = 0;
	var productoConMasUnidades;

	while(contador < 5){

		productoIngresado = prompt("ingrese prodcuto");

		while(productoIngresado != "barbijo" && productoIngresado != "jabon" && productoIngresado != "alcohol"){
			productoIngresado = prompt("error, ingrese producto correcto");
		}

		while(!(isNaN(productoIngresado))){
			productoIngresado = prompt("no puede ser un numero");
		}

		precio = prompt("ingrese precio entre 100 y 300");
		precio = parseInt(precio);

		while(precio < 100 || precio > 300 || isNaN(precio)){
			precio = prompt("error, ingrese precio");
			precio = parseInt(precio);
		}

		cantidadUnidades = prompt("ingrese cantidad unidades");
		cantidadUnidades = parseInt(cantidadUnidades);

		while(cantidadUnidades < 1 || cantidadUnidades > 1000 || isNaN(cantidadUnidades)){
			cantidadUnidades = prompt("error, ingrese cantidad unidades correcta");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marca = prompt("ingrese marca");

		fabricante = prompt("ingrese fabricante");

		if(bandera == 0 && productoIngresado == "alcohol"){
			bandera++;

			marcaAlcoholMasBarato = marca;
			console.log("marca " + marcaAlcoholMasBarato);
			fabricanteAlcoholMasBarato = fabricante;
			console.log("fabricante a " + fabricanteAlcoholMasBarato);
			cantidadUnidadesAlcoholMasBarato = cantidadUnidades;
			console.log("cant un alc mas b " + cantidadUnidadesAlcoholMasBarato);
			precioAlcoholMasBarato = precio;
			console.log("precio alc mas b " + precioAlcoholMasBarato);

		}

		if(precio < precioAlcoholMasBarato && productoIngresado == "alcohol"){
			marcaAlcoholMasBarato = marca;
			console.log("marca 2 " +marcaAlcoholMasBarato);
			fabricanteAlcoholMasBarato = fabricante;
			console.log("fab 2 " + fabricanteAlcoholMasBarato);
			cantidadUnidadesAlcoholMasBarato = cantidadUnidades;
			console.log("cant un alc 2 " + cantidadUnidadesAlcoholMasBarato);
			precioAlcoholMasBarato = precio;
			console.log("precio alc 2 " + precioAlcoholMasBarato);
		}

		if(productoIngresado == "alcohol"){
			acumuladorUnidadesAlcohol = acumuladorUnidadesAlcohol + cantidadUnidades;
			console.log("acum un alc " + acumuladorUnidadesAlcohol);
			contadorAlcohol++;
			console.log("cont alc " + contadorAlcohol);
		} 
		else if(productoIngresado == "barbijo"){
			acumuladorUnidadesBarbijo = acumuladorUnidadesBarbijo + cantidadUnidades;
			console.log("acum barbijos " + acumuladorUnidadesBarbijo);
			contadorBarbijos++;
			console.log("cont bar " + contadorBarbijos);
		} 
		else{
			acumuladorUnidadesJabon = acumuladorUnidadesJabon + cantidadUnidades;
			console.log("acum jabon " + acumuladorUnidadesJabon);
			contadorJabon++;
			console.log("cont jabon " + contadorJabon);
		}


		contador++;
	}

	if(acumuladorUnidadesAlcohol > acumuladorUnidadesBarbijo && 
		acumuladorUnidadesAlcohol > acumuladorUnidadesJabon){
			productoConMasUnidades == "alcohol";
	} 
	else if(acumuladorUnidadesBarbijo > acumuladorUnidadesJabon && 
			acumuladorUnidadesBarbijo > acumuladorUnidadesAlcohol){
				productoConMasUnidades == "barbijo";	

	} else{
		productoConMasUnidades = "jabon";
	}

	if(productoConMasUnidades == "alcohol" && contadorAlcohol !=0){
		promedioUnidadesPorCompra = acumuladorUnidadesAlcohol / contadorAlcohol;
		
	}
	else if(productoConMasUnidades == "barbijo" && contadorBarbijos != 0){
		promedioUnidadesPorCompra = acumuladorUnidadesBarbijo / contadorBarbijos;
	} 
	else if(productoConMasUnidades == "jabon" && contadorJabon != 0){
		promedioUnidadesPorCompra = acumuladorUnidadesJabon / contadorJabon;
	} else{
		promedioUnidadesPorCompra = alert("no se ingreso ningun producto");
	}
	console.log("prom " + promedioUnidadesPorCompra);

	


	
}
