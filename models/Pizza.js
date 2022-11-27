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
    toppings: [],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
});
//get total comment count on retrieval
PizzaSchema.virtual('commentCount').get(function() {
    return this.comments.length;
})

//PIZZA MODEL ------------------------------------
const Pizza = model('Pizza', PizzaSchema);

//EXPORT MODEL -----------------------------------
module.exports = Pizza;