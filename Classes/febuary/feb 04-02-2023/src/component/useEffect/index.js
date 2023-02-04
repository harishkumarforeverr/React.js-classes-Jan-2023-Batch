import React, { useState, useEffect } from "react";
import "./App.scss";
const obj = [
  {
    _id: 123,
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

  const handleTheDelete = (argIndex) => {
    const newArray = infoArr.filter((objarg, index) => {
      return index !== argIndex;
    });
    setinfoArr(newArray);
  };
  useEffect(() => {
    console.log("im called");
  }, []);
  useEffect(() => {
    console.log("im infinite loop");
  },[]);
  useEffect(() => {
    console.log("something changes", infoArr);
  }, [infoArr]);
  console.log(infoArr);
  return (
    <div>
      <br />
      {infoArr.map((obj, index) => {
        return (
          <div>
            <p> {obj.name}</p>
            <p>{obj.salary}</p>
            <p>{obj.role}</p>
            <button
              onClick={() => {
                handleTheDelete(index);
              }}
            >
              {" "}
              delete me
            </button>
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
