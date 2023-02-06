import React, { useState, useEffect,useRef } from "react";
import "./App.scss";
import Hello from "./Hello";
import Dummy from "./Dummy";
import { Button } from "antd";

const App = () => { 
  const jsjsjsjjsj=useRef();
  useEffect(()=>{ 
    // javascript
  // const tag=document.getElementById("world");
  // console.log(tag.innerHTML)
  // console.log(jsjsjsjjsj.current.innerHTML)

  },[])
  return (
    <div> 
      <h1 ref={jsjsjsjjsj} id="world"> hello world</h1>
    </div>
  );
};
export default App;
