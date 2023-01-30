import React, { useState, useEffect } from "react";
import Hello from "./Hello";
import Dummy from "./Dummy";
import "./App.scss";

const App = () => {
  const imfun1 = (a) => {
    console.log("im called",a);
  };
  return (
    <div>
      <Dummy harish11={imfun1} />
    </div>
  );
};
export default App;
