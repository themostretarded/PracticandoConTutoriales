var http = require("http"),
    fs = require("fs");

    http.createServer(function(req,res){
        fs.readFile("./index.html",function(err,html){
            var html_string = html.toString();

            var variables = html_string.match(/[^\{\}]+(?=\})/g);
            var nombre = "VaribleNombre";

            //variables ['nombres']
            for(var i = variables.length-1;i>=0;i--){
                /**Lo ejecutamos como codigo de javscript para
                 * obtener el valor de dicha variables
                */
                var value = eval(variables[i]);

                //Reemplazar el contenido con llaves{x} por su valor correspondiente
                html_string = html_string.replace("{"+variables[i]+"}",value);
            }
            //mandamos el contenido
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(html);
            res.end();
        });
    }).listen(8080);
    //res.write(JSON.stringify({nombre:"Uriel",username:"uriel"}));