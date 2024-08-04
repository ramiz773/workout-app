import { useState } from "react";
import useAuthContext from "./useAuthContext";

export const useLogin = () => {
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
   const { dispatch } = useAuthContext();

   const login = async (email, password) => {
      setLoading(true);
      setError(null);

      const response = await fetch("http://localhost:4000/api/user/login", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ email, password }),
      });

      const json = await response.json();
      console.log(json);
      if (!response.ok) {
         setError(json.error);
         setLoading(false);
      }
      if (response.ok) {
         //save to local storage
         localStorage.setItem("user", JSON.stringify(json));

         //upatea auth context
         dispatch({ type: "LOGIN", payload: json });
         setLoading(false);
      }
   };

   return { error, loading, login };
};
