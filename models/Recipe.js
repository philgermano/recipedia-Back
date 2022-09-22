const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
        name: {
            type: String
          },
            image: {
            type: String, 
            default: 'Default image'
          },
            url: {
            type: String
          },
            servings: {
            type: Number
          },
            ingredients: [{ 
                name: {type: String},
                qty: { type: Number},
                measure:{type:Number}
            }],
            instructions: { type: String}
});

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe;