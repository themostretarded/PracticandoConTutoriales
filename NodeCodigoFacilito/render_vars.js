var http = require("http"),
    fs = require("fs");

    http.createServer(function(req,res){
        fs.readFile("./index.html",function(err,html){
            var html_string = html.toString();

            var variables = html_string.match( /[^\{\}]+(?=\})/g) );

            var nombre = "VaribleNombre";

            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(JSON.stringify({nombre:"Uriel",username:"uriel"}));
            res.end();
        });
    }).listen(8080);