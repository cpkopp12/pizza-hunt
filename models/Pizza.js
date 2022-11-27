//DECLARATIONS: mongoose model + schema ---------------------------------------------
const { Schema, model } = require('mongoose');

//PIZZA SCHEMA --------------------------------
const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        dafault: 'Large'
    },
    toppings: []
});

//PIZZA MODEL ------------------------------------
const Pizza = model('Pizza', PizzaSchema);

//EXPORT MODEL -----------------------------------
module.exports = Pizza;