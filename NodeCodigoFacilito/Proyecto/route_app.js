var express = require ("express");
var router = express.Router();

router.get("/",function(req,res){
    res.render("app/home");
});

router.get("/imagenes/new",function(req,res){
    res.render("/app/imagenes/new")
});
router.get("/imagenes/:id/edit",function(req,res){});

router.route("/image/:id")
.get(function(req,res){

})
.put(function(req,res){
    
})
.delete(function(req,res){
    
});

router.route("/image/:id")
.get(function(req,res){

})
.post(function(req,res){

});

module.exports = router;