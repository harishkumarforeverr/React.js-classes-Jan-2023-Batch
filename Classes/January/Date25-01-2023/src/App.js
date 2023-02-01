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
    if (true) {
      console.log("ok");
    }
    if (false) {
      console.log("ok false");
    }
    if (0) {
      console.log("ok zerto");
    }
    if ("") {
      console.log("ok empty ");
    }
    if (null) {
      console.log("ok  null");
    }

    if (undefined) {
      console.log("ok undefined");
    }

    if (11) {
      console.log("ok 111");
    }
    if ("sss") {
      console.log("ok 33");
    }
  };
  return (
    <div>
      <h1> hello world</h1>
      <button
        onClick={() => {
          handleTheUser(1);
        }}
      >
        {" "}
        get id 1
      </button>
      <button
        onClick={() => {
          handleTheUser(2);
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

      {/* <Hello myname={myname} age={22} myparentFun={myparentFun} /> */}
    </div>
  );
};
export default App;
