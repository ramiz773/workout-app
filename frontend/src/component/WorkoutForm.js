import React, { useState } from "react";
import { useWorkoutContext } from "../Hooks/useWorkoutContext";

const WorkoutForm = () => {
   const { dispatch } = useWorkoutContext();
   const [title, setTitle] = useState("");
   const [load, setLoad] = useState("");
   const [reps, setReps] = useState("");
   const [error, seteError] = useState(null);
   const [emptyFields, setEmptyFields] = useState([]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const workout = { title, load, reps };

      const response = await fetch("/api/workouts", {
         method: "POST",
         body: JSON.stringify(workout),
         headers: {
            "Content-Type": "application/json",
         },
      });
      const json = await response.json();
      if (!response.ok) {
         seteError(json.error);
         setEmptyFields(json.emptyFields);
      }
      if (response.ok) {
         setTitle("");
         setLoad("");
         setReps("");
         seteError(null);
         setEmptyFields([]);
         dispatch({ type: "WORKOUT_CREATED", payload: json });
         console.log(`new workout added ${json}`);
      }
   };
   return (
      <form className="create" onSubmit={handleSubmit}>
         <h3>Add a new workout</h3>
         <label>Excersize Title:</label>
         <input
            className={emptyFields.includes("title") ? "error" : ""}
            type="text"
            onChange={(e) => {
               setTitle(e.target.value);
            }}
            value={title}
         />

         <label>Load (in kg):</label>
         <input
            className={emptyFields.includes("load") ? "error" : ""}
            type="number"
            onChange={(e) => {
               setLoad(e.target.value);
            }}
            value={load}
         />
         <label>Reps:</label>
         <input
            className={emptyFields.includes("reps") ? "error" : ""}
            type="number"
            onChange={(e) => {
               setReps(e.target.value);
            }}
            value={reps}
         />
         <button>Add Workout</button>
         {error && <div className="error">{error}</div>}
      </form>
   );
};

export default WorkoutForm;
