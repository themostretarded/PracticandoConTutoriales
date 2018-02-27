function parse(req) {

    var arreglo_parametros = [],
        parametros = {};
    if (req.url.indexOf("?") > 0) {
        // /?nombre=nombre => nombres['/','nombre=uriel']
        var url_data = req.url.split("?");
        var arreglo_parametros = url_data[1].split("&");
        // [nombre=nombre,data=algo]
    }
    for (var i = arreglo_parametros.length - 1; i >= 0; i--) {
        var parametro = arreglo_parametros[i];
        //nombre = nombre

        var param_data = parametro.split("=");
        //[nombre,nombre]
        parametros[param_data[0]] = param_data[1];
        //{nombres: nombre}
    }
    return parametros;
}
module.exports.parse = parse;Ñ