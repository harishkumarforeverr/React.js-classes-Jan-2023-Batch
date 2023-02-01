import React, { useState } from "react";
import Hello from "./Hello";
import "./App.scss";

const App = () => {
  const obj = [
    {
      name: "harish",
      role: "react.js",
      id: 18288282,
    },
    {
      name: "dinesh",
      role: "angular.js",
      id: 2882822,
    },
    {
      name: "chandana",
      role: "js",
      id: 892982983,
    },
    {
      name: "shiva",
      role: "python",
      id: 282298824,
    },
    {
      name: "kalyan",
      role: "next.js",
      id: 222225,
    },
  ];
  const [user, setUser] = useState({});
  const handleTheUser = (arg) => {
    const newObj = obj.findIndex((argObj) => {
      console.log(argObj);
      return argObj.id == arg;
    });
    // const newObj = obj.find((argObj) => {
    //   console.log(argObj);
    //   return argObj.id == arg;
    // });
    console.log("newObj", newObj);
    // if (newObj == undefined) {
    //   setUser({});
    // } else {
    //   setUser(newObj);
    // }
  };
  return (
    <div>
      <h1> hello world</h1>
      <button
        onClick={() => {
          handleTheUser(2882822);
        }}
      >
        {" "}
        get id 1
      </button>
      <button
        onClick={() => {
          handleTheUser(282298824);
        }}
      >
        {" "}
        get id 2
      </button>
      <button
        onClick={() => {
          handleTheUser(3);
        }}
      >
        {" "}
        get id 3
      </button>
      <button
        onClick={() => {
          handleTheUser(4);
        }}
      >
        {" "}
        get id 4
      </button>
      <button
        onClick={() => {
          handleTheUser(100);
        }}
      >
        {" "}
        get id 100
      </button>
      <div> name:{user?.name} </div>
      <div> role:{user?.role} </div>
      <div> id:{user?.id} </div>
      {/* <Hello myname={myname} age={22} myparentFun={myparentFun} /> */}
    </div>
  );
};
export default App;
