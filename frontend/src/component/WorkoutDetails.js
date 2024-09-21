import React from "react";
import moment from "moment";
import { useWorkoutContext } from "../Hooks/useWorkoutContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAuthContext from "../Hooks/useAuthContext";

const WorkoutDetails = ({ workout }) => {
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutContext();
  const handleDelete = async () => {
    if (!user) {
      return;
    }
    const res = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await res.json();
    console.log(json);
    if (res.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
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
      <span onClick={handleDelete} className="dlt-workout">
        <RiDeleteBin6Line size={20} />
      </span>
    </div>
  );
};

export default WorkoutDetails;
