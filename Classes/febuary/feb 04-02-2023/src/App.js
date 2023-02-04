import React, { useState, useEffect } from "react"; 
import "./App.scss";

const App = () => { 
  const dummyarr=["harish","dinesh", "chandana", "shiva"];
  const [arr,setArr]=useState(dummyarr)
  return (
    <div>
      {
        arr.map((obj)=>{
          return <h1 >{obj}</h1>
        })
      }
      <button onClick={()=>{
        setArr((prev)=>{
          return prev.filter((val,i)=>i==3)
        })

      }}> delete 3</button>
    </div>
  );
};
export default App;
