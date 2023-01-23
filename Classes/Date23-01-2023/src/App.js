import React, { useState } from "react";
import Hello from "./Hello";
import "./App.scss";

const App = () => {
  const myname = "harish";
  const myparentFun = (arg) => {
    console.log("im aprent", arg);
  };
  return (
    <div>
      <h1> hello world</h1>
      <Hello myname={myname} age={22} myparentFun={myparentFun} />
    </div>
  );
};
export default App;
