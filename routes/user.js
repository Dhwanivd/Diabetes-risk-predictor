const express = require("express");
const passport = require("passport");

const { handleUserSignup } = require("../controllers/user");

const router = express.Router();

router.post('/signup' , handleUserSignup);

router.post('/login' ,
passport.authenticate("local", {
    failureRedirect: "/home",
    failureFlash:true,
}),
async (req,res)=>{
    req.flash("success" , `Hey ${req.body.username}! Welcome to GlucoSage!`);
    res.redirect("/home");
}
);
// router.get("/logout" , handleUserLogOut);

module.exports = router;
