const express = require("express")
const router = express.Router()

const ctrls = require("../controllers")

// dont put the parans nikki! :) 
router.get("/", ctrls.recipes.index)
router.post("/", ctrls.recipes.create)
router.delete("/:id", ctrls.recipes.destroy)
router.put("/:id", ctrls.recipes.update)

module.exports = router;