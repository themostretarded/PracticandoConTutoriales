var http = require("http");

var manejador = function(solicitud, respuesta){
    console.log("llego");
    respuesta.end("Hola mundo");
};

var servidor = http.createServer(manejador);

servidor.listen(3011);