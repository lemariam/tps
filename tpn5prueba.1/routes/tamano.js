var express = require('express');
var router = express.Router();

var tamano = ["pequeno","mediano","grande"];
	

/* GET users listing. */
//router.get('/:pag', function(req, res, next) {
router.use(express.json());
router.get('/', function(req, res, next) {
	res.send(tamano);
});

module.exports = router;
