
   
// This is a server.js file



const express = require('express')
const app = express()
 const db = require('./data');
 
 
 const Course = require('./Models/course');

 const bodyParser = require('body-parser');

 app.use(bodyParser.json());

//   Lect no:- 7



////

app.get('/', function (req, res) {
  res.send('Welcome to my Hotel');
})

app.get('/chicken', (req, res)=>{

      let customizedChicken = {
          name: "Tandoori chicken",
          half: "500 Rs",
          full: "800 Rs"
      }
      res.send(customizedChicken);
})














app.post('/course', async(req, res)=>{
     try{
          const courseData = req.body;
          const newCourse = new Course(courseData);
          const response = await newCourse.save();

          console.log("Course Data Saved Successfully");

          res.status(200).json(response);
     }  catch(err){
           console.log(err);
           res.status(500).json({error: "Internal Server Error"});
     }
})

app.get("/course", async(req, res)=>{
        try{
           const courseData = await Course.find();
           console.log("Course Data Fetch Scuccessfully");
           res.status(200).json(courseData);
        } catch(err){
             console.log(err);
             res.status(500).json({error: "Internal Server Error"});

        }
})

// Import the routes file 

  const personRoutes = require('./routes/personRoutes');
   const menuItemRoutes = require('./routes/menuItemRoutes');


  // uses the router

  app.use('/person', personRoutes);
  app.use('/menu', menuItemRoutes);








app.listen(3000, ()=>{
  console.log("listening to the server on the port 3000");
});



