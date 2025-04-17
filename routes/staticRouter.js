const express = require("express");
const { restrictToLoggedinUserOnly } = require("../middlewares/auth");
const passport = require("passport");

const router = express.Router();
console.log("connected");
router.get("/home" , (req,res)=>{
    return res.render("client/index.ejs");
});

router.get("/signup" , (req,res)=>{
    return res.render("forms/signup");
});
  
router.get("/login" , (req,res)=>{
    return res.render("forms/login");
});
  
router.get("/predict" , (req,res)=>{
    if(!req.isAuthenticated()){
        req.flash("error","Please log in first");
        res.redirect("/home")
    }
    return res.render("predict/predict")
});

router.get("/logout" , (req,res,next)=>{
    req.logout((err) =>{
        if (err){
            next(err);
        }
        req.flash("success","You are logged out!");
        return res.redirect("/home");
    })
})

// router.get("/result" , (req,res)=>{
//     res.render("predict/result.ejs");
// })
module.exports = router;