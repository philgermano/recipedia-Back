const db = require('../models');

const index = (req, res) => {
  db.Recipe.find({}, (error, recipes) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      recipes,
      requestedAt: new Date().toLocaleString()
    });
  });
};

const search = (req, res) => {
  db.Recipe.findById(req.params.id, (error, recipe) => {
    console.log(req.params.id)

    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      recipe
    });
  })
  };


const create = (req, res) => {
  db.Recipe.create(req.body, (error, createdRecipe) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json(createdRecipe); //  .json() will send proper headers in response so client knows it's json coming back
  });
  
};

const destroy = (req, res) => {
  db.Recipe.findByIdAndDelete(req.params.id, (error, deletedRecipe) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      message: `${deletedRecipe.name} deleted successfully`
    });
  });
};

const update = (req, res) => {
  db.Recipe.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    { new: true },
    (error, updatedRecipe) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json(updatedRecipe)
  });
};


module.exports = {
    index,
    create,
    destroy,
    update,
    search
}
