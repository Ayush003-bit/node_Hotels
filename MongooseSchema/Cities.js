
  const Mongoose = require("mongoose");
  const CitiesSchema = Mongoose.Schema({
       name: {
          type: String,
          required: true
       },

         River: {
              type: String,
              required: true
         },

         City: {
              type: String,
              required: true
         },

         River: {
             type: String,
             required: true
         }
  });

  const Cities = Mongoose.model("cities", CitiesSchema);
  module.exports = Cities;