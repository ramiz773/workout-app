const express = require("express");
const router = express.Router();
const {
   createWorkout,
   allWorkout,
   getWorkout,
   deleteWorkout,
   updateWorkout,
} = require("../controllers/workoutController");
const requireAuth = require("../middlewires/requireAuth");

// require auth for all workout routes
router.use(requireAuth);
// get all workout
router.get("/", allWorkout);

// get a single workout
router.get("/:id", getWorkout);

// post new workout
router.post("/", createWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);

//update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
