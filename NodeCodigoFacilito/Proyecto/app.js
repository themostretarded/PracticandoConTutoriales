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
        password: req.body.password
    });

    user.save(function () {
        res.send("Ya se guardo los datos");
    });

})

app.listen(3000);
console.log("Corriendo");