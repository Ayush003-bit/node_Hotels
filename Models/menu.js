
const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({

      name: {
         type: String,
         required: true
      },

      price: {
          type: Number,
          default: 0
      },

      taste: {
          type: String,
          enum: ["Spicy", "Sweet", "Sour"]
      },

      is_drink: {
        type: Boolean,
        default: false
      },

      ingredients: {
          type: [String],
          enum: ["Chicken Wings", "Spices", "Sauce"],
      },

      num_Sales: {
          type: Number,
          default: 0
      }


})

const Menu = mongoose.model("menu", menuSchema);

module.exports = Menu;