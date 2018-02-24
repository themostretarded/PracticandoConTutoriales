var http = require("http"),
    fs = require("fs");

    http.createServer(function(req,res){

        if(req.url.indexOf("favicon.ico") > 0 ){return;}

        fs.readFile("./index.html",function(err,html){

            var html_string = html.toString();
            var arreglo_parametros = [],parametros = {};
            var variables = html_string.match(/[^\{\}]+(?=\})/g);
            var nombre = "Nombre en variable";

            if(req.url.indexOf("?") > 0){
                // /?nombre=nombre => nombres['/','nombre=uriel']
                var url_data = req.url.split("?");
                var arreglo_parametros = url_data[1].split("&");
                // [nombre=nombre,data=algo]
            }

            for(var i = arreglo_parametros.length - 1 ;i >= 0 ;i--){
                var parametro = arreglo_parametros[i];
                //nombre = nombre

                var param_data= parametro.split("=");
                //[nombre,nombre]
                parametros[param_data[0]] = param_data[1];
                //{nombres: nombre}
            }

           
            for(var i = variables.length-1;i>=0;i--){
                
                var value = eval(variables[i]);

                html_string = html_string.replace("{"+varaibles[i]+"}",parametros[variables[i]]);
            }
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(html);
            res.end();
        });
    }).listen(8080);
