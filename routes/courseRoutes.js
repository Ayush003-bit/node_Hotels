
const express = require("express");
  const router = express.Router();
  const Course = require("../Models/course");
  const BodyParser = require("body-parser");
  router.use(BodyParser.json());

  router.post('/', async(req, res) => {
    try {
        const courseData = req.body;
        const newCourse = new Course(courseData);
        const response = await newCourse.save();

        console.log("Course Data Saved Successfully");
        res.status(200).json(response);
    } catch(err) {
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }
});

router.get("/", async(req, res) => {
    try {
        const courseData = await Course.find();
        console.log("Course Data Fetch Successfully");
        res.status(200).json(courseData);
    } catch(err) {
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }
});

module.exports = router;
