// const { spawn } = require("child_process");
// const express = require("express");
// const router = express.Router();

// const { getUserData } = require('../middlewares/spawn.js')

// router.post('/predict', (req,res)=>{
//     const userData = req.body;
//     getUserData(userData , (prediction)=>{
//         prediction = JSON.parse(prediction)
//         console.log(prediction);
//         // res.json({ diabetic: prediction });
//         res.render("predict/result.ejs" , {prediction})
//     });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const { getUserData } = require('../middlewares/spawn.js');

router.post('/predict', (req, res) => {
    const userData = req.body;

    getUserData(userData, (err, prediction) => {
        if (err) {
            console.error("Model error:", err.message);
            return res.status(500).render("predict/error.ejs", {
                message: "Prediction failed. Please try again later.",
                error: err.message
            });
        }

        try {
            const parsedPrediction = JSON.parse(prediction);
            console.log(parsedPrediction);
            res.render("predict/result.ejs", { prediction: parsedPrediction });
        } catch (e) {
            console.error("Parsing error:", e.message);
            res.status(500).render("predict/error.ejs", {
                message: "Failed to parse model output.",
                error: e.message
            });
        }
    });
});

module.exports = router;
