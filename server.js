

const express = require('express');
const app = express();
const passport = require('./auth');
const db = require('./data');






//app.use(express.json());  // Use express built-in JSON parser

const PORT = process.env.PORT || 3000;

// Middleware function
const logRequest = (req, res, next) => {
    console.log(`${new Date().toLocaleString()} Request Made to: ${req.originalUrl}`);
    next();  // Move on to the next phase
};

app.use(logRequest);

// Initialize Passport
app.use(passport.initialize());

// Authentication middleware
const localAuthMiddleware = passport.authenticate('local', { session: false });

// Home route
app.get('/', function (req, res) {
    res.send('Welcome to my Hotel');
});

// Other routes
app.get('/chicken', (req, res) => {
    let customizedChicken = {
        name: "Tandoori chicken",
        half: "500 Rs",
        full: "800 Rs"
    };
    res.send(customizedChicken);
});

app.get('/students', function(req, res){
    const studentData = {
        name: "Ayush Singh",
        Adm_Id: "BCA23058",
        Roll_No: "231117000286",
        Email: "raghukulayush3268@gmail.com"
    };

    res.send(studentData);
});

app.get('/cars', function(req, res){
    const carsData = ["Maruti", "Suzuki", "TATA", "Mahindra", "Hundayi", "KIA", "Morris Garages"];
    res.send(carsData);
});

app.get('/food', function(req, res){
    res.send("Please order your food");
});



// Using course Router schema

  const CourseRouter = require("./routes/courseRoutes");
  app.use("/course", CourseRouter);



// Using the states schema router

   const StatesRouter = require("./routes/statesRoutes");
   app.use("/states", StatesRouter);
  
  // Using the Countries Schema Router

    const CountriesRouter = require('./routes/countriesRoutes');
    app.use("/countries", CountriesRouter);


    // Cities Schema

     const CitiesRouter = require("./routes/citiesRoutes");
     app.use("/cities", CitiesRouter);


     

// Import routes
// const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the routers
// app.use('/person', localAuthMiddleware, personRoutes);
app.use('/menu', menuItemRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Listening to the server on port ${PORT}`);
});


 
 