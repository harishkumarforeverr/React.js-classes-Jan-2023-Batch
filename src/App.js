import React, { useState } from "react";
import "./App.scss";
const App = () => {
  const name = "ssddwedgghsbshttt";

  // expected Outpiut ==>
  const expectedObj = {
    s: 2,
    d: 2,
    g: 2,
    t: 3,
  };
  const obj = name.split("").reduce(
    (prev, acc, index) => {
      console.log(prev, acc);
      const myObj = {};
      if (acc == prev.current) {
        myObj[acc] = (prev[acc] || 0) + 1;
      }
      return {
        ...prev,
        current: acc,
        ...myObj,
      };
    },
    { current: name[0] }
  );
  console.log(obj);
  return (
    <div>
      <p>s</p>
    </div>
  );
};
export default App;
