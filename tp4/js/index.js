//localStorage.clear();
var data = {
		"paises":[
		    {"nombre":"Argentina", "codigo":"AR"},
		    {"nombre":"Bolivia", "codigo":"BO"}, 
		    {"nombre":"Brasil", "codigo":"BR"},
		    {"nombre":"Chile", "codigo":"CL"},
		    {"nombre":"Paraguay", "codigo":"PY"},
		    {"nombre":"Uruguay", "codigo":"UY"},
		]
	}
	var dataTabla;

	$(document).ready(function(){
		
		cargarPaises(data.paises, "paises");
		if(localStorage.getItem("form") != null)
			cargarTabla(JSON.parse(localStorage.getItem("form")));

		$("#enviar").on("click",function(){
			var pais = $("#paises").val();
			var lenguaje = $("input[name='lenguaje']:checked").val();
			var sistema = $("input[name='sistema']:checked").val();
			var genero = $("input[name='genero']:checked").val();
			var trabajo = $("input[name='trabajo']:checked").val();

			var form = {
				"pais":pais,
				"lenguaje":lenguaje,
				"sistema":sistema,
				"genero":genero,
				"trabajo":trabajo
			}
			var dataTabla = new Array();
			if(localStorage.getItem("form") != null)
				dataTabla = JSON.parse(localStorage.getItem("form"));
			dataTabla.push(form);

			localStorage.setItem("form",JSON.stringify(dataTabla));
			cargarTabla(dataTabla);
		});
		



	});

	function cargarPaises(paises, idElement)
	{
		var html = "";
		$.each(data.paises,function(index,value){
			html += "<option value=\""+value.codigo+"\" >"+ value.nombre +"</option>";

		});
		$("#"+ idElement).html(html);
	}
	function cargarTabla(dataTabla){
		console.log(dataTabla);
		var html = "<table><thead><tr>";
		html += "<th>Pais</th><th>Lenguaje</th><th>Sistema</th><th>Genero</th><th>Trabajo</th></thead><tbody>";

		$.each(dataTabla,function(index,value){
			html += "<tr><td>"+ value.pais + "</td><td>"+ value.lenguaje + "</td><td>"+ value.sistema +"</td><td>"+ value.genero +"</td><td>"+ value.trabajo +"</td><tr>";
		});
		html += "</tbody></table>";
		$("#cuadro").html(html);
	}