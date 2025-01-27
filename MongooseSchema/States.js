
  
    const mongoose = require("mongoose");
    const StateSchema = mongoose.Schema({

            name: {
                  type: String,
                  required: true,
            },

            AdministrativeCapital: {
                  type: String,
                  required: true
            },

            LegislativeCapital: {
                  type: String,
                  required: true
            },

            JudicialCapital: {
                  type: String,
                  required: true
            },

            Since: {
                  type: Number,
                  required: true
            }

    })

    const State = mongoose.model("States", StateSchema);

    module.exports = State;