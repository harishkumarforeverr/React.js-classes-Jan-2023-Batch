import React, { useState, useEffect } from "react";
import "./App.scss";
import Hello from "./Hello";
import Dummy from "./Dummy";

const App = () => {
  const [view, setView] = useState("");

  useEffect(() => {
    setView(Math.random());
  }, [view]);
  return (
    <div>
      {view} 
    </div>
  );
};
export default App;
