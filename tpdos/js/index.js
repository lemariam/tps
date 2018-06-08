$(document).ready(function(){
var arreglo = getArregloAleatorio(6); //definicion de arreglo aleatorio para definir las imagenes del juego

var maxClicks = 24;
$("#intentos").html(maxClicks);
var clickCount = 0;
var ultimoDiv;
var ultimoId;
var ultimaImagenVolteada;
var primerClick = 1;
var ganadas = new Array();
$('#myModal').on('hidden.bs.modal', function () {
    window.location.replace("index.html");
})

$("div.tarjeta-container>div").on("click", function(e){

	var id = $(this).prop("id");
	var i = id.slice(4);
 	
 	if (primerClick == 1 && ganadas.indexOf(arreglo[i-1]) == -1) 
 	{
 		clickCount++;
 		$("#intentos").html(maxClicks - clickCount); 
 		if(clickCount >= maxClicks){
 			alert("Perdiste");
 			window.location.replace("index.html");
 		}
 		$(this).removeClass("gato").addClass("img-" + arreglo[i-1]);
 		//$(this).toggleClass("img-" + arreglo[i-1]);
 		ultimaImagenVolteada = arreglo[i-1];
 		ultimoId = i;
 		ultimoDiv = id;
 		primerClick=2;
 	}
 	else if (primerClick == 2 && ganadas.indexOf(arreglo[i-1]) == -1 &&  ultimoId != i)
 	{
 		clickCount++;
 		$("#intentos").html(maxClicks - clickCount); 
 		primerClick = 0;
 		$(this).removeClass("gato").addClass("img-" + arreglo[i-1]);
 		
 		if (arreglo[i-1] != ultimaImagenVolteada)
 		{
 			if(clickCount >= maxClicks){
	 			$("#myModal").modal();
	 			
	 		}
 			setTimeout(
 				function()
	 			{ 
	 				$("#"+ultimoDiv).removeClass("img-"+ultimaImagenVolteada).addClass("gato");
	 				$("#"+id).removeClass("img-"+arreglo[i-1]).addClass("gato");	
	 				
	 				primerClick=1;
	 				
	 			},
	 			1000
 			);
 		}
 		else
 		{
 			primerClick = 1;
 			ganadas.push(arreglo[i-1]);
 			if(ganadas.length >=6)
 			{
 				$(".modal-body img").prop("src","img/congrats.jpg");
 				$("#myModal").modal();
 			}

 		}
 		
 	}

	
});
});
// //Funcion que devuelve un numero aleatorio entero desde un numero "desde" hasta un numero "hasta"
function getNumberRandom(desde, hasta)
{
	return Math.floor(Math.random()*hasta + desde);
}
function getArregloAleatorio(numeros)
{
	var arregloAleatorio = new Array();
	var numerosPosibles = "";
	for(var i=1;i<=numeros;i++)
	{
		numerosPosibles += i;
		numerosPosibles += i;
	}

	for(var i=0;i<12;i++){
		var randomNumber = getNumberRandom(0,11 - i);
		arregloAleatorio[i] = numerosPosibles[randomNumber];
		numerosPosibles = numerosPosibles.slice(0,randomNumber) + numerosPosibles.slice(randomNumber + 1);
	}
	return arregloAleatorio;
}


