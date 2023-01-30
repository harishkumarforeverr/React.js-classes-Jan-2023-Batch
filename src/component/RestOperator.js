import React, { useState, useEffect } from "react";
import Hello from "./Hello";
import "./App.scss";

const App = () => {
  const fun1=(a,b,...harish)=>{
    console.log(a,b,harish)
  }
  // 
  useEffect(()=>{ fun1(1,2,4,5,6,7,8,9,"harishsss", {ha:12}) },[])
  return (
    <div>
      <h1  >hello world</h1>
    </div>
  );
};
export default App;
