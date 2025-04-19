
require('dotenv').config();

const mongoose = require('mongoose');

const dbConnect = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.xwm2j.mongodb.net/${process.env.DB_NAME }?retryWrites=true&w=majority&appName=Cluster0`)
}


module.exports = {  
    dbConnect 
}