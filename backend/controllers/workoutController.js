const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// get all workout

const allWorkout = async (req, res) => {
   try {
      const workouts = await Workout.find();
      res.status(200).json(workouts);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

// get a single workout

const getWorkout = async (req, res) => {
   const { id } = req.params;
   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
   }
   const workout = await Workout.findById(id);
   res.status(200).json(workout);
};

// create new workout

const createWorkout = async (req, res) => {
   const { title, load, reps } = req.body;

   // add doc to db
   try {
      const workout = await Workout.create({ title, load, reps });
      res.status(200).json(workout);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

// delete a workout

const deleteWorkout = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "not a valid id" });
   }

   try {
      const deletedWorkout = await Workout.findByIdAndDelete({ _id: id });
      if (!deleteWorkout) {
         return res.status(400).json({ mess: "No such Workout" });
      }
      res.status(200).json({
         mess: `workout deleted successfull ${deletedWorkout}`,
      });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

// update a workout

const updateWorkout = async (req, res) => {
   const { id } = req.params;
   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "not a valid id" });
   }
   try {
      const updatedWorkout = await Workout.findOneAndUpdate(
         { _id: id },
         { ...req.body }
      );
      if (!updatedWorkout) {
         res.status(400).json({ error: "workout not found" });
      }
      res.status(200).json(updatedWorkout);
   } catch (error) {
      res.status(400).json({ error: "internal error occured" });
   }
};

module.exports = {
   createWorkout,
   allWorkout,
   getWorkout,
   deleteWorkout,
   updateWorkout,
};
