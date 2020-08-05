
function mostrar()
{
	var cantidadBarbijo = 0;
	var cantidadAlcohol = 0;
	var cantidadJabon = 0;
	var productoIngresado;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var precioAlcoholMasCaro = 0;
	var unidadesAlcoholMasCaro = 0;
	var fabricanteAlcoholMasCaro = 0;
	var cantidadUnidadesJabon = 0;
	var cantidadUnidadesAlcohol = 0;
	var cantidadUnidadesBarbijo = 0;
	var productoConMasUnidades = 0;
	var promedioUnidadesPorCompraDelProductoConMasUnidades = 0;
	var marcaAlcoholMasCaro;

	var contador = 0;

	while(contador < 5){
		
		productoIngresado = prompt("ingrese producto");
		while(productoIngresado != "barbijo" &&  productoIngresado != "alcohol" && productoIngresado != "jabon"){
		productoIngresado= prompt("ingrese producto correcto");	

		}

		if(productoIngresado == "barbijo"){
			cantidadBarbijo++
			console.log("barbijo" + cantidadBarbijo);
		}
		else if(productoIngresado == "alcohol"){
			cantidadAlcohol++	
			console.log("alchol " + cantidadAlcohol);
		}
		else{
			cantidadJabon++
			console.log("jabon" + cantidadJabon);
	
		}
		precio = prompt("ingrese precio");
		precio = parseInt(precio);
		while(isNaN(precio)){
			precio = prompt("ingrese un numero");
			precio = parseInt(precio);
		} 
		while (precio < 100 ||  precio >300){
			precio = prompt("ingrese un precio correcto");
			precio = parseInt(precio);
		}

		cantidadUnidades = prompt("ingrese cantidad de unidades");
		cantidadUnidades = parseInt(cantidadUnidades);
		
		while(isNaN(cantidadUnidades)){
			cantidadUnidades = prompt("ingrese un numero de unidades");
			cantidadUnidades = parseInt(cantidadUnidades);
		}
		while(cantidadUnidades <= 0 || cantidadUnidades >1000){
			cantidadUnidades = prompt("ingrese una cantidad de unidades correcta");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marca = prompt("ingrese marca");
		fabricante = prompt("ingrese fabricante");

		//punto a
		if(precio > precioAlcoholMasCaro && productoIngresado == "alcohol"){
			precioAlcoholMasCaro = precio;
			console.log("precio alc mas caro " + precioAlcoholMasCaro);
			unidadesAlcoholMasCaro = cantidadUnidades;
			console.log("unidades " + unidadesAlcoholMasCaro);
			fabricanteAlcoholMasCaro = fabricante;
			console.log("fabricante " + fabricanteAlcoholMasCaro);
			marcaAlcoholMasCaro = marca;

		}
	
	
		//punto b y z

		if(productoIngresado == "jabon"){
			cantidadUnidadesJabon = cantidadUnidadesJabon + cantidadUnidades;
			console.log("unidades jabon "+ cantidadUnidadesJabon);
		} 
		else if(productoIngresado == "barbijo"){
			cantidadUnidadesBarbijo = cantidadUnidadesBarbijo + cantidadUnidades;
			console.log("cant un barbijo " + cantidadUnidadesBarbijo);
		}
		else{
			cantidadUnidadesAlcohol = cantidadUnidadesAlcohol + cantidadUnidades;
			console.log("cant un alcohol " + cantidadUnidadesAlcohol);
		}

		contador++;
		
		
	}
	if(cantidadUnidadesAlcohol > cantidadUnidadesBarbijo && cantidadUnidadesAlcohol > cantidadUnidadesJabon){
		productoConMasUnidades = "Alcohol";

	}
	else if(cantidadUnidadesJabon > cantidadUnidadesBarbijo && cantidadUnidadesAlcohol > cantidadUnidadesAlcohol){
		productoConMasUnidades = "jabon";

	}else if(cantidadUnidadesBarbijo > cantidadUnidadesJabon && cantidadUnidadesBarbijo > cantidadUnidadesAlcohol){
		productoConMasUnidades = "barbijo";
	}

	if(productoConMasUnidades == "Alcohol" && cantidadAlcohol != 0){
		promedioUnidadesPorCompraDelProductoConMasUnidades = cantidadUnidadesAlcohol / cantidadAlcohol;
	} else if(productoConMasUnidades == "jabon" && cantidadJabon != 0){
		promedioUnidadesPorCompraDelProductoConMasUnidades = cantidadUnidadesJabon / cantidadJabon;
	}else if (productoConMasUnidades == "barbijo" && cantidadBarbijo != 0 ){
		promedioUnidadesPorCompraDelProductoConMasUnidades = cantidadUnidadesBarbijo / cantidadBarbijo;
	}

	document.write(
	"el alchol mas barato es: " + marcaAlcoholMasCaro + "<br>" + 
	"la cantidad de unidades del alcohol mas "
	)
	
	
}
