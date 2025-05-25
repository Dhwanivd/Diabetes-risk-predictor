//this file is responsible to send data from js to python model

const {spawn} = require("child_process");

function getUserData(userData , callback){
    // const pythonProcess = spawn('python' , ['Algorithm/inputDataProccessing.py']);
    const pythonProcess = spawn('python3' , ['Algorithm/model.py']);

    pythonProcess.stdin.write(JSON.stringify(userData));
    pythonProcess.stdin.end();

    pythonProcess.stdout.on('data' , (data)=>{
        console.log(data.toString())
        const prediction = data.toString().trim();
        callback(prediction);
        // diabetic = prediction === '1'; 
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Error: ${data.toString()}`);
    });

    // pythonProcess.on('close', (code) => {
    //     callback(prediction)
    // });
}

module.exports.getUserData = getUserData;
