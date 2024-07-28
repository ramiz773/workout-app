import React, { useState } from "react";
import { useEffect } from "react";
import WorkoutDetails from "../component/WorkoutDetails";
import WorkoutForm from "../component/WorkoutForm";
import { useWorkoutContext } from "../Hooks/useWorkoutContext";

const Home = () => {
   const { workouts, dispatch } = useWorkoutContext();
   useEffect(() => {
      const fetchWorkouts = async () => {
         const res = await fetch("/api/workouts");
         const json = await res.json();
         if (res.ok) {
            dispatch({ type: "SET_WORKOUTS", payload: json });
         }
      };

      fetchWorkouts();
   }, [dispatch]);
   return (
      <div className="home">
         <div className="workouts">
            {workouts &&
               workouts.map((workout) => {
                  return <WorkoutDetails key={workout._id} workout={workout} />;
               })}
         </div>
         <WorkoutForm />
      </div>
   );
};

export default Home;
