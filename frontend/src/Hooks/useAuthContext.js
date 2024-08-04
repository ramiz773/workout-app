import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function useAuthContext() {
   const context = useContext(AuthContext);
   if (!context) {
      throw Error("useworkoutContext must be inside an WorkoutContextProvider");
   }
   return context;
}

export default useAuthContext;
