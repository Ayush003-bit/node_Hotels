
const mongoose = require('mongoose');

// Define the person schema

const personSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,

    },

    work: {
        type: String,
        enum: ["chef", "waiter", "manager"],
        required: true
        
    },

    mobile: {
         type: Number,
         required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    address: {
          type: String
    },

    salary: {
          type: String,
          required: true
    }

})

// create Person model

const Person = mongoose.model('person', personSchema);
module.exports = Person;