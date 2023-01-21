import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import "./App.scss";
const App = () => {
  // const obj = [
  //   {
  //     name: "harish",
  //     role: "react",
  //     salary: 10,
  //   },
  //   {
  //     name: "shiva",
  //     role: "python",
  //     salary: 20,
  //   },
  //   {
  //     name: "chandana",
  //     role: "java",
  //     salary: 30,
  //   },
  //   {
  //     name: "kalayn",
  //     role: "python",
  //     salary: 40,
  //   },
  // ];

  // const newObj = obj.map((argObj) => {
  //   if (argObj.role == "python") {
  //     return {
  //       ...argObj,
  //       salary: argObj.salary + 80,
  //     };
  //   }
  //   return argObj;
  // });
  // console.log(newObj);

  // let text = "Hello world ";
  // let newText = text.concat("111111111");
  // console.log(newText, text);

  // let text = "Hello world ";
  // console.log(text, text.slice(5));

  let text = "Hello?world?java?world";
  console.log(text.split("?"));

  return (
    <div>
      <h1>hello world </h1>
    </div>
  );
};
export default App;
