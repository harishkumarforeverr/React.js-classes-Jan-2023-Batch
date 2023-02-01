import React, { useState } from "react";
import "./App.scss";
const App = () => {
  let [show, setShow] = useState(false);
  console.log(" compoenet render");
  return (
    <div>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        {" "}
        click me
      </button>
      <button
        onClick={() => {
          setShow(false);
        }}
      >
        {" "}
        hide me
      </button>
      <h1>hello world </h1>
      <p> im learning javascript hhshs</p>
      {show && <p> im learning javascript 133</p>}
    </div>
  );
};
export default App;

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

// console.log(obj);
// const newObj = obj.filter((argObj, index) => {
//   const res = argObj.salary > 20;
//   console.log(res, index);
//   return res;
// });

// console.log(newObj);

// 21. typeof , string to number, number to string conversion
// console.log(typeof "star", typeof 12, typeof true);
// const no = "20";
// console.log(typeof no);
// const newNo = 20;
// console.log(typeof newNo);
// const SmallNo = String(20);
// console.log(typeof { name: 12 });

// 22. Template Strings
// const name = "Johnny";
// const age = 20;
// // Es6
// const str = `He's often called ${name} ${age}`;
// // ES5
// const newStr = "He's often called " + name + " " + age;
// console.log(str);
// console.log(newStr);
// const obj = {
//   name: "harish",
//   lastname: null,
// };
// const obj2 = {
//   name: "kumar",
//   // lastname: undefined,
// };
