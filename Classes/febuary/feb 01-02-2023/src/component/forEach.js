import React, { useState, useEffect } from "react";
import Hello from "./Hello";
import Dummy from "./Dummy";
import "./App.scss";

const App = () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [
    { name: "harush", age: 22 },
    { name: "dinesh", age: 20 }, 
    { name: "sharyana", age: 18 },
    { name: "sharyana", age: 18 },
  ];

  // map ==> => object of array
  //  filter ==> return new array
  //  forEach==> No foreach
  let sum = 0;
  arr1.forEach((obj, index) => {
    sum = sum + obj;
  });
  console.log("sum", sum);
  return <div></div>;
};
export default App;
