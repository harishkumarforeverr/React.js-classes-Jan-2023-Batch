import React, { useState, useEffect, useRef } from "react";
import "./App.scss";

localStorage.setItem("name","harish");
const App = () => {
 const name=localStorage.getItem("name");
 console.log(name)
  return (
    <div> 
     <input value={name}  />
     
    </div>
  );
};
export default App;
