var http = require("http"),
    fs = require("fs");

var html = fs.readFile("./index.html",function(err,html){
    res.write(html);
    res.end("se cerro");
});

http.createServer(function(req,res){
   
}).listen(8081);

/*shity
var html = fs.readFileSync("./index.html",function(err,html){
    
});
*/