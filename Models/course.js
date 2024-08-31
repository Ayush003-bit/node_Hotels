
const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
       name: {
           type: String,
           required: true
       },

         branch: {
              type: String,
              required: true,
              enum: ["CSE","IT", "ECE", "EE", "ME", "CE"]
         },

         duration: {
              type: String,
              required: true
         },

         courseType: {
              type: String
         },

         semesters: {
              type: Number,
              required: true
         },

         Fees: {
              type: Number,
              required: true
         }
})

  const Course = mongoose.model("course", courseSchema);
  module.exports = Course;