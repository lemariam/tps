var express = require('express');
var router = express.Router();

var razas = ["Setter","Huskie","Gremlin","Chihuahua","Pastor Escoces","Mucuchies"];
	

/* GET users listing. */
//router.get('/:pag', function(req, res, next) {
router.use(express.json());
router.get('/', function(req, res, next) {
	res.send(razas);
});

module.exports = router;
