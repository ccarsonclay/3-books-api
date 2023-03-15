// Dependencies
const express = require('express')
const mongoose = require('mongoose')

// Configuration
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

mongoose.connect(process.env.MONGO_URI,
    {useNewUrlParser: true, 
       useUnifiedTopology: true},       
       
       
)










app.listen(PORT, () => {
    console.log("I AM ALIVE or Greeting")
})