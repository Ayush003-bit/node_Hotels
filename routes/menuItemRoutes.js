
const express = require("express");
const router = express.Router();
const Menu = require("./../Models/menu");

router.post('/', async(req, res)=>{
    try{
        const menuData = req.body; 

        const newData = new Menu(menuData);

        const response = await newData.save();
        res.status(200).json(response);
    }   
       catch (err){
            console.log(err);
            res.status(500).json({error: "Internal Server Error"});
       }
})

router.get('/', async(req, res)=>{
    try{
         const menuData = await Menu.find();
         console.log("Data fetched");
         res.status(200).json(menuData);
    }   catch(err){
             console.log(err);
             res.status(500).json({error: "Internal Server Error"});
    }
})

router.put('/:id', async(req, res)=>{
       try{
           const menuId = req.params.id;
           const updatedMenuData = req.body;
           const response = await Menu.findByIdAndUpdate(menuId, updatedMenuData, {
               new: true,
               runValidators: true
           })

           if(!response){
              res.status(404).json("data not found");
           }

           console.log("Menu Data Updated");
           res.status(200).json(response);
       }   catch(error) {
           console.log("error");
           res.status(500).json({error: "Internal Server Error"});
       }
})

router.delete('/:id', async(req, res)=>{
       try{
           const menuId = req.params.id;
           const response = await Menu.findByIdAndRemove(menuId);

           if(!response){
              res.status(404).json("menu not found");
           }
           console.log("Menu Data deleted Successfully");
           res.status(200).json({message: "menu deleted succcessfully"});
       }   catch(err) {
             console.log(err);
             res.status(500).json({error: "Internal Server Error"});
       }
})

// comment added for testing purpose


module.exports = router;

