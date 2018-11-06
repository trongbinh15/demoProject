var express=require('express');

var router=express.Router();

router.get("/", function(req, res){
    res.json({"message": "this is admin page"});
});


router.get("/signup", function(req,res){
    res.render("signup", {data: {}});
});

router.post("/signup", function(req,res){
    var user= req.body;

    if(user.email.trim().length==0){
        res.render("signup", {data: {error: "Email is require"}
        });
    }

    if(user.passwd != user.repasswd && user.passwd.trim().length!=0){
        res.render("signup", {data: {error: "Password is not match!"}});
    }

    //Inser to db

});

module.exports=router;