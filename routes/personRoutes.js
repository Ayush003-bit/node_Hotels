
const express = require("express");
const router = express.Router();
const Person = require("./../Models/person");

router.post('/', async (req, res)=>{

    try{
      const data = req.body // Assuming the request body contains the person data
  
      // create a new person document using Mongoose model
  
      const newPerson = new Person(data);
  
      // Save the newPerson to the database
  
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    } catch(err){
          console.log(err);
          res.status(500).json({error: 'Internal Server Error'});
    }
       
     
  })

  router.get('/', async (req, res) =>{
    try{
       const data = await Person.find();
       console.log("data fetched");
       res.status(200).json(data);
    } catch(err){
       console.log(err);
       res.status(500).json({error: 'Internal Server Error'});
    }
  })


  router.get('/:workType', async(req, res)=>{
    try{
         const workType = req.params.workType;
         if(workType == "chef" || workType == "waiter" || workType == "manager") {
              const response = await Person.find({work: workType});
              console.log("Person work data fetched successfully");
              res.status(200).json(response);
         }  else {
             res.status(404).json({error: "Invalid work type"});
         }
    }   catch(err){
       console.log(err);
       res.status(500).json({error: 'Internal Server Error'});
    }
})


router.put('/:id', async(req, res)=>{
     try{
          const personId = req.params.id;
          const updatedPersondata = req.body;
          const response = await Person.findByIdAndUpdate(personId, updatedPersondata, {
              new: true,
              runValidators: true
          })

          if(!response){
               res.status(404).json({error: "Person not found"});
          }

          console.log("Data Updated");
          res.status(200).json(response);
               
     } catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
     }
})


router.delete('/:id', async(req, res)=>{
      try{
            const personId = req.params.id;
            const response = await Person.findByIdAndRemove(personId);

            if(!response){
                res.status(404).json({error: "person not found"});
            }

            console.log("Data deleted successfully");
            res.status(200).json(response);
      }  catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
      }
})

module.exports = router;
