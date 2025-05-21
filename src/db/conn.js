const mongoose = require('mongoose');
main()
    .then( ()=>{
        console.log("connection successful");
    })
    .catch( (err)=> console.log(err));

async function main(){
//  await mongoose.connect('mongodb://127.0.0.1:27017/GlucoSage');
    await mongoose.connect('mongodb+srv://dhwani24:<*24122003dD>@cluster0.zsvhh0y.mongodb.net/');

}
