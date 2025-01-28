
  const express = require("express");
    const router = express.Router();
    const Cities = require("../MongooseSchema/Cities");
    const BodyParser = require("body-parser");
    router.use(BodyParser.json());

//  Posting data to the database

    router.post("/", async(req, res)=>{
        try {
            const CitiesData = req.body;
            const newCities = new Cities(CitiesData);
            const response = await newCities.save();

            console.log("Cities Data is saved Successfully");
            res.status(200).json(response);
        }  catch(err) {
             console.log(err);
             res.status(500).json({error: "Internal Server Error"});
        }
    })

    router.get("/", async(req, res)=>{
          try{
                const CitiesData =  await Cities.find();
                console.log("Cities Data is Fetch Successfully");
                res.status(200).json(CitiesData);
          }  catch(err) {
                console.log(err);
                res.status(500).json({error: "Internal Server Error"});
          }
    })

    router.put("/:id", async(req, res)=>{
        try{
              const citiesId = req.params.id;
              const updateCitiesData = req.body;
              const UpdatedCities = await Cities.findByIdAndUpdate(citiesId, updateCitiesData, {
                     new: true,
                     runValidators: true
              });

              if(!UpdatedCities) {
                    res.status(404).json({error: "Cities Data not Found"});
              }

              console.log("Cities Data Updated");
              res.json(UpdatedCities);
        }  
        catch(err) {
              console.log(err);
              res.status(500).json({error: "Internal Server Error"});
        }
    })

    router.delete("/:id", async(req, res)=>{
         try{
              const citiesId = req.params.id;
              const response = await Cities.findByIdAndDelete(citiesId);

              if(!response) {
                    res.status(404).json({error: "Cities Data Not Found"});
              }

              console.log("Cities Data Deleted");
              res.status(200).json({message: "Cities Data Deleted Successfully"});
         }  
         catch(err) {
              console.log(err);
              res.status(500).json({error: "Internal Server Error"});
         }
    })

    module.exports = router;


