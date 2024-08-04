import useAuthContext from "./useAuthContext";

const useLogout = () => {
   const { dispatch } = useAuthContext();

   // dispatch logout aciton
   const logout = () => {
      // remove user form local storage
      localStorage.removeItem("user");
      // dispatch logout function
      dispatch({ type: "LOGOUT" });
   };

   return logout;
};

export default useLogout;
