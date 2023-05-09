const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PizzaSchema = new Schema({
  pizzaname: {
    type: String,
  },
  price: {
    type: Number,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
},
 {timestamps:true}
);

const Pizza = mongoose.model("Pizza", PizzaSchema);
module.exports = Pizza;
