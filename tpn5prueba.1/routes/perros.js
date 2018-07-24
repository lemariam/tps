var express = require('express');
var router = express.Router();

var perros = {
	"perros":[
		{
			"id":1,
			"nombre":"pepe",
			"raza": "setter",
			"tamano":"medio",
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
			"raza": "pastor escoses",
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
router.get('/:page', function(req, res, next) {
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
router.get('/:page/fav/:id', function(req, res, next) {
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
router.get('/:page/nofav/:id', function(req, res, next) {
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

module.exports = router;
