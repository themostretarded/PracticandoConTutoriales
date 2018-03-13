var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/Proyecto");

var posible_valores = ["M", "F"];
var email_match = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\-\w{2,3})+$/,"coloca un email valido"];
var password_validation ={
    validator:function(p){
        return this.password_confirmation == p;
    },
    message:"Las contraseñas no son iguales"
}

var user_schema = new Schema({
    name: String,
    username: {
        type: String,
        required: true,
        maxlength: [50, "username muy grande"]
    },
    password: {
        type: String,
        minlength: [8, "password muy corto"],
        validate:password_validation
    },
    age: {
        type: Number,
        min: [5, "la edad no puede ser menor que 5"],
        max: [100, "los dioses no son permitidos"]
    },
    email: {
        type: String,
        required: "El correo es obligatorio",
        match:email_match
    },
    date_birth: Date,
    sex: {
        type: String,
        enum: {
            values: posible_valores,
            message: "opcion no valida"
        }
    }
});

user_schema.virtual("password_confirmation").get(function () {
    return this.p_c;
}).set(function (password) {
    this.p_c = password;
});

var User = mongoose.model("User", user_schema);

module.exports.User = User;