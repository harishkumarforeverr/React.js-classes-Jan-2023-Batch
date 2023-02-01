import React, { useState } from "react";
import "./App.scss";
const obj = [
  {
    name: "harish",
    role: "react.js",
    salary: 16,
  },
  {
    name: "shiva",
    role: "angular.js",
    salary: 18,
  },
  {
    name: "kalyan",
    role: "react.js",
    salary: 10,
  },
  {
    name: "chandana",
    role: "javascript.js",
    salary: 100,
  },
  {
    name: "rao",
    role: "angular.js",
    salary: 200,
  },
  {
    name: "sharayana",
    role: "javascript.js",
    salary: 8,
  },
];
const App = () => {
  const [infoArr, setinfoArr] = useState(obj);
  console.log(infoArr);

  const handler = () => {
    const newArry = infoArr.filter((obj) => {
      return obj.salary > 20;
    });
    setinfoArr(newArry);
  };
  console.log(infoArr);
  return (
    <div>
      <button onClick={handler}> button</button>
      <br />
      {infoArr.map((obj) => {
        return (
          <div>
            <p> {obj.name}</p>
            <p>{obj.salary}</p>
            <p>{obj.role}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default App;

// setinfoArr({
//   salary: 20,
// });
// setinfoObj((prevState) => {
//   return {
//     // ...prevState,
//     name: "harish",
//     salary: 20,
//   };
// });
// setinfoObj(() => {
//   return {
//     ...infoObj,
//     salary: 20,
//   };
// });
