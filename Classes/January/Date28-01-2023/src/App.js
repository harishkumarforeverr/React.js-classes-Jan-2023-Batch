import React, { useState } from "react";
import Hello from "./Hello";
import "./App.scss";

const App = () => {
 const [count,setCount]=useState(1);
 
  return (
    <div> 
    <select
    onChange={(e)=>{
      // console.log(e)
      const value=e.target.value;
      console.log(value)
      setCount(value)

    }}
    >
      <option value={1}>one</option>
      <option value={2}>2</option>
      <option value={3}>three</option>
      <option value={4}>4</option>
    </select>
    <div 
    style={{
      width:"5rem",
      height:"5rem",
      backgroundColor:count==1?"red":"green"

    }}
    >
    im a udvujsjg
    </div>

    {
      count==1?<h1> im one</h1>: <h1>im not</h1>
    }
    {
      count==2&&<h1> im two</h1>
    }
    {
      count==3&&<h1> im three</h1>
    }
    {
      count==4&&<h1> im four</h1>
    }
    </div>
  );
};
export default App;
