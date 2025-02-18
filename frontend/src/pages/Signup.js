import React, { useState } from "react";
import { useSignup } from "../Hooks/useSignup";

const Signup = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const { error, laoding, signup } = useSignup();

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(email, password);
      await signup(email, password);
   };
   return (
      <form className="signup" onSubmit={handleSubmit}>
         <h3>Sign up</h3>
         <label>Email:</label>
         <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
         />
         <label>Password:</label>
         <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
         />
         <button disabled={laoding}>Signup</button>
         {error && <div className="error">{error}</div>}
      </form>
   );
};

export default Signup;
