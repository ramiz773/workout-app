import useAuthContext from "./useAuthContext";
import { useWorkoutContext } from "./useWorkoutContext";

const useLogout = () => {
   const { dispatch } = useAuthContext();
   const { dispatch: workoutDispatch } = useWorkoutContext();

   // dispatch logout aciton
   const logout = () => {
      // remove user form local storage
      localStorage.removeItem("user");
      // dispatch logout function
      dispatch({ type: "LOGOUT" });
      workoutDispatch({ type: "SET_WORKOUTS", payload: null });
   };

   return logout;
};

export default useLogout;
