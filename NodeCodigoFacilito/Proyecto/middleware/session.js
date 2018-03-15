var User = require("../models/user.js").User;

module.export = function(req,res,next){
    if(req.sesion.user_id){
        res.redirect("/login")
    }
    else{
        User.findById(req.sesion.user_id,function(err,user){
            if(err){
                console.log(err);
                res.redirect("/login");
            }else{
                res.locals = { user: user }
                next();
            }
        });
       
    }
}