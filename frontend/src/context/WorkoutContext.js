import React, { useReducer } from "react";
import { createContext } from "react";

export const WorkoutContext = createContext();
const workoutsReducer = (state, action) => {
   switch (action.type) {
      case "SET_WORKOUTS":
         return {
            workouts: action.payload,
         };

      case "WORKOUT_CREATED":
         return {
            workouts: [action.payload, ...state.workouts],
         };

      case "DELETE_WORKOUT":
         console.log(
            "inside Delete_workout swicth statement",
            action.payload._id
         );
         return {
            workouts: state.workouts.filter(
               (workout) => workout._id !== action.payload._id
            ),
         };

      default:
         return state;
   }
};
const WorkoutContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });
   return (
      <WorkoutContext.Provider value={{ ...state, dispatch }}>
         {children}
      </WorkoutContext.Provider>
   );
};

export default WorkoutContextProvider;
