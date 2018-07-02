var http =require('http');
var path=require('path');

var express=require('express');
var app = express();



const paises = {
	"paises":[
	    {"nombre":"Argentina", "codigo":"AR"},
	    {"nombre":"Bolivia", "codigo":"BO"}, 
	    {"nombre":"Brasil", "codigo":"BR"},
	    {"nombre":"Chile", "codigo":"CL"},
	    {"nombre":"Paraguay", "codigo":"PY"},
	    {"nombre":"Uruguay", "codigo":"UY"},
	]
};

//se registra la ruta /css en el express
app.use('/css',express.static(__dirname + '/css'));

//se registra la ruta /jquery en el express
app.use('/pupu',express.static(__dirname + '/jquery'));


app.get('/',function(req, res){
	res.sendFile('index.html', {root: path.join(__dirname, './public')});
});
app.get('/api/paises', function(req, res){
	res.send(paises);
});

// app.get('/', function(req, res){
// 	res.send("Hello world!");
// });

app.listen(3000, function(){
	console.log("Servidor arrancado en el puerto 3000");
});
