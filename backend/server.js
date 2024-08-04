const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const workoutRoutes = require("./routes/workouts");

// express init
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
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
