var homeController = function(server){
    console.log("home controller listo");

    server.route('/')
    .get(function(req,res){
        res.send('hola mundo');
    });
};

module.exports = homeController;