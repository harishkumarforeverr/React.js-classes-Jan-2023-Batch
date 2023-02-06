import React, { useState, useEffect } from "react";
import "./App.scss";
import Hello from "./Hello";
import Dummy from "./Dummy";
import { Button } from "antd";

const App = () => {
  const [view, setView] = useState("one");

  return (
    <div>
    <Button onClick={()=>{ setView("one")}}> one</Button>
    <Button onClick={()=>{ setView("two")}}> two</Button>
      {
        (view === "one" ? (
          <div>
            {" "}
            <h1> hello world one</h1> 
          </div>
        ) : ( <div> <h1> im not one</h1></div>))
      }
      {
        (view === "two" && (
          <div>
            {" "}
            <h1> hello world two</h1>
          </div>
        ))
      }
    </div>
  );
};
export default App;
