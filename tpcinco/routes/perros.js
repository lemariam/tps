var express = require('express');
var router = express.Router();

var perros = {
	"perros":[
		{
			"id":1,
			"nombre":"pepe",
			"raza": "Setter",
			"tamano":"mediano",
			"imagen":"bello.jpg",
			"favorito": true

		},

		{
			"id":2,
			"nombre":"firulais",
			"raza":"huskie" ,
			"tamano":"grande",
			"imagen":"huskie.jpg",
			"favorito": false
		},

		{
			"id":3,
			"nombre":"gizmo",
			"raza": "gremlin",
			"tamano":"pequeno",
			"imagen":"cacri.jpg",
			"favorito": true
		}
		,

		{
			"id":4,
			"nombre":"tequila",
			"raza": "chihuahua",
			"tamano":"pequeno",
			"imagen":"tequila.jpeg",
			"favorito": false
		},

		{
			"id":5,
			"nombre":"bombom",
			"raza": "pastor escoces",
			"tamano":"grande",
			"imagen":"cuchi.jpg",
			"favorito":false
		},

		{
			"id":6,
			"nombre":"george",
			"raza": "mucuchies",
			"tamano":"grande",
			"imagen":"mucuchies.jpg",
			"favorito":false
		}
	]
};	
router.get('/raza/:raza/tamano/:tamano', function(req, res, next) {
	var raza = parseInt(req.params.raza);
	var tamano = parseInt(req.params.tamano);
	var response = [];
	for(var i=0; i < perros.length; i++){
		if(raza != null){
			if(perros.perros[i].raza = raza){
				if(perros.perros[i].tamano = tamano){
					response.push(perros.perros[i]);
				}
			}
		}

	}
	var perrosfiltrados = new Object();
	perrosfiltrados.perros = response;
	res.render('perros', perrosfiltrados);
	//res.render('perros', perros);
});
/* GET users listing. */
//router.get('/:pag', function(req, res, next) {
router.get('/', function(req, res, next) {
	var page = 1;
	console.log(page);
	if(page == null)
		page = 1;
	var dogs = new Object();
	dogs.perros = new Array();
	var pageLen = 3;
	for(var i=0;i<=2;i++){
		var index = (page - 1)*pageLen + i;
		//console.log(perros[index]);
		dogs.perros.push(perros.perros[index]);
	}
	console.log(dogs);
	dogs.page = page;
	res.render('perros', dogs);
	//res.render('perros', perros);
});
router.get('/page/:page', function(req, res, next) {
	var page = parseInt(req.params.page);
	console.log(page);
	if(page == null)
		page = 1;
	var dogs = new Object();
	dogs.perros = new Array();
	var pageLen = 3;
	for(var i=0;i<=2;i++){
		var index = (page - 1)*pageLen + i;
		//console.log(perros[index]);
		dogs.perros.push(perros.perros[index]);
	}
	console.log(dogs);
	dogs.page = page;
	res.render('perros', dogs);
	//res.render('perros', perros);
});
router.get('/page/:page/fav/:id', function(req, res, next) {
	var id = parseInt(req.params.id);
	var page = parseInt(req.params.page);
	perros.perros[id-1].favorito = false;

	if(page == null)
		page = 1;
	var dogs = new Object();
	dogs.perros = new Array();
	var pageLen = 3;
	for(var i=0;i<=2;i++){
		var index = (page - 1)*pageLen + i;
		//console.log(perros[index]);
		dogs.perros.push(perros.perros[index]);
	}
	dogs.page = page;
	res.render('perros', dogs);
	//res.render('perros', perros);
});
router.get('/page/:page/nofav/:id', function(req, res, next) {
	var id = parseInt(req.params.id);
	var page = parseInt(req.params.page);
	perros.perros[id-1].favorito = true;
	
	if(page == null)
		page = 1;
	var dogs = new Object();
	dogs.perros = new Array();
	var pageLen = 3;
	for(var i=0;i<=2;i++){
		var index = (page - 1)*pageLen + i;
		//console.log(perros[index]);
		dogs.perros.push(perros.perros[index]);
	}
	dogs.page = page;
	res.render('perros', dogs);
	//res.render('perros', perros);
});
router.post("/",function(req, res){
	var raza = req.body.razas;
	var tamano = req.body.tamanos;
	var dogs = new Object();
	dogs.perros = new Array();
	for(var i=0;i<perros.perros.length;i++)
	{
		console.log(perros.perros[i].raza);
		console.log(raza);
		if((raza == "" || perros.perros[i].raza.toLowerCase() == raza.toLowerCase()) 
		&& (tamano == "" || perros.perros[i].tamano.toLowerCase() == tamano.toLowerCase()))
			dogs.perros.push(perros.perros[i]);
	};
	dogs.page = 1;
	dogs.raza = raza;

	res.render('perros', dogs);
});
module.exports = router;
