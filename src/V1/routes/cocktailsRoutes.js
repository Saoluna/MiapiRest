const express= require('express');
const router = express.Router();
const cocktailsController = require("../../Controllers/cocktailsController");

router
.get("/", cocktailsController.getAllCocktails)
.get("/:_id", cocktailsController.getOneCocktail)
.post("/createNewDocument",cocktailsController.createNewCocktail)
.patch("/:_id", cocktailsController.updateOneCocktail)
.delete("/:_id", cocktailsController.deleteOneCocktail)

module.exports= router;