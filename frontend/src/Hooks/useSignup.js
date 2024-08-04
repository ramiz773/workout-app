import { useState } from "react";
import useAuthContext from "./useAuthContext";

export const useSignup = () => {
   const [error, setError] = useState(null);
   const [laoding, setLoading] = useState(false);
   const { dispatch } = useAuthContext();

   const signup = async (email, password) => {
      setLoading(true);
      setError(null);

      const response = await fetch("http://localhost:4000/api/user/signup", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ email, password }),
      });
      const json = await response.json();

      if (!response.ok) {
         setLoading(false);
         setError(json.error);
      }
      if (response.ok) {
         console.log(json);
         // save the user to local storage
         localStorage.setItem("user", JSON.stringify(json));
         //  update the authContext
         dispatch({ type: "LOGIN", payload: json });
         setLoading(false);
      }
   };
   return { laoding, error, signup };
};
