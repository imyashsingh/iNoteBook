const mongoose = require('mongoose');
const mongoURL = "mongodb://0.0.0.0:27017/iNotebook";

mongoose.set('strictQuery', false);

const connectToMongo = async ()=>{
    try {
        await mongoose.connect(mongoURL).then(()=>{
        console.log("Database Connected Successfully");
        })
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

module.exports = connectToMongo