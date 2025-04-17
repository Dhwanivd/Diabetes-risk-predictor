const { spawn } = require("child_process");
const express = require("express");
const router = express.Router();

const { getUserData } = require('../middlewares/spawn.js')

router.post('/predict', (req,res)=>{
    const userData = req.body;
    getUserData(userData , (prediction)=>{
        prediction = JSON.parse(prediction)
        console.log(prediction);
        // res.json({ diabetic: prediction });
        res.render("predict/result.ejs" , {prediction})
    });
});

module.exports = router;