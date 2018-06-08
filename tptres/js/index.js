var arreglo = getArregloAleatorio(6); //definicion de arreglo aleatorio para definir las imagenes del juego
//localStorage.clear();
$(document).ready(function(){
var ranking = new Array();
var rankingHtml="";
if(localStorage.getItem("ranking")!=null){
	ranking=JSON.parse(localStorage.getItem("ranking"));
	//console.log(ranking);
}
for (var i=ranking.length-1;i>=0;i--) {
	rankingHtml+="<tr><td>"+ranking[i].nombre+"</td><td>"+ranking[i].puntuacion+"</td></tr>";
}
$("#tabla-ranking").append(rankingHtml);
var nombre="";
var termino1=false;
var termino2=false;
var terminocallback= true;
var maxClicks = 24;
$("#intentos").html(maxClicks);
var clickCount = 0;
var ultimoDiv;
var ultimoId;
var ultimaImagenVolteada;
var primerClick = 1;
var ganadas = new Array();
$("#usuario").on("change",function()
	{
		if($(this).val().trim() != "" )
			$("#comenzar").prop("disabled",false);
		else
			$("#comenzar").prop("disabled",true);
	});
$('#comenzar').click(function(){
	nombre=$('#usuario').val();
	if(nombre=""){

	}

});
$('#usuarioModal').modal();
$('#myModal').on('hidden.bs.modal', function () {
    window.location.replace("index.html");
})

$("input[name=dificultad]").on("change",function(){
	maxClicks= $("input[name=dificultad]:checked").val();
	console.log(maxClicks)
})

$("div.tarjeta-container>div").on("click", function(e){

	var id = $(this).prop("id");
	var i = id.slice(4);
 	
 	if (primerClick == 1 && ganadas.indexOf(arreglo[i-1]) == -1 && terminocallback) 
 	{
 		clickCount++;
 		$("#intentos").html(maxClicks - clickCount); 
 		if(clickCount >= maxClicks){
 			$("#myModal").modal();
 		}
 		terminocallback=false;
 		$("#" + id).hide( "blind", {times: 10, distance: 100}, 500, function(){
 			$("#"+id+"-1").addClass("img-" + arreglo[i-1]).show("blind", {times: 10, distance: 100}, 
 				500 , function (){
 					terminocallback=true;
 				});

 		});
 		//$(this).hide("Blind", {}, 1000);
 		//$("#"+id+"-1").addClass("img-" + arreglo[i-1]).show("blind", {times: 10, distance: 100}, 1000);
 		//$(this).removeClass("gato").addClass("img-" + arreglo[i-1]);
 		//$(this).toggleClass("img-" + arreglo[i-1]);
 		ultimaImagenVolteada = arreglo[i-1];
 		ultimoId = i;
 		console.log("clic1:" +i);
 		ultimoDiv = id;
 		primerClick=2;
 	}
 	else if (primerClick == 2 && ganadas.indexOf(arreglo[i-1]) == -1 &&  
 		ultimoId != i.substring(0, i.length -2) && terminocallback)
 	{
 		console.log("clic2:" +i);
 		console.log(ultimoId);
 		clickCount++;
 		$("#intentos").html(maxClicks - clickCount); 
 		primerClick = 0;
 		//$(this).removeClass("gato").addClass("img-" + arreglo[i-1]);
		terminocallback=false;
		termino1=false;
		termino2=false;
 		$("#"+id).hide( "blind", {times: 10, distance: 100 , direction: 'horizontal'}, 500, function(){
 			$("#"+id+"-1").addClass("img-" + arreglo[i-1]).show("blind", {times: 10, distance: 100}, 500,
 				function(){
 					terminocallback=true;
 				});
 		});
 		
 		if (arreglo[i-1] != ultimaImagenVolteada && 1==0)
 		{
 			
 			terminocallback=false;
 			if(clickCount >= maxClicks){
	 			$("#myModal").modal();
	 			
	 		}
 			setTimeout(
 				function()
	 			{ 
	 				
	 				// $("#"+ultimoDiv).removeClass("img-"+ultimaImagenVolteada).addClass("gato");
	 				// $("#"+id).removeClass("img-"+arreglo[i-1]).addClass("gato");
	 				// $("#"+ultimoDiv).removeClass("img-"+ultimaImagenVolteada).addClass("gato");
	 				// $("#"+id).removeClass("img-"+arreglo[i-1]).addClass("gato");
	 				//con esta la imagen hace el efecto siempre que se cumplan las condiciones de las funciones
	 				$("#"+ultimoDiv+"-1").hide( "blind", {times: 10, distance: 100}, 500, function(){
 						$("#"+ultimoDiv).addClass("gato").show("blind", {times: 10, distance: 100}, 500,
			 				function(){
			 					termino1=true;
			 					if(termino2==true){
			 						terminocallback=true;
			 						primerClick=1;
			 					}
			 				}
			 			);
			 		});
				 	$("#"+id+"-1").hide( "blind", {times: 10, distance: 100}, 500, function(){
			 			$("#"+id).addClass("gato").show("blind", {times: 10, distance: 100}, 500,
			 				function(){
			 					termino2=true;
			 					if(termino1==true){
				 					terminocallback=true;
				 					primerClick=1;
				 				}
			 				}
			 				);
			 		
			 		});

	 				
	 				
	 				
	 			},
	 			1000
 			);
 		}
 		else 
 		{
 			//terminocallback=true;
 			//genero el new array de ganadas y muestro la felicitacion de ganada
 			primerClick = 1;
 			ganadas.push(arreglo[i-1]);
 			if(ganadas.length >=1)
 			{ 

 				var score= new Array();
 				var objeto= {
 					"nombre":nombre,
 					"puntuacion":clickCount
 				};
 				if (localStorage.getItem("ranking")) 
 					score=JSON.parse(localStorage.getItem("ranking"));
 				if(score.length > 4)
 				{
 					for (var j = 0; j<(score.length-1);j++){
 						score[j] = score[j+1];
 						console.log(score);
 					}
 					score[4] = objeto;
 				}
 				else
 					score.push(objeto);
 				localStorage.setItem("ranking",JSON.stringify(score));
 				//console.log(score);

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




