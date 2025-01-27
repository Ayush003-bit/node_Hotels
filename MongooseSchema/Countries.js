
  const Mongoose = require("mongoose");
  const CountriesSchema = Mongoose.Schema({
       name: {
           type: String,
           required: true
       },

       Capital: {
          type: String,
          required: true
       },

       Currency: {
          type: String,
          required: true
       }
  });

  const Countries = Mongoose.model("countries", CountriesSchema);
  module.exports = Countries;