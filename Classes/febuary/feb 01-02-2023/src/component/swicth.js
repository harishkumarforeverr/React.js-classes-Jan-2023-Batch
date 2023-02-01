import React, { useState, useEffect } from "react";
import Hello from "./Hello";
import "./App.scss";

const App = () => {
  const switchFun = (arg) => {
    switch (arg) {
      case "veg": 
        // return [" dal,", "rice"];
        // dkhdbhvdhvd
        // breakzyyyyy


      case "non-veg":
        return ["non veg"];

      default:
        return ["he eats nothing"];
    }
  }; 
  useEffect(() => {
    const res = switchFun("veg");
    console.log("ressss", res);
  }, []);
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};
export default App;
