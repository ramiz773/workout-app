import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Workout from "./pages/Workout";
import { Link } from "react-router-dom";

const App = () => {
   return (
      <div>
         <BrowserRouter>
            <Navbar />
            <div className="pages">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/workout" element={<Workout />} />
               </Routes>
            </div>
         </BrowserRouter>
      </div>
   );
};

export default App;
