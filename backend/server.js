const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const workoutRoutes = require("./routes/workouts");

app.use(express.json());

// routes
app.use("/api/workouts", workoutRoutes);

// connect db
mongoose
   .connect(process.env.MONG_URI)
   .then((connectionDetails) => {
      console.log(`mongodb connected ${connectionDetails.connection.host}`);
      app.listen(process.env.PORT || 4001, () => {
         console.log(`server runnig on port num ${process.env.PORT}`);
      });
   })
   .catch((error) => {
      console.log(`error ${error.message}`);
   });
