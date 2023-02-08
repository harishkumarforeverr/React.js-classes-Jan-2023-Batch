import React, { useState, useEffect } from "react";
import Hello from "./Hello";
import Dummy from "./Dummy";
import "./App.scss";

const App = () => {
  // const arr = [9, 0, 6, 3, 4, 8];
  // console.log(arr.sort());
  const obj=[
    {
      name:"harish",
      age:22
    }, 
    {
      name:"sharyana",
      age:18
    }, 
    {
      name:"shiva",
      age:20
    }, 
    {
      name:"kalyan",
      age:21
    }, 
    {
      name:"chandana",
      age: 16
    }, 
  ]
  // const res=obj.sort((a,b)=>{
  //   // console.log(a,b)
  //   // return a.age-b.age
  //   // return b.age-a.age
  //   // return b.name>a.name?1:-1 
  // 
  // }); 
  const res=obj.sort((a,b)=>{ 
    return a.name>b.name?-1:1
  });
  console.log(res)
 
  return <div></div>;
};
export default App;
