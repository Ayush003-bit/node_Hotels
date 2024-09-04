
const mongoose = require("mongoose");


// connect to mongoDB

 

mongoose.connect(//"mongodb://127.0.0.1:27017/mydatabase",
                   mongoUrl,
    {
         useNewUrlParser: true,
          useUnifiedTopology: true
    }

);

const mongoUrl = "mongodb+srv://raghukulayush003:shivpal@9569@cluster0.mrr6c.mongodb.net/"

// Handle Connection Event 

   const db = mongoose.connection;

  // Define event listeners for database connection


  db.on("connected", ()=>{
      console.log("Connected to MongoDB server");
  })

  db.on('error', (err)=>{
      console.error("MongoDB connection error", err);
  })

  db.on('disconnected', ()=>{
       console.log("MongoDB disconnected");
  })

  // Export database conncetion

  module.exports = db;