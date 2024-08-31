
const mongoose = require("mongoose");


// connect to mongoDB

 

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase",
        
    {
         useNewUrlParser: true,
          useUnifiedTopology: true
    }

);

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