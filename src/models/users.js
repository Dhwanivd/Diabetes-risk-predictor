const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
})

userSchema.plugin(passportLocalMongoose);
// new mongoose.model("user" , userSchema);

// module.exports = mongoose.model('User',userSchema);
module.exports = mongoose.model('User', userSchema);
