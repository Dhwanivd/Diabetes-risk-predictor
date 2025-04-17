//this is kind of a diary which is used to map user to an uuid
// const sessionIdToUserMap = new Map(); //agar statefull use kiya hota toh hum setUser aur getuser() functions me 2 input lete setUser(id,user)
const jwt = require("jsonwebtoken");
const secret = "$glucoSage.1";
const User = require("../src/models/users");

function setUser(user){
    // sessionIdToUserMap.set(id,user);
    return jwt.sign({
        _id : User._id,
        email : User.email,
    }, secret);
}

function getUser(token){
    // return sessionIdToUserMap.get(id);
    if (!token) return null;
    try{
        return jwt.verify(token , secret)   
    }
    catch(error){
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
};