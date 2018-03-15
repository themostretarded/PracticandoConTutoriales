var express = require("express");
var bodyParser = require("body-parser");
var User = require("./models/user.js").User;
var session = require("express-session");
var router_app = require("./route_app");
var session_middleware = require("./middleware/session");

var app = express();

app.use("/public", express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: "123blabla",
    resave: false,
    saveUninitialized: false
}));



app.set("view engine", "jade");

app.get("/", function (req, res) {
    console.log(req.session.user_id);
    res.render("index");
});

app.get("/signup", function (req, res) {
    User.find(function (err, doc) {
        console.log(doc);
        res.render("signup");
    });
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.post("/session", function (req, res) {
    User.findOne({
        email: req.body.correo,
        password: req.body.password
    }, function (err, user) {
        req.session.user_id = user._id;
        res.redirect("/app");
    })
});

app.use("/app",session_middleware);
app.use("/app",router_app);

app.listen(3000);
console.log("Corriendo");