var homeController = function(server){
    console.log("home controller listo");

    server.route('/')
    .get(function(req,res){
        res.render('home/index');
    });
};

module.exports = homeController;