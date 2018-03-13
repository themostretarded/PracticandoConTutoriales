var express = require("express");
var bodyParser = require("body-parser");
var User = require("./models/user.js").User;
var app = express();

app.use("/public", express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "jade");

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/login", function (req, res) {
    User.find(function (err, doc) {
        console.log(doc);
        res.render("login");
    });
});

app.post("/user", function (req, res) {
    
    var user = new User({
        email: req.body.correo,
        password: req.body.password,
        password_confirmation: req.body.password_confirmation,
        username: req.body.username
    });
    console.log(user.password_confirmation);

    user.save(function (err) {
        if(err){
            console.log(String(err));
        }
        res.send("Ya se guardo los datos");
    });

    user.save().then(function(us){
        res.send("guardamos el usuario exitosamente");
         },function(err){
             if(err){
                 console.log(String(err));
                 res.send("no pudimos guardar la informacion");
             }
         });

});

app.listen(3000);
console.log("Corriendo");