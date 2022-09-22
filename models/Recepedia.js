const mongoose = require('mongoose');

const recipediaSchema = new mongoose.Schema({
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

const Recipedia = mongoose.model('Recipedia', recipediaSchema)

module.exports = Recipedia;