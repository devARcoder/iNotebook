const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/?directConnection=true";

const connectToMongo = () =>{
    
    console.log("mongo db has been connected to successfuly.")
}

module.exports = connectToMongo;
