import React from "react";
import moment from "moment";
import { useWorkoutContext } from "../Hooks/useWorkoutContext";
import { RiDeleteBin6Line } from "react-icons/ri";

const WorkoutDetails = ({ workout }) => {
   const { dispatch } = useWorkoutContext();
   const handleClick = async () => {
      const res = await fetch("/api/workouts/" + workout._id, {
         method: "DELETE",
      });
      const json = await res.json();
      console.log(json);
      if (res.ok) {
         console.log("inside res.ok", json);
         dispatch({ type: "DELETE_WORKOUT", payload: json.deletedWorkout });
      }
   };
   return (
      <div className="workout" key={workout._id}>
         <h4>{workout.title}</h4>
         <p>
            <strong>Load (kg): </strong> {workout.title}
         </p>
         <p>
            <strong>Reps: </strong> {workout.reps}
         </p>
         <p>
            <strong>Load: </strong> {workout.title}
         </p>
         <p>{moment(workout.createdAt).fromNow()}</p>
         <span onClick={handleClick}>
            <RiDeleteBin6Line size={20} />
         </span>
      </div>
   );
};

export default WorkoutDetails;
