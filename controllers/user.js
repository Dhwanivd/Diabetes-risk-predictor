// const {v4:uuidv4} = require('uuid');
const User = require("../src/models/users");
const {setUser} = require("../service/auth")
const passport = require("passport");

async function handleUserSignup(req,res){
    // const {name , email, password} = req.body;
    try{
        const {username , email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            req.flash("error", "user already exists! use another email");
            res.redirect("/home");
        }
        else{
            const newUser = new User({email ,username});
            const registeredUser = await User.register(newUser, password);
            console.log(registeredUser);
            req.flash("success", "Registration Successful! You can login now");
            res.redirect("/home");
        }
        
    }catch(e){
        req.flash("error", e.message);
        res.redirect("/home")
    }
}



module.exports = {
    handleUserSignup,
};