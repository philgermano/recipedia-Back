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
          //Make sure this works. Adding multiple objects. does it spawn objects or do we need to list more objects. If not hard we should concatonate the parts into one instructions.  
            ingredients: [{ 
                name: {type: String},
                measure:{type: String},
                inStock: {type: Boolean} 
            }],
            instructions: { 
              type: String
            },
            Tags: {
              type: String
            },
            video: {
              type: String
            },
            style: {
              type: String
            },
            catagory: {
              type: String
            }

            
});

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe;