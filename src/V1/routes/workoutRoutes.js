const express= require('express');
const router = express.Router();
const workoutController = require("../../Controllers/workoutController");

router
.get("/", workoutController.getAllworkouts)
.get("/:_id", workoutController.getOneWorkout)
.post("/createNewDocument",workoutController.createNewWorkout)
.patch("/:_id", workoutController.updateOneWorkout)
.delete("/deleteCocteles", workoutController.deleteOneWorkout)

module.exports= router;