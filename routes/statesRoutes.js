
  const express = require("express");
  const router = express.Router();
  const States = require("../MongooseSchema/States");
  const BodyParser = require("body-parser");
const { findByIdAndUpdate } = require("../Models/person");
  router.use(BodyParser.json());


  router.post("/", async(req, res)=>{
    try {
        const StatesData = req.body;
        const newStates = new States(StatesData);

        const response = await newStates.save();

        console.log("States Data is saved");
        res.status(200).json(response);
    }  
      catch(err) {
            console.log(err);
            res.status(500).json({error: "Internal Server Error"});
      }
})

router.get("/", async(req,res)=>{

     try{
      const StatesData = await States.find();
      console.log("States Data is Fetch Successfully");
      res.status(200).json(StatesData);
     }  

     catch(err) {
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
     }
     
})

router.put("/:id", async(req, res)=>{
     try{
         const statesId = req.params.id;
         const updateStatesData = req.body;
         const updatedStates = await States.findByIdAndUpdate(statesId, updateStatesData, {
              new: true,
              runValidators: true
         });

         if(!updatedStates) {
          res.status(404).json({error: "States not Found"});
         }

           console.log("States Data Updated");
           res.json(updatedStates);
     }  
       catch(err) {
          console.log(err);
          res.status(500).json({error: "Internal Server Error"});
       }
})

router.delete("/:id", async(req, res)=>{
     try{
        const statesId = req.params.id;
        const response = await States.findByIdAndDelete(statesId);

        if(!response){
          res.status(404).json({error: "States Not found"});
      }  

        console.log("States Data Deleted");
        res.status(200).json({message: "States Data Deleted Successfully"});
     }  catch(err) {
         console.log(err);
         res.status(500).json({error: "Internal Server Error"});
     }

    
})

module.exports = router;