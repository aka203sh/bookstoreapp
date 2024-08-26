import React from "react";
import House from "./home/House";
import { Route, Routes } from "react-router-dom";
import Courses from "./courcses/courses";

import Contact from "./component/contact";
import Signup from "./component/Signup";
function App() {
  return (
    <>
    <div className="">
      <Routes>
        <Route path="/" element={<House/>}/>
        <Route path="/course" element={<Courses/>}/>
        
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App

