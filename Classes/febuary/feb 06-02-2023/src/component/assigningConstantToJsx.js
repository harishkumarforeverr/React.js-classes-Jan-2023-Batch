import React, { useState, useEffect } from "react";
import "./App.scss";
import Hello from "./Hello";
import Dummy from "./Dummy";
import { Button } from "antd";

const App = () => {
  const view = "skjkbskbs";
  let jsx = null;
  if (view == "one") {
    jsx = <h1> im one</h1>;
  }
  if (view == "two") {
    jsx = <h1> im two</h1>;
  }
  return (
    <div>
      <h1> Home</h1>
      {jsx}
    </div>
  );
};
export default App;
