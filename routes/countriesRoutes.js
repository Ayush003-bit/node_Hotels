
  const express = require("express");
  const router = express.Router();
  const Countries = require("../MongooseSchema/Countries");
  const BodyParser = require("body-parser");
  router.use(BodyParser.json());


  router.post("/", async(req, res)=>{
    try{
       const CountriesData = req.body;
       const newCountries = new Countries(CountriesData);
       const response = await newCountries.save();

       console.log("Countries Data is saved successfully");
       res.status(200).json(response);
    }  catch(err) {
       console.log(err);
       res.status(500).json({error: "Internal Server Error"});
    }
})

router.get("/", async(req, res)=>{
    try{
       const countriesData = await Countries.find();
       console.log("Countries Data Fetch Successfully");
       res.status(200).json(countriesData);
    } catch(err) {
           console.log(err);
           res.status(500).json({error: "Internal Server Error"});
    }
})

router.put("/:id", async(req, res)=>{
      try{
           const CountriesId = req.params.id;
           const updateCountriesData = req.body;
           const UpdatedCountries = await Countries.findByIdAndUpdate(CountriesId, updateCountriesData, {
                 new: true,
                 runValidators: true
           })

           if(!UpdatedCountries){
              res.status(404).json({error: "Countries Data not Found"});
           }
            console.log("Countries Data Updated");
           res.json(UpdatedCountries);
      }  
      catch(err)
      {
           console.log(err);
           res.status(500).json({error: "Internal Server Error"});
      }
})


  router.delete("/:id", async(req, res)=>{
      try {
           const countriesId = req.params.id;
           const response = await Countries.findByIdAndDelete(countriesId);

             if(!response){
                  res.status(404).json({error: "Countries not Found"});
             } 

             console.log(" Countries Data Deleting Successfully");
             res.status(200).json({message: "Countries Data Deleting Successfully"});
      }  catch(err) {
           console.log(err);
           res.status(500).json({error: "Internal Server Error"});
      }
  })

module.exports = router;