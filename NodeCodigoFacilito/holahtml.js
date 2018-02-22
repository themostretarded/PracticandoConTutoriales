var http = require("http"),
    fs = require("fs");

    http.createServer(function(req,res){
        fs.readFile("./index.html",function(err,html){
            res.writeHead(200,{"Content-Type":"application/json"})
            res.write(JSON.stringify({nombre:"Uriel",username:"uriel"}));
            res.end();
        });
    }).listen(8080);

/*shity
var html = fs.readFileSync("./index.html",function(err,html){
    

    var html = fs.readFile("./index.html",function(err,html){
    res.write(html);
    res.end("se cerro");
});

http.createServer(function(req,res){
    res.write(html);
   res.end();
}).listen(8081);
});
*/