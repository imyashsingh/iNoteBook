const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017"

mongoose.set('strictQuery', false);

const connectToMongo = ()=>{
    mongoose.connect(mongoURL, ()=>{
        console.log("connected to mongo successfully")
    })
}

module.exports = connectToMongo